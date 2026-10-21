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
- Rendimiento: se retiraron fuentes externas e iconos de redes innecesarios; la portada y el perfil usan el nuevo retrato facilitado por Sebastián, optimizado a WebP de 800 × 800 px (aprox. 46 KB), con dimensiones declaradas y prioridad alta en Inicio. No se aplican filtros ni alteraciones al rostro. JavaScript diferido y sin bibliotecas de producción.
- SEO: títulos y descripciones por página, idioma español, metadatos Open Graph y favicon local. No se agregó una URL canónica ni sitemap porque no se ha confirmado el dominio de producción.
- Proyectos: filtro de forks antes de limitar a seis, datos insertados como texto, límite de espera de diez segundos, recuperación manual y proyecto real disponible sin JavaScript o si GitHub falla. Se consulta la primera página de hasta 100 repositorios; el enlace al perfil permite explorar el resto.

## Validación del rediseño

Pruebas locales en Chrome: tres páginas a 320, 390, 768 y 1440 px sin desbordamiento horizontal; enlaces y anclas locales, títulos y navegación actual. Escenarios simulados de GitHub: éxito, forks, texto no confiable, HTTP 403, reintento y lista vacía. Alternativa sin JavaScript y navegación de teclado al contenido. Sin errores JavaScript en esos recorridos. Revisión visual en escritorio y móvil.

No se ejecutó Lighthouse ni una auditoría automatizada completa de accesibilidad; no se afirman puntuaciones. El contacto externo y la respuesta real de la API dependen de sus respectivos servicios. No se ha publicado ni desplegado el rediseño.

## Ajustes de presentación y alcance (21 de octubre de 2026)

- Hero con menos espacio superior y retrato de hasta 360 px en escritorio y 320 px en móvil; se conserva el archivo original, su proporción y rostro.
- Oferta explícita de desarrollo web, aplicaciones móviles y sistemas a medida. Evidencia pública: `app-colectivos-la-punta/package.json` (React Native y Expo) y `servidor-colectivos-la-punta/server.js` (Node.js, Express, presencia y chat por WebSocket). No se atribuyen clientes, métricas ni publicación en tiendas.
- Proyectos destacados permanentes con alcance, tecnologías y enlaces al código, también sin JavaScript y cuando la API falla.
- Chrome: Inicio, Sobre mí y Proyectos a 320, 390, 768 y 1440 px, sin desbordamiento horizontal ni errores JavaScript. Retratos cargados, H1 único, navegación actual, enlaces internos y anclas comprobados. CTA completos dentro de una altura de 844 px (móvil de 320 y 390 px).
- Revisión visual de las tres páginas en escritorio y móvil. Comprobación de salto al contenido por teclado y de API simulada: HTTP 403, reintento, éxito y exclusión de forks. Proyectos destacados comprobados sin JavaScript. No se ejecutó auditoría completa de accesibilidad ni Lighthouse.
- Sin fusión ni despliegue de producción.
