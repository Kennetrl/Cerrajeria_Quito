# Snapshots históricos, fuera de la serie de comparación

Lo que hay aquí NO lo lee el sistema: `listSnapshots()` sólo mira los `.json` de la
carpeta padre, no de las subcarpetas.

`2026-08-16-csv-92dias.json` es el export manual de Search Console con el que se
hizo el diagnóstico inicial (15 may – 14 ago 2026, **92 días**, 1.476 clics).
Está aquí y no arriba a propósito: el ciclo semanal usa ventanas de **28 días**, y
comparar 28 contra 92 daría una caída del -70% que no significa nada.

Se conserva porque es la fuente del diagnóstico y porque cubre más historia que
las ventanas semanales. Para consultarlo, léelo a mano.

**Regla:** todos los snapshots de la carpeta padre deben tener la misma anchura de
ventana. `bin/panel.mjs` avisa si detecta mezcla.
