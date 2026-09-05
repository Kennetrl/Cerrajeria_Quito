<?php
/**
 * Sirve la ficha de postulación (Word) con un límite blando por IP.
 *
 * Objetivo: frenar a un bot que la pida en bucle sin bloquear nunca a una
 * persona real. Por eso el límite es alto (10 al día) y "fail-open": si algo
 * del contador falla, la descarga se entrega igual.
 *
 * El .docx no es accesible directo (lo bloquea el .htaccess). Esta es la única
 * puerta.
 */

$archivo = __DIR__ . '/descargas/ficha-postulacion-cerrajero.docx';
$nombre  = 'Ficha_Postulacion_Cerrajero.docx';
$limite  = 10;                     // descargas por IP cada 24 h
$dir     = __DIR__ . '/._descargas'; // carpeta con su propio Deny

// --- Límite blando por IP (si algo falla, se sirve igual) ---
try {
    if (!is_dir($dir)) {
        @mkdir($dir, 0700);
    }
    $ip  = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'desconocida';
    $key = $dir . '/' . substr(hash('sha256', $ip . '|' . date('Y-m-d')), 0, 32) . '.txt';

    // Limpieza ocasional de contadores viejos (1 de cada 20 visitas).
    if (is_dir($dir) && mt_rand(1, 20) === 1) {
        foreach (glob($dir . '/*.txt') ?: array() as $f) {
            if (@filemtime($f) < time() - 172800) {
                @unlink($f);
            }
        }
    }

    $n = is_file($key) ? (int) @file_get_contents($key) : 0;
    if ($n >= $limite) {
        header('Retry-After: 86400');
        http_response_code(429);
        header('Content-Type: text/plain; charset=utf-8');
        echo "Has alcanzado el límite de descargas de hoy.\n";
        echo "Vuelve mañana, o escríbenos por WhatsApp al +593 99 568 0603.";
        exit;
    }
    @file_put_contents($key, $n + 1, LOCK_EX);
} catch (Throwable $e) {
    // fail-open: seguimos y entregamos el archivo
}

// --- Entrega del archivo ---
if (!is_file($archivo)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'La ficha no está disponible en este momento.';
    exit;
}

header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
header('Content-Disposition: attachment; filename="' . $nombre . '"');
header('Content-Length: ' . filesize($archivo));
header('Cache-Control: private, no-store');
header('X-Content-Type-Options: nosniff');
readfile($archivo);
