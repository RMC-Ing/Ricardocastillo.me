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

## Artículo sobre plenums

El artículo `articulos/instalaciones-electricas-plenum-nec-300-22/index.html` está completo y conservado como borrador. Mientras no se publique:

- no aparece en la página de artículos;
- no aparece en `sitemap.xml`;
- contiene la directiva `noindex,nofollow` para evitar su indexación accidental.

En la fecha de publicación se deben actualizar la fecha visible y los campos `datePublished`/`dateModified`, retirar `noindex,nofollow`, reincorporar su tarjeta a `articulos/index.html` y añadir su URL a `sitemap.xml`.
