# Sebastián Cruz · Portafolio

Sitio estático en español: desarrollo web, aplicaciones y soporte técnico. Conserva la identidad, las tecnologías y el contacto existentes; no incluye experiencia, métricas, clientes ni proyectos inventados.

## Estructura

- `index.html`: presentación, servicios y contacto.
- `about.html`: perfil y tecnologías.
- `proyectos.html`: repositorios públicos y alternativa estática.
- `styles/style.css`: estilos compartidos y adaptación responsiva.
- `app.js`: consulta a GitHub exclusivamente en la página de proyectos.

Abre `index.html` o sirve esta carpeta con cualquier servidor estático. No hay instalación, compilación ni dependencias de producción.

## Decisiones de la revisión

- Se sustituyó el diseño inicial por una jerarquía visual consistente, con navegación, acciones y contacto en las tres páginas.
- Se corrigió el HTML de navegación y el enlace genérico de GitHub. Se retiró LinkedIn porque no había un perfil personal verificable. Facebook conserva la URL original.
- Accesibilidad: enlace de salto, foco visible, navegación actual, un H1 por página, regiones semánticas, imágenes con texto alternativo, estado de carga anunciado y respeto a movimiento reducido.
- Rendimiento: se retiraron fuentes externas e iconos de redes innecesarios; la portada y el perfil usan un monograma SC hecho con HTML y CSS, sin descargar una fotografía. El archivo original se conserva en assets para poder recuperarlo. JavaScript diferido y sin bibliotecas de producción.
- SEO: títulos y descripciones por página, idioma español, metadatos Open Graph y favicon local. No se agregó una URL canónica ni sitemap porque no se ha confirmado el dominio de producción.
- Proyectos: filtro de forks antes de limitar a seis, datos insertados como texto, límite de espera de diez segundos, recuperación manual y proyecto real disponible sin JavaScript o si GitHub falla. Se consulta la primera página de hasta 100 repositorios; el enlace al perfil permite explorar el resto.

## Validación del rediseño

Pruebas locales en Chrome: tres páginas a 320, 390, 768 y 1440 px sin desbordamiento horizontal; enlaces y anclas locales, títulos y navegación actual. Escenarios simulados de GitHub: éxito, forks, texto no confiable, HTTP 403, reintento y lista vacía. Alternativa sin JavaScript y navegación de teclado al contenido. Sin errores JavaScript en esos recorridos. Revisión visual en escritorio y móvil.

No se ejecutó Lighthouse ni una auditoría automatizada completa de accesibilidad; no se afirman puntuaciones. El contacto externo y la respuesta real de la API dependen de sus respectivos servicios. No se ha publicado ni desplegado el rediseño.
