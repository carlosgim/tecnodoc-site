/* Google Analytics 4 · TecnoDoc
   Registra los clics en WhatsApp como evento "contacto_whatsapp",
   con el parámetro "ubicacion" (de qué botón vino, según data-ga). */
document.addEventListener('click', function (e) {
  var link = e.target.closest && e.target.closest('a[href*="wa.me"]');
  if (!link || typeof gtag !== 'function') return;
  gtag('event', 'contacto_whatsapp', {
    ubicacion: link.getAttribute('data-ga') || 'otro',
    transport_type: 'beacon'
  });
});
