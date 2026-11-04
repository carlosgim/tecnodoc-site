# TecnoDoc · sitio web

Sitio estático de **TecnoDoc — Laboratorio de Electrónica** (reparación de notebooks, celulares y TV, y rescate de datos, en Itaembé Guazú, Posadas, Misiones). Armado tomando como modelo el sitio de AgroDoc (`agrodoc-site`).

- `index.html` — página única: servicios (notebooks, celulares, TV y rescate de datos), diagnóstico gratuito, mantenimiento preventivo, cómo trabajamos, consejos y contacto (WhatsApp 3765 11-2222). El correo no se publica por decisión del dueño.
- `assets/css/styles.css` — estilos con la paleta del logo (negro carbón `#1A1B1A`, rojo `#C0302B`, blanco/gris `#C9CBCA`) y tipografía Montserrat (Google Fonts).
- `assets/img/` — logo con el texto inferior "NOTEBOOKS · TV · CELULARES" (`logo-tecnodoc.png`, versión general hecha el 2026-11-02 a partir del original de `IA TecnoDoc/assets/`, que decía "Reparación de notebooks" y no se modificó; copia en `09-MKT-Marketing-y-marca/Identidad-de-marca/logo-tecnodoc-general.png`), versiones livianas para la web (`logo-160`, `logo-400`, `logo-800` en PNG/WebP), favicon, ícono para iPhone e imagen para compartir (`og-image.jpg`, 1200×630).
- **Garantía de 3 meses** (2026-11-04, política general del laboratorio): mencionada en el hero, en el paso 8 de "Cómo trabajamos" y en un recuadro (`.garantia`) debajo de los pasos, con el mismo texto que `IA TecnoDoc/config.json → condiciones_comerciales.garantia`. Si cambia allá, cambiarla acá también.
- **Sección "Compromiso social"** (`#compromiso-social`, 2026-11-04; **oculta**: atributo `hidden` en la sección y link del menú comentado en `index.html`, se retoma más adelante): notebooks restauradas que se regalan a personas con pocos recursos, en 3 pasos (recuperamos, restauramos, regalamos), con dos botones de WhatsApp con mensaje prellenado: donar una notebook y contar el caso de alguien que la necesita. Sin cifras ni criterios de entrega hasta que el dueño los defina.
- **Sección "Usados"** (venta de equipos usados; **oculta desde el 2026-11-04**: atributo `hidden` en la sección, link del menú y scripts comentados en `index.html` — revertir esas 3 cosas para mostrarla): el contenido sale de `assets/data/equipos-usados.js` — es el único archivo que hay que editar para agregar, modificar, reservar, marcar vendido u ocultar un equipo (las instrucciones están al principio del archivo). Las fotos van en `assets/img/usados/`. `assets/js/usados.js` arma las tarjetas, los filtros por categoría y el botón de WhatsApp con mensaje prellenado; no hace falta tocarlo. Se puede editar directo desde la web de GitHub (lápiz ✏️ sobre el archivo → "Commit changes") y se publica solo en un par de minutos. Los 3 equipos actuales son de **ejemplo** (cartel amarillo "EJEMPLO"): reemplazarlos por equipos reales antes de publicar.
- `CNAME` — `www.tecnodoc.com.ar` (dominio que figura en los documentos del laboratorio y en las piezas de branding).

Se publicaría con **GitHub Pages** desde la rama `main` (carpeta raíz), igual que AgroDoc. No requiere compilación: se edita el HTML y se hace push. **Todavía no está publicado.**

## Datos de contacto usados (de dónde salen)

- WhatsApp/teléfono `3765 11-2222` → link `https://wa.me/5493765112222`. Fuente: `IA TecnoDoc/scripts/doc_common.py` y las piezas de `Estrategia y Branding` (que lo muestran con el ícono de WhatsApp). **A confirmar que sea efectivamente la línea de WhatsApp de TecnoDoc** (es el mismo número que usa AgroDoc).
- Web `www.tecnodoc.com.ar`. Fuente: `doc_common.py`. El correo electrónico NO se muestra en el sitio (información reservada).
- Ubicación `Itaembé Guazú, Posadas, Misiones` (sin calle ni número). Fuente: `doc_common.py`.

## Pendientes antes de publicar

Buscar `[PENDIENTE` en `index.html` para encontrar los marcadores visibles (se muestran resaltados en amarillo).

1. `[PENDIENTE: horarios de atención]` — en la sección Contacto.
2. `[PENDIENTE: dirección exacta]` — en la sección Contacto (hoy solo dice el barrio). Si se agrega, actualizar también `streetAddress` en el JSON-LD del `<head>` y el mapa.
3. `[PENDIENTE: opiniones de clientes]` — sección no incluida (hay un comentario HTML en su lugar). Sumarla solo con comentarios reales y con autorización de la persona para publicar su nombre.
4. `[PENDIENTE: garantía]` — el proceso interno prevé emitir garantía en la entrega, pero no hay términos ni plazos definidos; el sitio no la menciona.
5. `[PENDIENTE: condiciones del diagnóstico gratuito]` — confirmado por el dueño (2026-11-02) y publicado. Definir si tiene condiciones (por ejemplo, tipo de equipo o plazo) y, si las hay, aclararlas en el sitio. El sitio sigue sin hablar de precios.
6. `[PENDIENTE: venta de accesorios]` — solo figura en un banner de LinkedIn; confirmar si se ofrece. (El rescate de datos ya está publicado como servicio, confirmado el 2026-11-02.)
7. `[PENDIENTE: foto real del laboratorio]` — AgroDoc usa una foto del frente del taller; acá el hero muestra el logo. Las imágenes de `Estrategia y Branding` son generadas por IA (tienen la marca de agua de Gemini), por eso no se usaron como foto.
8. `[PENDIENTE: redes sociales]` — Instagram/Facebook/LinkedIn, si existen, para sumar al pie.
9. `[PENDIENTE: confirmar WhatsApp]` — ver arriba.
10. ~~Logo~~ — resuelto: el sitio usa la versión "NOTEBOOKS · TV · CELULARES". Los documentos de `IA TecnoDoc` siguen con el logo original; cambiarlo allá si se quiere unificar.
11. `[PENDIENTE: DNS del dominio]` — `www.tecnodoc.com.ar` tiene que apuntar a GitHub Pages (ver pasos).
12. `[PENDIENTE: equipos usados reales]` — reemplazar los ejemplos de `assets/data/equipos-usados.js` y definir las condiciones de venta (garantía de los usados, medios de pago, si se puede probar el equipo) para sumarlas a la nota de la sección.

## Pasos para publicar (no ejecutados)

1. Resolver los pendientes de arriba y sacar los marcadores `[PENDIENTE…]` del HTML.
2. Crear un repositorio en GitHub (por ejemplo `carlosgim/tecnodoc-site`), hacer el primer commit y `git push` de esta carpeta a `main`.
3. En el repositorio: Settings → Pages → Source: rama `main`, carpeta `/ (root)`. Cargar `www.tecnodoc.com.ar` como dominio propio (coincide con el archivo `CNAME`).
4. En el proveedor de DNS del dominio: registro `CNAME` de `www` apuntando a `carlosgim.github.io` (si es Cloudflare, en modo "solo DNS", nube gris). Opcional: registros `A` del dominio raíz a las IP de GitHub Pages, o redirección del raíz a `www`.
5. Cuando GitHub emita el certificado, activar "Enforce HTTPS".
6. Probar el link de WhatsApp desde un celular y la vista previa al compartir (og-image).
