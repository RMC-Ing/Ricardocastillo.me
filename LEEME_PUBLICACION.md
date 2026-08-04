# RMC Web publicable

Dominio previsto: https://ricardocastillo.me

## Contenido
- Sitio multipágina responsive.
- Páginas principales: Inicio, Proyectos, Especialidades, Nosotros, Blogs y Contacto.
- Fichas individuales de proyectos destacados.
- SEO básico: títulos, metadescripciones, canonical, Open Graph y datos estructurados.
- sitemap.xml, robots.txt, CNAME y .nojekyll preparados para GitHub Pages.
- WhatsApp directo a +507 6949-2058.
- LinkedIn enlaza al perfil profesional de Ricardo Castillo Almanza.
- El correo de contacto corporativo es `ricardo@ricardocastillo.me`.

## Para publicar
1. En GitHub, abrir el repositorio actual y eliminar su contenido anterior (sin eliminar el repositorio).
2. Descomprimir el ZIP final y subir todo el contenido de la carpeta `Ricardocastillo.me-main` a la raíz del repositorio.
3. Confirmar los cambios en la rama publicada por GitHub Pages.
4. El archivo principal debe quedar como `/index.html`.
5. Mantener intactas las carpetas `/assets` y `/proyectos`.
6. Mantener el dominio `ricardocastillo.me` conectado mediante DNS.
7. Después de publicar, comprobar el dominio en Google Search Console y enviar `/sitemap.xml`.

No es necesario contratar WordPress para publicar este sitio estático.

## Publicación de nuevos artículos

Cada artículo debe conservarse como una entrada independiente dentro de `articulos/`. Al publicar uno nuevo:

- agregar una tarjeta nueva al inicio de `articulos/index.html`, sin eliminar ni reemplazar las tarjetas existentes;
- ordenar las tarjetas por fecha, de la más reciente a la más antigua;
- añadir su URL a `sitemap.xml`, sin retirar las URL de artículos publicados;
- verificar que la tarjeta, el enlace «Todos los artículos» y la URL canónica funcionen;
- usar `noindex,nofollow` únicamente mientras una entrada sea un borrador y retirarlo al publicarla.

Actualmente están publicados como entradas independientes el artículo de inspección de puesta a tierra y el artículo sobre instalaciones eléctricas en cámaras plenas.
