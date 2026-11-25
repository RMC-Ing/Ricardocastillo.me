# Cambios hechos con asistentes (Claude / ChatGPT / Codex)

Registro corto para que cualquier asistente continúe sin pisar el trabajo del otro. Solo contexto del sitio; nada confidencial.

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
