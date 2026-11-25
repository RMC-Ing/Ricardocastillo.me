# Cambios hechos con asistentes (Claude / ChatGPT / Codex)

Registro corto para que cualquier asistente continúe sin pisar el trabajo del otro. Solo contexto del sitio; nada confidencial.

## 2026-11-25 · Leyenda de los renders de Jeptha (rama `leyenda-renders-jeptha`, base `bc95a04`)
- Pie de foto de los dos renders de `proyectos/jeptha-duncan/index.html` cambiado a: "Gimnasio auditorio. Render con fines ilustrativos del proyecto, no de construcción." y "Cancha multiuso. Render con fines ilustrativos del proyecto, no de construcción." (texto dictado por Ricardo).
- Pendiente: el render de la portada (comedor) no tiene pie de foto; decidir si lleva la misma leyenda.

## 2026-11-25 · Portadas nuevas para Torre Riga, Tribu y Nuevo Instituto Oncológico (rama `heroes-torre-tribu-ion`, base `799a4fc`)

### Decisión
Ricardo aportó imágenes horizontales para tres fichas y eligió la terraza con muro verde para Tribu. Solo cambia la portada de cada ficha; **las tarjetas del inicio y del listado conservan las imágenes anteriores** (más angostas, funcionan mejor verticales).

### Imágenes (`assets/images/`) y encuadre (`background-position` inline en cada ficha)
- `torre-riga-hero.webp`: lobby con logo RIGA, extraído de `TORRE_RIGA_RENDERS.pdf` (1448×1086, original sin márgenes). `center 30%`.
- `tribu-coco-del-mar-hero.webp`: terraza con muro verde (900×588, recortada sin márgenes transparentes). `center 45%`. Las 3 imágenes de Tribu traen marca de agua «VERAL»; no se quitó.
- `nuevo-ion-hero.webp`: render de la entrada (1600×900), `center 72%` (deja fuera el rótulo del render, que dice «ONCOLOGICO» sin tilde). Con clase `hero-bright` por ser muy clara.
- `assets/js/main.js`: mapa `projectImages` apunta a los tres archivos `-hero`. Los archivos `torre-riga.webp`, `tribu-coco-del-mar.webp` y `nuevo-ion.webp` se siguen usando en tarjetas.

### Pendientes
- **Confirmar derechos de uso**: render de Riga Design (Torre Riga) y marca VERAL (Tribu). Ricardo vio el aviso y decidió publicar.
- Tribu mide 900 px de ancho y se amplía ~1,6× en la portada (blanda). Pedir originales de mayor resolución.
- Ver el dominio tras el despliegue.

---
## 2026-11-25 · Portada y datos de las fichas más compactos + arreglo de la imagen de portada (rama `ajuste-fichas-hero`, base `3a5eaf4`)

### Problema
- Ricardo vio la portada de la ficha de Jeptha **sin imagen** (solo el degradado gris) dos veces. Causa: en las 8 fichas el `style` inline del hero llevaba comillas dobles dentro de un atributo con comillas dobles (`url("...")`), lo que rompía el atributo; la imagen solo aparecía cuando `main.js` la ponía. Con un `main.js` viejo en caché (no conocía el slug nuevo) la portada quedaba vacía.
- Aún había mucho aire: la portada medía 50vh y los datos (Tipología/Ubicación/Alcance) quedaban pegados al borde de la ventana, no alineados con el contenido.

### Cambio
- Inline `style` de las 8 fichas con `url('...')` (comillas simples) y degradado en Cedar (antes azul marino en las fichas viejas); la portada ya no depende de `main.js`.
- `assets/css/style.css` (al final, solo con `.project-compact`): portada a 40vh (36vh en ≤900 px), relleno 72/32 px; los datos se alinean con el contenedor, con divisores finos.
- Jeptha: `background-position:0 center` para dejar fuera el rótulo horneado del render en celular.

- Jeptha: el render del gimnasio sube a donde estaba la cancha (después de «El proyecto») y la cancha multiuso pasa al final de la página. Pedido por Ricardo.

### Estado
Aprobado por Ricardo y publicado en `main`.

### Pendientes
- El hero del inicio (`park-eleven.webp`, 1463×1400) se agranda y recorta cuanto más ancha es la ventana. Probado un tope de escala en la rama local `ajuste-hero-ancho` (sin publicar). Lo correcto es una imagen horizontal de ≥2400 px.

---
## 2026-11-25 · Espaciado compacto en fichas de proyecto (rama `ajuste-espaciado-jeptha`, base `77c728d`)

### Decisión
Ricardo pidió reducir el aire de las franjas de alcance en **todas** las fichas. Causa: `.section` (85 px) y `.scope` (48 px) se sumaban, ~270 px de margen alrededor de listas cortas.

### Cambio
- `<main class="project-compact">` en las 8 fichas de `proyectos/*/index.html`.
- `assets/css/style.css` (al final): `.project-compact .section` 28 px, `.scope` 30 px, `.plan-image` 20/4 px; en ≤900 px, 16/28/16 px. Fuera de las fichas no cambia nada.
- Nueva clase `.detail-hero.hero-bright` (solo Jeptha): oscurece 24 % la portada porque el render es muy claro. `background-position:20% center` inline evita que se vea el rótulo horneado del render en celular.
- Altura de la página a 1440 px: Tribu 2838→1938, Torre Riga 1907→1457, Park Eleven 2838→1938, Urgencias 2775→2165, Galeras 1012→900, Materno Fetal 1099→949, Nuevo ION 1128→978, Jeptha 4406→3336.

### Comprobaciones hechas
Comparación visual antes/después de las 8 fichas a 1440 px y de Tribu a 390 px. No se probó el dominio publicado.

### Pendientes
- Imagen para redes por proyecto: las fichas usan `og-linkedin.jpg` genérica. Evaluar un recorte 1200×630 del render de Jeptha.

---
## 2026-11-25 · Proyecto nuevo: Ampliación I.P.T. Jeptha B. Duncan (rama `proyecto-jeptha-duncan`, base `ce5c869`)

### Decisión
Ricardo aprobó el mockup y pidió publicarlo. Ficha nueva en `proyectos/jeptha-duncan/`. Datos que dio él: Institucional / Educativo; 24 de Diciembre, Panamá; «Diseño integral integrado a infraestructura existente»; ampliación de pabellones y canchas deportivas del colegio existente. Alcances: electricidad, alarma contra incendios y plomería (adaptados de Tribu, sin ascensores, medición, planta eléctrica, HVAC ni comunicaciones) y protección contra incendios solo con sistema húmedo por gabinetes de mangueras (red, isométricos, selección de gabinetes y bombeo). Estado mostrado: «2026 · Diseño».

### Imágenes (`assets/images/`)
- `jeptha-duncan.webp`: render del comedor, portada de la ficha (1600 px).
- `jeptha-duncan-card.webp`: recorte 640×480 del mismo render para la tarjeta del inicio.
- `jeptha-duncan-cancha.webp` y `jeptha-duncan-gimnasio.webp`: renders dentro de la ficha, con ampliación por clic.

### Archivos tocados
`proyectos/jeptha-duncan/index.html` (nuevo), `assets/js/main.js` (imagen de portada por slug), `assets/css/style.css` (cuadrícula del inicio de 7 a 8 columnas y clase `.hero-bright`), `index.html` (tarjeta), `proyectos/index.html` (tarjeta con enlace; el grupo Institucional / Educativo pasa de 03 a 04), `sitemap.xml`.

### Comprobaciones hechas
Revisión visual local (Chrome) de la ficha a 1440 y 390 px, el inicio a 1440 y 1000 px y el listado de proyectos. No se probó el dominio publicado.

### Pendientes
- Render del gimnasio corregido por Ricardo (letrero «JEPTHA B. DUNCAN») y reemplazado el mismo día.
- Año y estado («2026 · Diseño») son supuestos: confirmar.
- Revisar el dominio tras el despliegue (inicio con 8 tarjetas, ficha, listado, móvil).

---
## 2026-11-25 · Paleta 3 y ajustes de portada (rama `paleta-3-portada`, base `fc7a2e5`)

### Decisión
Ricardo comparó tres paletas en mockup y eligió la **paleta 3** (Merino, Kangaroo, Oyster, Rifle Green, Cedar). Se conserva la estructura y la tipografía (Georgia + Arial); el encabezado, el hero, las estadísticas y el pie siguen siendo oscuros, ahora en Cedar en vez de azul marino.

### Tokens (`:root` en `assets/css/style.css`)
| Variable | Valor | Uso |
|---|---|---|
| `--cedar` | #292728 | Fondos oscuros (antes `--navy` #071d2d) |
| `--rifle` | #43442b | Acentos sobre fondo claro, banner de contacto, encabezados de tabla (antes `--leed` #435d34 y azules #397da9 / #315f80 / #123f68) |
| `--oyster` | #939474 | Acento sobre fondo oscuro, bordes y esquemas (antes `--blue` #70a6d4) |
| `--kangaroo` | #D0C7B3 | Texto secundario sobre oscuro y énfasis del titular (antes dorado #d2ad69) |
| `--paper` | #F1F1EC | Fondo general (antes #f3f1ec) |
| `--ink` | #292728 | Texto principal |
| `--muted` | #5f5d52 | Texto gris (4.5:1 o más sobre Merino y blanco) |
| `--line` | #D8D2C2 | Bordes |

Se eliminó `--navy2` (no se usaba). `--navy` pasó a `--cedar` y `--blue` a `--oyster`; la clase `.section.navy` pasó a `.section.cedar` (no se usaba en HTML).
Tonos derivados (no están en la paleta original): #5f5d52, #3b3937 (texto), #ECEAE0, #F7F6F1, #E4DFD0, #F0EEE6, #E9E1CB, #E4E0D4 (fondos y bordes suaves). Los blancos #fff de las secciones claras se mantienen.

### Portada (`index.html`)
- Titular **sin cambios**: «Ingeniería con criterio. Soluciones que se construyen.»
- Etiqueta: «Diseño y coordinación MEP · Ciudad de Panamá» (antes repetía «Ingeniería»).
- Subtítulo: «Diseño, consultoría y coordinación de instalaciones eléctricas, hidrosanitarias, HVAC, protección contra incendios y sistemas especiales.»
- «Ver proyectos →» es ahora botón principal sólido (`.btn-primary`); «Nuestras especialidades» sigue con borde.
- La segunda línea del titular usa `text-wrap: balance` para evitar la palabra suelta «construyen.».

### Otros ajustes
- El anillo de foco (`:focus-visible`) usa Rifle sobre fondos claros y Kangaroo sobre fondos oscuros.
- El banner de contacto usa Rifle sobre la foto.
- `assets/js/main.js`: degradado de la cabecera de fichas de proyecto en Cedar.
- `favicon.svg` en Cedar. Cobres y suelo de los diagramas del artículo de puesta a tierra pasaron a Oyster y Kangaroo (esquemas, no fotos).
- Archivos tocados: `assets/css/style.css`, `assets/js/main.js`, `index.html`, `nosotros/index.html`, `articulos/instalaciones-electricas-plenum-nec-300-22/index.html`, `favicon.svg`, este documento.

### Comprobaciones hechas
- Revisión visual local (Chrome, 1440 px y 390 px) de inicio, nosotros, proyectos, ficha de proyecto, contacto y artículo de puesta a tierra.
- Contraste calculado: todos los pares de texto revisados dan 4.5:1 o más.
- No quedan azules ni grises fríos en CSS, JS ni favicon.

### Pendientes
- **No se probó** nada en el dominio publicado ni en GitHub Pages; falta revisar tras el despliegue.
- **No se tocaron las imágenes**: las portadas de artículos y las imágenes para redes (`og-linkedin.jpg`) siguen en azul marino. Decidir si se rehacen.
- Las páginas de artículos con estilos propios (plenum) conservan la misma estructura; revisar el artículo de plenum a ojo, porque no se abrió en pantalla.
- Decidir si el encabezado pasa a claro, como en el mockup (hoy se mantuvo oscuro para no cambiar el diseño).
