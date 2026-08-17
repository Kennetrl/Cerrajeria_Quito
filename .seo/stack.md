# stack.md — adaptador de cerrajeriaquito.site

Este archivo es el contrato entre las skills `/seo-*` y este repo concreto. Las
skills **no saben** de frameworks: preguntan aquí. Si algo de abajo cambia,
se actualiza este archivo y las skills siguen funcionando sin tocarlas.

Verificado contra el código el 2026-08-17.

## Qué es

**HTML plano, sin build.** No hay generador, ni bundler, ni CI. Los `.html` de la
raíz del repo son literalmente los que sirve Apache. Cada página duplica a mano su
`<head>`, su nav y su footer.

- Servidor: Apache con cPanel (`ea-php74` registrado en `.htaccess`, aunque no hay PHP en uso)
- Despliegue: **FTP manual**. Hay un `.ftpquota` en la raíz, resto del proceso fuera del repo.
- Analítica: GA4 `G-DHG2KQSJ0Y` + Google Ads `AW-18009582131`, con conversión de WhatsApp

## Dónde vive una página

| Cosa | Dónde |
|---|---|
| Página de servicio nueva | `<slug>.html` en la **raíz** del repo |
| Artículo de blog | `blog/<slug>.html` (la carpeta **no existe todavía**, hay que crearla) |
| Imágenes de una página | carpeta propia `<nombre>Imagenes/` en la raíz |
| JS específico de una página | `<nombre>Script.js` en la raíz |
| CSS | `puertasStyle.css` (compartido, mal nombrado) + `animaciones.css` |

**Archivo → URL:** `.htaccess` quita la extensión, así que `puertas.html` se sirve
como `/puertas`. Por eso `stripHtmlExtension: true` en `config.json`.
El canonical **siempre va sin `.html`**.

**Nombres de archivo:** hay dos URLs en camelCase heredadas
(`/estructurasMetalicas`, `/puertasGaraje`). **No renombrarlas**: ya tienen
posiciones e impresiones, y un 301 innecesario no se paga. Las **nuevas** van
en minúsculas con guiones: `pasamanos-acero-inoxidable.html`.

## Dónde va cada etiqueta

Todo dentro del `<head>` de cada archivo, sin includes:

- `<title>` — línea ~9
- `<meta name="description">` — justo después
- `<link rel="canonical">` — antes de los `og:`
- JSON-LD — un único `<script type="application/ld+json">` al final del `<head>`
- `og:image` — **falta en la mayoría de páginas internas**; añadirlo al tocarlas

El bloque de GA4/Ads va **entre `</head>` y `<body>`**, que es una ubicación
inválida pero funciona. Al crear páginas nuevas se pone donde marca la plantilla;
no vale la pena mover el de las páginas viejas.

## Plantillas — aquí la skill hace de build

Como no hay layout, `.seo/plantillas/` lo suple:

| Archivo | Para qué |
|---|---|
| `pagina.html` | página de servicio nueva (raíz) |
| `articulo.html` | artículo de blog (`/blog/`) |
| `_header.html` | el nav real, extraído de `escaleras.html` |
| `_footer.html` | el footer real, extraído de `escaleras.html` |
| `_analytics.html` | bloque GA4 + Ads |

**Cómo se usa:** sustituir los comentarios `<!-- _header.html -->`,
`<!-- _footer.html -->` y `<!-- _analytics.html -->` por el contenido de esos
archivos, y rellenar los marcadores `{{TITLE}}`, `{{DESCRIPTION}}`,
`{{CANONICAL}}`, `{{JSONLD}}`, `{{H1}}`, `{{CONTENIDO}}`, `{{FAQ}}`,
`{{ENLACES_INTERNOS}}`, `{{OG_IMAGE}}`.

**Las plantillas ya corrigen tres errores del original** — al usarlas no se
propagan: `lang="es-EC"` (cuatro páginas dicen `lang="en"`), `geo.placename`
Quito en vez de Ecuador, `og:site_name` con la marca en vez del nombre del
servicio, y H1 antes de H2.

**Para `/blog/`, ojo con las rutas relativas:** el header y el footer usan `./`,
que dentro de `blog/` apunta mal. Hay que reescribir `./` → `../` al insertarlos,
o dejar rutas absolutas desde la raíz.

## Enlazado interno

- **Nav** (`<header>`): dos copias del menú, una para móvil (`.domLineas`) y otra
  para escritorio (`.sectionHeader1`). **Un servicio nuevo hay que añadirlo a las
  dos**, o aparece sólo en un tamaño de pantalla.
- **Footer**: contacto, correo y redes. No lleva enlaces a servicios.
- Los artículos de blog **no van al nav**: se enlazan desde la página de servicio
  correspondiente y desde `/blog/`.

## Sitemap y robots

- `sitemap.xml` en la raíz, **a mano**, con las 10 URLs actuales sin extensión.
  Cada página nueva hay que añadirla ahí; nada lo genera.
- `robots.txt` correcto, apunta al sitemap.

## Galería de imágenes

`.cards-container` está **vacío en el HTML**: las tarjetas las inyecta el
`<nombre>Script.js` de cada página. Una página nueva con galería necesita su
propio script siguiendo ese patrón, o markup estático dentro del contenedor.

## Al terminar un cambio

1. Actualizar `sitemap.xml` si hay URL nueva
2. Añadir el servicio a **las dos** copias del nav
3. Commit en rama propia (no `main`)
4. **Kennet sube por FTP a mano** — hasta que el deploy esté automatizado,
   el ciclo no se cierra solo. Recordárselo explícitamente al acabar.
5. Registrar el cambio:
   `node ~/.claude/seo-toolkit/bin/intervenciones.mjs --seo .seo --log --url <url> --type <tipo> --track <via> --desc "..."`

## Lo que NO se toca

- El `.htaccess`: el 301 de www→no-www y HTTPS funciona y está verificado.
- Las URLs en camelCase existentes.
- `LlaveCQ` / `LlaveCQ.pub` están en `.gitignore` — son claves, no tocar.
