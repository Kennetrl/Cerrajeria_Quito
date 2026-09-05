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
| 1 | Title y description sin «puertas metálicas», su query principal | `/puertas` | optimizacion | 12.556 imp · CTR 1,63% · pos 5,6 · ~442 clics de potencial | S | **hecho y desplegado 17 ago** |
| 2 | Añadir «gradas» al title, H1 y cuerpo. Regionalismo ecuatoriano: ya rankea 5,5 por «gradas metalicas» y 9,2 por «escaleras metalicas» | `/escaleras` | optimizacion | 166 imp «gradas metalicas» con 0 clics | S | **hecho y desplegado 17 ago** |
| 3 | **Página nueva de pasamanos de acero inoxidable** | `/pasamanos-acero-inoxidable` | contenido-nuevo | clúster ~1.267 imp/28d con 8 clics; posiciones dispersas 1,4–25,2 | M | **hecho 19 ago, pendiente de deploy** |
| 4 | **Página nueva para constructoras y obra**: estructuras, techos livianos, galpones. Margen alto declarado, y el mejor CTR del sitio (4,53%) con poco volumen — hay techo por explotar. Habla al avatar 2 | `/estructuras-obra` o reescribir `/estructurasMetalicas` | contenido-nuevo | 85 imp en queries de obra · `estructuras metalicas quito` 46 imp pos 8,6 | M | pendiente |
| 5 | `lang="en"` en cuatro páginas escritas en español | todas | tecnico | Bug objetivo. Correlación con CTR bajo **no demostrada** (remodelaciones es `en` y tiene buen CTR) | XS | **hecho y desplegado 17 ago** — unificado a `es-EC` en las 10 páginas |

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
| 6 | `alucobond`: 429 imp en posición 11,3 con **0 clics**. Página 2, producto premium | `/alucobond` | optimizacion | 1.202 imp pág · CTR 0,67% · pos 10,0 | S | **hecho 5 sep** — title 70→56, H1 acortado, intro antes del catálogo, contenido con contexto de Quito, FAQ. Medir en 3 semanas si sube de pág. 2 |
| 7 | Title y description de `/ventanas` sin «protectores de ventanas» ni «ventanas de aluminio» | `/ventanas` | optimizacion | ~118 clics de potencial | S | **hecho 5 sep** — reescrito a cubreventana/protector/reja + hierro/fierro/aluminio. Además: SERP verificada, el problema no era sólo el title (Google lo reescribía y fabricaba la description con «$55 N2»); se corrigió la estructura |
| 8 | `@id` de `LocalBusiness` duplicado idéntico en las 9 páginas. Debe ser `Service` + `BreadcrumbList` por página, con el `LocalBusiness` sólo en home | todas | tecnico | crawl: 9 páginas | M | **hecho 5 sep** — 7 páginas de servicio + puertasGaraje pasan a `@graph` con `Service`+`BreadcrumbList`+`FAQPage` y `provider` por `@id`. Home, `/nosotros` y `/contacto` conservan el `LocalBusiness` completo |
| 9 | Sin `FAQPage` en ninguna página. Es la vía directa a ser citado por ChatGPT y Gemini | todas | optimizacion | 0 páginas | M | **hecho 5 sep** — las 11 páginas con `FAQPage`. Expectativa: sin rich result (Google los quitó en 2023), sí para citas de IA y captura de queries en forma de pregunta |
| 10 | `og:image` ausente en páginas internas | varias | tecnico | 7 de 11 sin él, 2 con el logo | XS | **hecho 26 ago** — las 11 con `og:image` real + `twitter:card`. Ver el registro del thumbnail |
| 11 | `aggregateRating` autodeclarado con `reviewCount: 1`. Coincide con la única reseña real del GBP. Google no lo muestra para LocalBusiness y es zona de riesgo | `index.html` | tecnico | — | XS | pendiente |
| 12 | Titles demasiado largos (el de `/escaleras` pasa de 100 caracteres y se corta en la SERP) | varias | optimizacion | — | S | parcial — `/estructurasMetalicas` (68→58) y `/remodelaciones` (84→60) hechos el 5 sep. `/escaleras` ya se acortó el 17 ago |
| 13 | `puertasStyle.css` cargado ×2 y favicon ×3 en algunas páginas | `/puertas` `/ventanas` `/remodelaciones` | tecnico | crawl | XS | **hecho** — /puertas 17 ago, /ventanas y /remodelaciones 26 ago. Las 11 con 2 hojas y 1 favicon |
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
| 19 | **Conseguir reseñas en el GBP.** Hay 1. Con 675 vistas/mes | Alto en el pack local, y no depende del código. **26 ago: Kennet descarta el CTA público en la web** — quiere controlar a quién se le pide. El enlace a la ficha se reparte a mano, no desde el sitio |
| 20 | Fotos del GBP sin actualizar desde hace ~116 días | Medio |
| 21 | Automatizar el deploy (hoy FTP manual) | El ciclo semanal no se cierra solo sin esto |

---

## Registro de la semana 1 — 17 ago 2026

Aplicado en la rama `seo/fix-2026-08-17`, fusionado a `main` (`1f806fe`) y **desplegado por FTP el 17 ago 2026**. Verificado en vivo: titles, `lang="es-EC"` y el fix del CSS responden correctos en producción.

Hallazgo que cierra el P0: `/puertasGaraje` **no es contenido duplicado**. Tiene
2.340 caracteres de texto propio y cero frases compartidas con `/puertas` (que
tiene 776). Está viva (HTTP 200), en el sitemap con `lastmod` 2026-07-25, enlazada
desde el nav y desde el cuerpo de `/puertas` con buen anchor. Nació el 25 de julio
y tres semanas después no tiene ni una impresión. **No es un problema de
optimización: no está indexada.** La acción es solicitar indexación en Search
Console — sólo Kennet puede hacerlo.

Nota sobre pérgolas: `/remodelaciones` ya las menciona en su title, así que hay
sitio para ellas sin crear página nueva. Confirma la decisión de la entrada 14d.

Cerrado: el deploy se hizo el mismo 17 de agosto, así que la fecha de las 6
intervenciones de `intervenciones.json` ya era la correcta. Sólo se retiró el
marcador «PENDIENTE DE DEPLOY». **La ventana de medición arranca el 17 ago 2026**
y la próxima semanal es la primera que puede atribuir estos cambios.

## Andamios — proyecto aparte, no mezclar

El 17 ago Kennet inspeccionó en Search Console páginas que **no son de este sitio**:
son de `andamiosquito.site`, el proyecto hermano que `contexto.md` ya registraba
como «todavía no está en el sistema». Diagnóstico que devolvió GSC:

- «Rastreada: actualmente sin indexar» — Google entró y decidió no indexar
- «Declarada por el usuario como canónica: **Nada**» — ese sitio no tiene canonicals
- Sin sitemap de referencia y sin página de referencia detectada

Contraste con la cerrajería, donde las 10 páginas tienen canonical correcto,
sitemap y enlaces internos. Son sitios en estados muy distintos.

**Solicitar indexación no lo va a arreglar**: eso sólo mueve el caso «Descubierta:
actualmente sin indexar». Lo que hace falta ahí es canonicals, sitemap enviado y
enlaces desde la home (que sí está indexada) hacia las internas. Que Google no
detecte ninguna página de referencia teniendo la home indexada apunta a un nav que
no puede seguir.

Si entra al sistema, va con su propio `/seo-setup` y su propia carpeta. Mezclar los
dos dominios haría ilegibles los informes de ambos.

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

## Registro — 19 ago 2026: página 3 (pasamanos de acero inoxidable)

Brief en `.seo/paginas/pasamanos-acero-inoxidable.brief.md`, con SERP verificada
en vivo el mismo día: `/escaleras` ya rankeaba **#2** para «pasamanos de acero
inoxidable quito» sin tener página propia, y 3 de los 8 competidores del top
tenían la página caída (dos 404, uno con errores PHP visibles). Oportunidad real
y de listón bajo.

Página creada en la rama `seo/pasamanos-acero-inoxidable` (commits `cb974e0` y
`87acfdf`). **Confirmado desplegado e indexado**: responde 200 en vivo con el
title correcto y Search Console le registra impresiones desde el 19-20 ago
(20 imp, posición 7,7 en la semana 18–24 ago). Se movieron los 7 productos inox del
catálogo de `escalerasScript.js` a `pasamanosAceroInoxidableScript.js` (reusando
las fotos existentes, sin mover archivos); `/escaleras` conserva gradas/escaleras
y los 6 pasamanos de hierro, con enlace a la página nueva. Segundo enlace
entrante añadido en `/puertas`. `sitemap.xml` actualizado. Service + BreadcrumbList
+ FAQPage en JSON-LD, referenciando el `LocalBusiness` de la home por `@id` en
vez de duplicarlo (no se tocaron las 9 páginas viejas que sí lo duplican — sigue
siendo la entrada 8 de este backlog).

**Actualización 19 ago:** se decidió inicialmente dejarla fuera del nav (modelo
hub-and-spoke), pero Kennet pidió añadirla. Está en las dos copias del menú
(`.domLineas` y `.sectionHeader1`) de las 11 páginas del sitio, justo después de
«ESCALERAS», y también en `.seo/plantillas/_header.html` para que las páginas
futuras la hereden.

Quedan 3 preguntas sin responder en el brief (no se inventó nada): el grado de
acero inoxidable (304 u otro), el plazo típico de fabricación e instalación, y si
el mantenimiento cubre pasamanos instalados por terceros. La página se publicó
sin esas 3 FAQ; se pueden añadir cuando Kennet las confirme.

---

## Registro — 26 ago 2026: el hallazgo de imágenes

Kennet pidió trabajar `alt`, `title` y keywords en imágenes porque «no aparecemos
en imágenes». **Los datos dicen lo contrario, y es mucho mejor noticia.**

Todos los snapshots del sistema se tomaban con `type: 'web'`, así que la búsqueda
de imágenes llevaba desde el principio fuera de la medición. Consultada por primera
vez el 26 ago (ventana 27 jul – 23 ago):

| Tipo de búsqueda | Clics | Impresiones | CTR | Posición |
|---|---:|---:|---:|---:|
| Web | 402 | 24.346 | 1,65% | 6,2 |
| **Imagen** | **49** | **34.895** | **0,14%** | **~31** |

**La búsqueda de imágenes genera más impresiones que la web entera** y convierte a
la undécima parte. No es que no aparezcamos: aparecemos muchísimo, en la página 3
de la cuadrícula, donde nadie pincha.

Por página (imagen, 28 días):

| Página | Clics | Impresiones | Posición |
|---|---:|---:|---:|
| `/puertas` | 29 | **24.578** | 30,8 |
| `/ventanas` | 5 | 5.254 | 32,3 |
| `/escaleras` | 11 | 3.770 | 30,3 |
| `/alucobond` | 1 | 580 | 45,0 |
| `/estructurasMetalicas` | 0 | 358 | 42,1 |
| `/puertasGaraje` | 0 | 160 | 39,3 |

2.469 queries distintas. Las mayores: `puertas metalicas sencillas` (1.713 imp,
0 clics), `puertas metalicas` (1.524), `puerta de metal` (846),
`modernas puerta reja metalica` (715), `modelos de ventanas de fierro cuadrado` (622).

**El bloqueo técnico que hay debajo:** de las ~145 imágenes del sitio sólo **44**
están en el HTML servido, y la mayoría son el logo y el icono del menú. Contadas
por página (excluyendo las que viven dentro de comentarios HTML):

| Página | `<img>` vivos en el HTML | Impresiones de imagen |
|---|---:|---:|
| `/puertas` | **2** (logo + menú) | 24.578 |
| `/ventanas` | **2** (logo + menú) | 5.254 |
| `/escaleras` | **2** (logo + menú) | 3.770 |
| `/alucobond` | **2** (logo + menú) | 580 |
| `/puertasGaraje` | 11 (9 portones a mano) | 160 |

`/puertas` acumula 24.578 impresiones de imagen **sin una sola foto de producto en
su HTML**. Las 35 las pinta `puertasScript.js` después. Que aun así aparezca tanto
demuestra que Google renderiza y las encuentra — y que están en posición 30,8
sugiere que las trata como ciudadanas de segunda. Las **91 restantes las inyecta JavaScript** desde 7
scripts de catálogo (`puertasScript.js` 35, `estructurasScript.js` 14,
`remodelaciones.js` 11, `ventanasScript.js` 10, `escalerasScript.js` 9,
`pasamanosAceroInoxidableScript.js` 7, `alucobond.js` 5). El `alt` se pone con
`setAttribute` a partir del nombre del producto, que empieza por código interno
(`N1 - Puerta con tool perforado`). Es el mismo problema que la entrada 14c de los
precios: el contenido existe, pero no en el HTML.

Los nombres de archivo tampoco dicen nada: `1puerta.webp`, `2puerta.webp`. La única
carpeta bien nombrada es `portonesImagenes/` (`porton-metalico-batiente-dorado-quito.webp`),
que además es la única galería escrita a mano en el HTML.

Hay referencias a `images.pexels.com` en `/puertas`, `/escaleras`, `/ventanas`,
`/remodelaciones` y `/alucobond`, pero **verificado el 26 ago: están todas dentro
de comentarios HTML**, restos de la plantilla original. No se cargan y no hacen
daño de SEO. Sólo son peso muerto en el archivo.

### Entradas nuevas

| # | Qué | Dónde | Vía | Evidencia | Esfuerzo | Estado |
|---|---|---|---|---|---|---|
| 22 | **Sacar las 91 imágenes del catálogo al HTML servido.** Bloquea todo lo demás de imágenes | 7 scripts + sus páginas | tecnico | 34.895 imp/28d en imagen a 0,14% | M | **hecho 26 ago** — 91 tarjetas escritas en HTML, los 7 scripts eliminados |
| 23 | **`alt` real** en las 93 referenciadas, sin códigos `N1 -`. Keyword literal sólo en 1-2 por página | todas | optimizacion | 2.469 queries de imagen | M | **hecho 26 ago** — las 93 revisadas una a una; 9 alt corregidos por contradecir la foto |
| 24 | **Renombrar los archivos** a `kebab-case` con significado | todas las carpetas de imágenes | tecnico | `1puerta.webp` | M | **hecho 26 ago** — 93 con `git mv`, 105 referencias actualizadas, 0 en 404. Las no referenciadas no se tocan |
| 25 | Limpiar el marcado muerto de la plantilla (`pexels`, `bt_add_to_cart`) | 5 páginas | tecnico | verificado 26 ago | XS | **hecho 26 ago** — desapareció al reescribir `.cards-container` |
| 26 | `title` donde aporte algo que el `alt` no dice | todas | optimizacion | 0 imágenes con `title` antes | S | **hecho 26 ago** — modelo + precio de referencia; omitido en estructuras y Alucobond, donde repetiría el alt |
| 27 | Keyword en `H1` y en las primeras 100 palabras | por página | optimizacion | — | S | **hecho/verificado 26 ago** — las 9 páginas de servicio ya cumplían tras el trabajo del 17 ago; comprobado con script |
| 28 | `width`/`height` y `loading="lazy"`; `image` en el JSON-LD | todas | tecnico | — | S | **hecho 26 ago** — 226 imágenes con dimensiones reales; `image` con fotos reales en 7 páginas |

**Orden obligado: 22 → 23 → 24.** Escribir `alt` antes de sacar las imágenes al
HTML es trabajo tirado. Ejecutado en ese orden el 26 ago, en la rama
`seo/imagenes-2026-08-26`.

**Empezar por `/puertas`**: sus 24.578 impresiones de imagen son el 70% del total
del sitio. Pero está en observación por la caída de -25 clics tras el cambio del
17 ago; el trabajo de imágenes es aditivo y no toca el title, así que no rompe esa
medición — hay que dejarlo anotado como intervención aparte para no confundir las
dos atribuciones.

### Consecuencia para la medición

Todo el histórico de `.seo/snapshots/` es **sólo web**. Las cifras de los informes
anteriores no estaban mal, pero contaban poco más de la mitad del tráfico real:
451 clics reales frente a los 402 que reportábamos. Añadido
`fetchTotalsByType()` y `fetchDimensionByType()` al toolkit para poder consultarlo.


## Registro — 26 ago 2026: ejecución del trabajo de imágenes

Rama `seo/imagenes-2026-08-26`. Entradas 22 a 28 cerradas de una vez porque
22 bloquea a 23 y 23 a 24: separarlas en semanas habría dejado el trabajo a medias
sin poder medir nada.

**Lo que cambió, en números:**

| | Antes | Después |
|---|---:|---:|
| `<img>` en el HTML servido | 44 | **226** |
| Tarjetas de producto en HTML | 0 | **91** |
| Imágenes con `alt` útil | ~35 | **226** |
| Imágenes con `width`/`height` | 0 | **226** |
| Imágenes con `title` | 0 | 91 |
| Nombres de archivo con significado | 9 (portones) | **102** |
| Scripts de catálogo | 7 | **0** |

**Decisión de arquitectura:** las galerías se escriben en el HTML y los 7
`*Script.js` se eliminan, en vez de mantener el JS y duplicar el marcado. Con
FTP manual y sin build, un sistema doble se desincroniza en la primera edición.
Cada `.cards-container` lleva un comentario explicando cómo añadir un producto.

**Verificado antes de cerrar:** 0 imágenes en 404, 0 errores de anidamiento HTML,
un solo `<h1>` por página, 12 bloques JSON-LD válidos, y las galerías renderizadas
en Chrome sobre un servidor local — idénticas a como se veían con el JS.

**Anotado para más adelante:** la foto de `N7 - Puerta de tool tamborada`
(`puerta-tool-tamborada-gris-moderna.webp`) es una captura de pantalla de Facebook,
con la interfaz de la app visible. Conviene sustituirla por la foto original.

**Lo que sigue sin resolverse:** la posición media en imágenes es 31. Este trabajo
quita el impedimento técnico, no garantiza el salto. La medición honesta es
comparar `type: image` dentro de 2-3 semanas, cuando Google haya vuelto a rastrear
e indexar los nombres nuevos. Ojo: renombrar archivos **reinicia el historial de
cada imagen en el índice**; es normal ver una caída de impresiones de imagen antes
de la recuperación.


## Registro — 26 ago 2026: el thumbnail de la SERP era el icono de hamburguesa

Kennet enseñó el resultado de `/puertas` en Google: la miniatura era **el icono
del menú** (tres barras blancas sobre negro) en vez de una puerta.

Causa, confirmada en el código: `/puertas` tenía `og:locale`, `og:type`,
`og:title`, `og:description`, `og:url` y `og:site_name` — **pero no `og:image`**.
Sin esa etiqueta Google elige la miniatura por su cuenta, y hasta el trabajo de
hoy el HTML de esa página sólo tenía dos imágenes: el logo y `icons/menu.webp`.
Encima, el icono está guardado a **500x500**, tamaño de sobra para ser candidato.

Es la entrada 10 del backlog, que estaba estimada como XS y catalogada como
«social». No lo era: afectaba a cómo se ve el resultado en la búsqueda.

Arreglado:

- `og:image` en las 11 páginas, apuntando a una foto representativa de cada una
  (7 no la tenían; `index` y `nosotros` apuntaban al logo). Con
  `og:image:width`, `og:image:height` y `og:image:alt`.
- `twitter:card` (`summary_large_image`) y `twitter:image` en las 11. No había
  ninguna etiqueta de Twitter en todo el sitio.
- `icons/menu.webp` reducido de 500x500 a **96x96** (7,4 KB → 1,6 KB). Se muestra
  a 40px (`.lineas3 { height: 2.5rem }`), así que 96 va sobrado incluso en
  pantallas retina, y deja de ser candidato a miniatura. `width`/`height`
  actualizados en las 11 páginas.

Con las 91 fotos ya en el HTML, el `image` del JSON-LD apuntando a fotos reales y
ahora el `og:image` explícito, Google tiene tres señales coherentes donde antes
tenía un icono. **Aun así la miniatura la elige Google**: esto mejora mucho las
probabilidades, no las garantiza, y tarda en refrescarse lo que tarde el próximo
rastreo.


## Corrección — 26 ago 2026: el logo salía estirado (regresión propia)

Kennet avisó de que el logo del nav salía ancho y aplastado en las 11 páginas.
**Lo rompí yo esta misma tarde** al añadir `width`/`height` a las imágenes.

Causa: `.logo-navbar` y `.lineas3` fijaban **sólo la altura** (`height: 7rem` y
`height: 2.5rem`). Sin atributos, el navegador deducía el ancho del ratio real
(el logo es 500x500, cuadrado). Al declarar `width="500"`, ese atributo pasa a
valer como *presentational hint*: el CSS ganaba en `height` pero el ancho lo
tomaba del atributo, así que el logo se pintaba a 500x112 en vez de 112x112.

Arreglado con `width: auto` en las cuatro reglas (`.logo-navbar` y `.lineas3`, en
`style.css` y `puertasStyle.css`). Es la solución correcta y no la de quitar los
atributos: declarados, el navegador conoce la proporción y reserva el hueco antes
de descargar la imagen, que era el motivo de ponerlos.

Verificado en Chrome: logo cuadrado y proporcionado, y las galerías de
`/alucobond`, `/index` y `/puertasGaraje` intactas.

**Lección para la skill:** al añadir `width`/`height` a imágenes de un sitio
existente hay que revisar antes qué reglas CSS fijan una sola dimensión. Es un
efecto secundario silencioso: no rompe nada, sólo deforma.

---

## Registro — 5 sep 2026: snippet de `/ventanas`, estructura del catálogo y FAQ en todas

Rama `seo/ventanas-faq-2026-09-05`. Disparador: Kennet enseñó la SERP real de
«cubreventanas de hierro» (cuadrícula de imágenes + Pinterest + vídeos + un bloque
FAQ de Google, y recién debajo el sitio) y la del propio resultado de `/ventanas`,
donde **Google reescribía el title** y **fabricaba la description** juntando el H2
+ el `alt` de la primera foto + «$55. N2 - Cubre-ventana». Parecía salida rota de
una base de datos.

**Causa, y una parte es autoinfligida el 26 ago:** al sacar las 91 fichas del
catálogo del JS al HTML (backlog #22), el catálogo quedó **antes** del texto
descriptivo. Lo primero que leía Google tras el H1 era «$55 N2 · $55 N3…» diez
veces. Medido: en 6 páginas el `cards-container` empezaba 120–250 caracteres
después del `<h1>`, con 80 códigos `N#` visibles por delante de la prosa.
`/puertas` la peor: 35 códigos por delante en la página de 41.785 imp/3m.

**Lo que se hizo (las 4 tareas que pidió Kennet + FAQ en todas):**

1. **`/ventanas`** — verificada la SERP (el bloque de imágenes y Pinterest comen
   el clic en las queries visuales, confirma la sospecha de la entrada 15). Title y
   description reescritos a *cubreventana / protector / reja + hierro/fierro +
   aluminio*. Texto descriptivo **movido antes** del catálogo. Secciones nuevas de
   **ventanas de aluminio** (547 imp de esa familia llegaban a una página que sólo
   hablaba de hierro) y de **ventanas/marcos de hierro (fierro)** — la palabra
   «fierro» no existía en el sitio y son 394 imp web + 622 en imágenes. «reja» y
   «protector» reforzados como sinónimos. FAQ de 8 preguntas tomadas del bloque
   real de Google; descartadas las de «cubrir sin cortinas» (intención decorativa).

2. **`/alucobond`** — no invento contenido de «fachadas elegantes» (no hay volumen;
   la demanda *es* «alucobond», 1.287 imp en pos 11). Title 70→56, H1 acortado,
   intro antes del catálogo, primeros párrafos reescritos con contexto de Quito
   (locales, rótulos, edificios) en vez de relleno genérico, FAQ de 5. Corregido de
   paso el texto de WhatsApp de las 5 tarjetas, que decía «sección de
   Ventanas-Cubreventas».

3. **`FAQPage` en las 11 páginas.** Las 9 que no lo tenían + refuerzo. En las 7
   páginas de servicio y en `/puertasGaraje` el mismo bloque pasa a `@graph` con
   `Service` + `BreadcrumbList` + `FAQPage` y `provider` por `@id` → **cierra la
   entrada 8** (LocalBusiness duplicado). Home, `/nosotros` y `/contacto` conservan
   el `LocalBusiness` completo y añaden un 2º bloque JSON-LD con el FAQ. Regla de
   acordeón `.faqHome` añadida a `style.css` (la portada no carga
   `puertasStyle.css`).

4. **Estructura + códigos N# en las 6 páginas de catálogo.** Texto antes de la
   cuadrícula y los `N#` reducidos a `Ref. N#` al final de un nombre descriptivo
   — **no se borran**: Kennet los usa para identificar el modelo cuando el cliente
   manda captura. Solo dejan de ser lo primero que lee Google.

**Extra:** titles largos de `/estructurasMetalicas` (68→58) y `/remodelaciones`
(84→60, sin `¡`) — avance parcial de la entrada 12. Typos visibles corregidos en
`/remodelaciones` («policabonato» ×4). `og:locale` `es_ES`→`es_EC` en las 6
páginas que aún lo tenían mal. Cache-busting `?v=20260826`→`?v=20260907`.

**Verificado antes de cerrar:** 12 bloques JSON-LD válidos (uno por página, dos en
index/nosotros/contacto/puertasGaraje), un solo `<h1>` por página, tags
balanceados, y las 4 páginas clave (ventanas, alucobond, puertas, index)
renderizadas en Chrome sobre servidor local — intro antes del catálogo, tarjetas
con `Ref. N#`, acordeón FAQ abre y cierra.

**Pendiente de deploy por FTP.** Y de medir: comparar en 2-3 semanas si Google
deja de reescribir el title de `/ventanas` y si el snippet deja de mostrar el
código de producto. La caída de impresiones de imagen por renombrar archivos (26
ago) todavía no se ha recuperado del todo; este cambio no la toca.

## El P0 de `/puertasGaraje` se cerró solo

El export del 5 sep registra `/puertasGaraje` con **67 impresiones web y posición
6,09** (antes: 0). Se indexó. La entrada 0 del backlog — «existe, está en el
sitemap y recibe CERO impresiones» — deja de aplicar. Sigue siendo poco tráfico,
pero ya está en el índice y compitiendo; a partir de aquí es optimización normal,
no un problema de indexación.
