# Backlog — cerrajeriaquito.site

Estado a 2026-08-17. Ventana de referencia: 28 días hasta el 14 ago 2026
(405 clics, 25.443 impresiones, CTR 1,59%, posición media 6,2).

Prioridad = impresiones × margen de mejora × **valor del lead** ÷ esfuerzo.
Las estructuras metálicas dejan más margen que la cerrajería, así que el volumen
no manda solo. Ver `contexto.md`.

Estados: `pendiente` · `en curso` · `hecho` · `descartado` · `en espera`

---

## P0 — El hallazgo más raro, y encima es de margen alto

| # | Qué | Dónde | Vía | Evidencia | Esfuerzo | Estado |
|---|---|---|---|---|---|---|
| 0 | **`/puertasGaraje` existe, está en el sitemap y recibe CERO impresiones**, mientras la familia de queries «garaje» suma **766 impresiones y 5 clics**, que se está comiendo `/puertas`. Portones y garaje son **margen alto** (ver `contexto.md`). Hay que averiguar si es problema de indexación o de canibalización antes de escribir nada | `/puertasGaraje` | tecnico | 766 imp · `puertas de garaje metalicas` 105 imp pos 3,7 con 0 clics · la página: 0 imp | S | pendiente |

Esto es lo primero de la semana 1. Es la única entrada del backlog donde coinciden
las tres cosas: volumen medido, margen alto y una página que ya existe sin dar
ningún resultado. Empieza inspeccionando la URL en Search Console.

## P1 — Semana 1

| # | Qué | Dónde | Vía | Evidencia | Esfuerzo | Estado |
|---|---|---|---|---|---|---|
| 1 | Title y description sin «puertas metálicas», su query principal | `/puertas` | optimizacion | 12.556 imp · CTR 1,63% · pos 5,6 · ~442 clics de potencial | S | **hecho 17 ago** (sin desplegar) |
| 2 | Añadir «gradas» al title, H1 y cuerpo. Regionalismo ecuatoriano: ya rankea 5,5 por «gradas metalicas» y 9,2 por «escaleras metalicas» | `/escaleras` | optimizacion | 166 imp «gradas metalicas» con 0 clics | S | **hecho 17 ago** (sin desplegar) |
| 3 | **Página nueva de pasamanos de acero inoxidable** | `/pasamanos-acero-inoxidable` | contenido-nuevo | clúster ~1.267 imp/28d con 8 clics; posiciones dispersas 1,4–25,2 | M | pendiente |
| 4 | **Página nueva para constructoras y obra**: estructuras, techos livianos, galpones. Margen alto declarado, y el mejor CTR del sitio (4,53%) con poco volumen — hay techo por explotar. Habla al avatar 2 | `/estructuras-obra` o reescribir `/estructurasMetalicas` | contenido-nuevo | 85 imp en queries de obra · `estructuras metalicas quito` 46 imp pos 8,6 | M | pendiente |
| 5 | `lang="en"` en cuatro páginas escritas en español | todas | tecnico | Bug objetivo. Correlación con CTR bajo **no demostrada** (remodelaciones es `en` y tiene buen CTR) | XS | **hecho 17 ago** — unificado a `es-EC` en las 10 páginas (sin desplegar) |

**Cambio de prioridad respecto a la primera versión de este backlog:** Kennet
declaró el 17 ago que el margen está en **estructuras/obra, portones y pérgolas**,
no en pasamanos ni Alucobond. Por eso entra la página de obra y sale la segunda
página de pasamanos (`/pasamanos-hierro`), que pasa a P2. Pasamanos de acero
inoxidable se queda porque 1.267 impresiones con 8 clics es demasiado grande para
ignorarlo aunque el margen sea medio: es el contrapeso de volumen del experimento.

**Al separar pasamanos de `/escaleras` hay que deshacer la canibalización:** hoy el
H1 de `/escaleras` es «Pasamanos de acero inoxidable Quito - precios» y su title
mezcla escaleras + pasamanos. Al crear las páginas 3 y 4, `/escaleras` se queda
con gradas y escaleras, y enlaza a las nuevas. Si no se hace, las tres páginas
compiten entre sí.

## P1 — Grupo de control (NO TOCAR en semana 1)

`/ventanas` (3.588 imp, CTR 0,95%), `/estructurasMetalicas`, `/puertasGaraje`,
`/remodelaciones`, home y `/nosotros`.

Coste asumido: `/ventanas` tiene ~118 clics de potencial esperando un ciclo. Se
paga a cambio de poder atribuir. Entra en semana 2 o 3.

## P2 — Semanas 2–5

| # | Qué | Dónde | Vía | Evidencia | Esfuerzo | Estado |
|---|---|---|---|---|---|---|
| 6 | `alucobond`: 429 imp en posición 11,3 con **0 clics**. Página 2, producto premium | `/alucobond` | optimizacion | 1.202 imp pág · CTR 0,67% · pos 10,0 | S | pendiente |
| 7 | Title y description de `/ventanas` sin «protectores de ventanas» ni «ventanas de aluminio» | `/ventanas` | optimizacion | ~118 clics de potencial | S | pendiente |
| 8 | `@id` de `LocalBusiness` duplicado idéntico en las 9 páginas. Debe ser `Service` + `BreadcrumbList` por página, con el `LocalBusiness` sólo en home | todas | tecnico | crawl: 9 páginas | M | pendiente |
| 9 | Sin `FAQPage` en ninguna página. Es la vía directa a ser citado por ChatGPT y Gemini | todas | optimizacion | 0 páginas | M | pendiente |
| 10 | `og:image` ausente en páginas internas | varias | tecnico | 2 de 3 revisadas | XS | pendiente |
| 11 | `aggregateRating` autodeclarado con `reviewCount: 1`. Coincide con la única reseña real del GBP. Google no lo muestra para LocalBusiness y es zona de riesgo | `index.html` | tecnico | — | XS | pendiente |
| 12 | Titles demasiado largos (el de `/escaleras` pasa de 100 caracteres y se corta en la SERP) | varias | optimizacion | — | S | pendiente |
| 13 | `puertasStyle.css` cargado ×2 y favicon ×3 en algunas páginas | `/puertas` `/ventanas` | tecnico | crawl | XS | **hecho en /puertas 17 ago**; /ventanas sigue (es control) |
| 14 | Crear `/blog/` con su índice, para el carril de contenido informativo | nuevo | contenido-nuevo | — | M | pendiente |
| 14b | **Página de pasamanos de hierro** (bajó de P1 al conocer los márgenes) | `/pasamanos-hierro` | contenido-nuevo | 203 imp · 5 clics · pos 7,0 | M | pendiente |
| 14c | **El catálogo de precios está en JS, invisible en el HTML.** 72 productos con precio en 4 páginas. Sacarlo al HTML y añadir schema `Product`/`Offer` abre resultados enriquecidos con precio | `/puertas` `/escaleras` `/ventanas` `/remodelaciones` | tecnico | 771 imp de intención de precio · $250–$3.000 en /puertas | M | pendiente — **depende de la decisión de Kennet** |
| 14d | Sección de pérgolas **dentro** de la página de estructuras, no página propia | `/estructuras-obra` | contenido-nuevo | 5 imp en 28 días: margen alto sin demanda medible | S | pendiente |

## P3 — Investigar antes de actuar

| # | Qué | Por qué no es una acción todavía |
|---|---|---|
| 15 | `puerta` (430 imp, pos 3,2) y `ventana` (334 imp, pos 3,4) suman **0 clics** | Una posición 3 real nunca da 0%. Verificar la SERP con `/seo-brief` antes de tocar nada: si son packs de imágenes o SERPs fuera de Ecuador, subir posiciones no sirve |
| 16 | Google reporta el host `www` con clics propios | El 301 está bien y verificado con curl. Averiguar por qué antes de asumir que está roto |
| 17 | **El CTR cae 10 semanas seguidas** (1,90% → 1,59%) con posición clavada en 6,2 | Sospecha: más elementos en la SERP (AI Overviews, packs) comiéndose el clic. Se confirma mirando SERPs reales, no en los datos |

## En espera — decisión de negocio

| # | Qué | Por qué |
|---|---|---|
| 18 | Página `/cerrajeria` para `cerrajero quito` (305 imp) + `cerrajero` + `cerrajeria` | Despriorizado a propósito: la cerrajería deja menos margen que las estructuras metálicas. El volumen está, el valor del lead no. Revisar si cambia el modelo de negocio |

## Fuera del código — de Kennet

| # | Qué | Impacto |
|---|---|---|
| 19 | **Conseguir reseñas en el GBP.** Hay 1. Con 675 vistas/mes | Alto en el pack local, y no depende del código |
| 20 | Fotos del GBP sin actualizar desde hace ~116 días | Medio |
| 21 | Automatizar el deploy (hoy FTP manual) | El ciclo semanal no se cierra solo sin esto |

---

## Registro de la semana 1 — 17 ago 2026

Aplicado en la rama `seo/fix-2026-08-17`. **Sin desplegar todavía.**

Hallazgo que cierra el P0: `/puertasGaraje` **no es contenido duplicado**. Tiene
2.340 caracteres de texto propio y cero frases compartidas con `/puertas` (que
tiene 776). Está viva (HTTP 200), en el sitemap con `lastmod` 2026-07-25, enlazada
desde el nav y desde el cuerpo de `/puertas` con buen anchor. Nació el 25 de julio
y tres semanas después no tiene ni una impresión. **No es un problema de
optimización: no está indexada.** La acción es solicitar indexación en Search
Console — sólo Kennet puede hacerlo.

Nota sobre pérgolas: `/remodelaciones` ya las menciona en su title, así que hay
sitio para ellas sin crear página nueva. Confirma la decisión de la entrada 14d.

Pendiente al cerrar: la fecha de las 5 intervenciones registradas dice 2026-08-17,
pero **debe ser la fecha del deploy por FTP**. Corregirla en `intervenciones.json`
en cuanto Kennet confirme, o la atribución de la próxima semanal medirá días en los
que el cambio aún no estaba online.

## Decisión pendiente descubierta el 17 ago — precios

Kennet dijo que no se publican precios. **La web publica 72**, inyectados por JS
en `/puertas` (35, $250–$3.000), `/escaleras` (16, $55–$950), `/remodelaciones`
(11) y `/ventanas` (10). Se descubrió al renderizar la página en el navegador; en
el HTML no se ven.

Mientras no lo decida, el contenido los trata como **precios de referencia por
modelo**, que es lo único coherente con lo que el visitante ve. Si decide
mantenerlos, la acción es la 14c (sacarlos al HTML + schema `Product`). Si decide
retirarlos, hay que editar cuatro archivos `.js`, no sólo dejar de escribir cifras.

## Dato clave para las páginas 3 y 4 (medido el 17 ago)

**`/escaleras` es en realidad una página de pasamanos disfrazada.** De sus 16
productos con precio, **13 son pasamanos** y sólo 3 son escaleras o gradas:

| Tipo | Productos | Rango |
|---|---|---|
| Escaleras / gradas | 3 (N1 caracol, N2 gradas con pasamanos, N21 pasamanos con gradas) | $850 – $950 |
| Pasamanos de acero inoxidable | 7 (N4, N6, N8 con vidrio templado, N12, N14, N18, N19) | $55 – $220 |
| Pasamanos de hierro | 6 (N7, N9, N10, N13, N15, N16) | $60 |

Esto confirma la canibalización desde el catálogo, no sólo desde el H1: la página
que dice «escaleras» vende sobre todo pasamanos. Y da la división natural de las
páginas nuevas **por material**, que es como busca el avatar 1:

- `/pasamanos-acero-inoxidable` → los 7 productos inox ($55–$220, con la variante
  de vidrio templado como gama alta). Clúster de ~1.267 imp.
- `/pasamanos-hierro` → los 6 de hierro (todos a $60, precio de entrada claro).
  203 imp, pos 7,0.
- `/escaleras` se queda con los 3 de escaleras/gradas y **conserva una sección
  corta de pasamanos que enlaza a las dos nuevas** (hub-and-spoke). No vaciarla
  del todo: hoy rankea 10,2 por «pasamanos de acero inoxidable» y 7,0 por
  «pasamanos de hierro», y las páginas nuevas nacen sin autoridad.

Las fotos ya existen: 21 `*Pasamanos.webp` en `escalerasImagenes/`. No hay que
mover archivos, sólo repartir los productos entre los scripts nuevos.

**Decisión tomada sobre la página 4:** se hace `/pasamanos-hierro` y **no** una
página nueva de obra. Motivo: las queries de obra suman 85 imp en 28 días y
`/estructurasMetalicas` ya se las lleva con el mejor CTR del sitio (4,53%). Una
página nueva compitiendo con ella sería autolesión. La obra se aborda **reescribiendo**
`/estructurasMetalicas` para el avatar 2, como optimización, en la semana 2 — y
entonces sale del grupo de control.

Consecuencia estratégica que hay que decirle a Kennet: **sus servicios de margen
alto no tienen demanda de búsqueda sin dueño.** Lo que está libre es pasamanos,
que es de margen medio. Para crecer en estructuras y portones vía SEO habría que
crear demanda (contenido de por qué), que es lento; el margen alto lo van a
seguir trayendo la ficha de Google y los anuncios, no el orgánico.
