# TecnoDoc · sitio web

Sitio estático de **TecnoDoc — Laboratorio de Electrónica** (reparación de notebooks, celulares, TV y otros dispositivos en Itaembé Guazú, Posadas, Misiones). Armado tomando como modelo el sitio de AgroDoc (`agrodoc-site`).

- `index.html` — página única: servicios, mantenimiento preventivo, cómo trabajamos, consejos y contacto (WhatsApp 3765 11-2222). El correo no se publica por decisión del dueño.
- `assets/css/styles.css` — estilos con la paleta del logo (negro carbón `#1A1B1A`, rojo `#C0302B`, blanco/gris `#C9CBCA`) y tipografía Montserrat (Google Fonts).
- `assets/img/` — logo original (`logo-tecnodoc.png`, copia de `IA TecnoDoc/assets/`), versiones livianas para la web (`logo-160`, `logo-400`, `logo-800` en PNG/WebP), favicon, ícono para iPhone e imagen para compartir (`og-image.jpg`, 1200×630).
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
5. `[PENDIENTE: diagnóstico gratuito / precios]` — el plan de negocio menciona "diagnóstico gratuito" como ventaja, pero no está confirmado; el sitio no habla de precios ni de costo del diagnóstico.
6. `[PENDIENTE: rescate de datos y venta de accesorios]` — no se incluyeron como servicios: el rescate de datos no aparece en las fuentes y la venta de accesorios solo figura en un banner de LinkedIn. Confirmar si se ofrecen.
7. `[PENDIENTE: foto real del laboratorio]` — AgroDoc usa una foto del frente del taller; acá el hero muestra el logo. Las imágenes de `Estrategia y Branding` son generadas por IA (tienen la marca de agua de Gemini), por eso no se usaron como foto.
8. `[PENDIENTE: redes sociales]` — Instagram/Facebook/LinkedIn, si existen, para sumar al pie.
9. `[PENDIENTE: confirmar WhatsApp]` — ver arriba.
10. `[PENDIENTE: logo]` — el sello dice "Reparación de notebooks", pero el sitio presenta también celulares, TV y otros dispositivos. Evaluar una versión del logo con un texto más general.
11. `[PENDIENTE: DNS del dominio]` — `www.tecnodoc.com.ar` tiene que apuntar a GitHub Pages (ver pasos).

## Pasos para publicar (no ejecutados)

1. Resolver los pendientes de arriba y sacar los marcadores `[PENDIENTE…]` del HTML.
2. Crear un repositorio en GitHub (por ejemplo `carlosgim/tecnodoc-site`), hacer el primer commit y `git push` de esta carpeta a `main`.
3. En el repositorio: Settings → Pages → Source: rama `main`, carpeta `/ (root)`. Cargar `www.tecnodoc.com.ar` como dominio propio (coincide con el archivo `CNAME`).
4. En el proveedor de DNS del dominio: registro `CNAME` de `www` apuntando a `carlosgim.github.io` (si es Cloudflare, en modo "solo DNS", nube gris). Opcional: registros `A` del dominio raíz a las IP de GitHub Pages, o redirección del raíz a `www`.
5. Cuando GitHub emita el certificado, activar "Enforce HTTPS".
6. Probar el link de WhatsApp desde un celular y la vista previa al compartir (og-image).
