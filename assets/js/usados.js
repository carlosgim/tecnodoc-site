/* Arma la sección "Usados" a partir de assets/data/equipos-usados.js.
   No hace falta tocar este archivo para cargar equipos. */
(function () {
  "use strict";

  var WHATSAPP = "5493765112222";
  var grilla = document.getElementById("usados-grilla");
  var filtros = document.getElementById("usados-filtros");
  if (!grilla) return;

  var ICONOS = {
    Notebook: '<rect x="9" y="9" width="30" height="21" rx="2"/><path d="M4 35h40l-3 4H7Z" fill="currentColor"/>',
    Celular: '<rect x="14" y="4" width="20" height="40" rx="4"/><path d="M21 38h6" stroke-linecap="round"/>',
    TV: '<rect x="4" y="8" width="40" height="26" rx="2"/><path d="M18 42h12M24 34v8" stroke-linecap="round"/>',
    Otro: '<rect x="8" y="8" width="32" height="32" rx="4"/><path d="M16 24h16M24 16v16" stroke-linecap="round"/>'
  };
  var ESTADOS = { disponible: "Disponible", reservado: "Reservado", vendido: "Vendido" };

  var formato = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });
  function pesos(n) { return "$ " + formato.format(n); }

  // Todo el texto de los equipos se inserta con textContent (nunca como HTML).
  function el(tag, clase, texto) {
    var e = document.createElement(tag);
    if (clase) e.className = clase;
    if (texto != null) e.textContent = String(texto);
    return e;
  }

  function sinFoto(categoria) {
    var d = el("div", "usado__sinfoto");
    d.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round">' +
      (ICONOS[categoria] || ICONOS.Otro) + "</svg>";
    d.appendChild(el("span", null, "Foto próximamente"));
    return d;
  }

  function galeria(eq) {
    var cont = el("div", "usado__fotos");
    var fotos = (eq.fotos || []).filter(Boolean);
    if (!fotos.length) { cont.appendChild(sinFoto(eq.categoria)); return cont; }

    var principal = el("img", "usado__foto");
    principal.src = fotos[0];
    principal.alt = eq.nombre;
    principal.loading = "lazy";
    principal.width = 800; principal.height = 600;
    cont.appendChild(principal);

    if (fotos.length > 1) {
      var minis = el("div", "usado__minis");
      fotos.forEach(function (src, i) {
        var b = el("button", "usado__mini");
        b.type = "button";
        b.setAttribute("aria-label", "Ver foto " + (i + 1) + " de " + fotos.length);
        if (i === 0) b.setAttribute("aria-current", "true");
        var m = el("img"); m.src = src; m.alt = ""; m.loading = "lazy";
        b.appendChild(m);
        b.addEventListener("click", function () {
          principal.src = src;
          minis.querySelectorAll("button").forEach(function (x) { x.removeAttribute("aria-current"); });
          b.setAttribute("aria-current", "true");
        });
        minis.appendChild(b);
      });
      cont.appendChild(minis);
    }
    return cont;
  }

  function tarjeta(eq) {
    var estado = ESTADOS[eq.estado] ? eq.estado : "disponible";
    var categoria = eq.categoria || "Otro";
    var art = el("article", "usado usado--" + estado);
    art.dataset.categoria = categoria;

    art.appendChild(galeria(eq));

    var cuerpo = el("div", "usado__cuerpo");
    var chips = el("div", "usado__chips");
    chips.appendChild(el("span", "chip", categoria));
    chips.appendChild(el("span", "chip chip--" + estado, ESTADOS[estado]));
    if (eq.ejemplo) chips.appendChild(el("span", "pendiente", "EJEMPLO"));
    cuerpo.appendChild(chips);

    cuerpo.appendChild(el("h3", "usado__nombre", eq.nombre));
    if (eq.condicion) {
      var c = el("p", "usado__condicion");
      c.appendChild(el("strong", null, "Condición: "));
      c.appendChild(document.createTextNode(eq.condicion));
      cuerpo.appendChild(c);
    }

    var specs = eq.caracteristicas || {};
    var claves = Object.keys(specs);
    if (claves.length) {
      var dl = el("dl", "usado__specs");
      claves.forEach(function (k) {
        var fila = el("div");
        fila.appendChild(el("dt", null, k));
        fila.appendChild(el("dd", null, specs[k]));
        dl.appendChild(fila);
      });
      cuerpo.appendChild(dl);
    }

    if (eq.detalle) cuerpo.appendChild(el("p", "usado__detalle", eq.detalle));

    var extras = el("ul", "usado__extras");
    if (eq.incluye) extras.appendChild(el("li", null, "Incluye: " + eq.incluye));
    if (eq.garantia) extras.appendChild(el("li", null, "Garantía: " + eq.garantia));
    if (extras.children.length) cuerpo.appendChild(extras);

    var pie = el("div", "usado__pie");
    var precio = el("div", "usado__precio");
    if (typeof eq.precio === "number") {
      if (typeof eq.precioAnterior === "number" && eq.precioAnterior > eq.precio) {
        precio.appendChild(el("s", "usado__antes", pesos(eq.precioAnterior)));
      }
      precio.appendChild(el("span", "usado__monto", pesos(eq.precio)));
    } else {
      precio.appendChild(el("span", "usado__monto usado__monto--consultar", "Consultar precio"));
    }
    pie.appendChild(precio);

    if (estado === "vendido") {
      pie.appendChild(el("span", "usado__vendido", "Vendido"));
    } else {
      var msg = "Hola TecnoDoc, me interesa el equipo usado: " + eq.nombre +
        (typeof eq.precio === "number" ? " (" + pesos(eq.precio) + ")" : "") + ". ¿Sigue disponible?";
      var a = el("a", "btn btn--rojo btn--sm", estado === "reservado" ? "Consultar" : "Lo quiero");
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
      a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Consultar por WhatsApp por " + eq.nombre);
      pie.appendChild(a);
    }
    cuerpo.appendChild(pie);
    art.appendChild(cuerpo);
    return art;
  }

  // Disponibles primero, después reservados y al final vendidos (respetando el orden del archivo).
  var orden = { disponible: 0, reservado: 1, vendido: 2 };
  var equipos = (window.EQUIPOS_USADOS || [])
    .filter(function (e) { return e && e.publicar !== false && e.nombre; })
    .map(function (e, i) { return { eq: e, i: i }; })
    .sort(function (a, b) {
      return ((orden[a.eq.estado] || 0) - (orden[b.eq.estado] || 0)) || (a.i - b.i);
    })
    .map(function (x) { return x.eq; });

  grilla.textContent = "";
  if (!equipos.length) {
    grilla.appendChild(el("p", "usados__vacio",
      "En este momento no tenemos equipos usados publicados. Escribinos por WhatsApp y te avisamos cuando entre uno como el que buscás."));
    return;
  }
  equipos.forEach(function (eq) { grilla.appendChild(tarjeta(eq)); });

  // Filtros por categoría (solo si hay más de una)
  var cats = [];
  equipos.forEach(function (e) { var c = e.categoria || "Otro"; if (cats.indexOf(c) < 0) cats.push(c); });
  if (!filtros || cats.length < 2) return;
  ["Todos"].concat(cats).forEach(function (c, i) {
    var b = el("button", "filtro", c);
    b.type = "button";
    b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    b.addEventListener("click", function () {
      filtros.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      grilla.querySelectorAll(".usado").forEach(function (t) {
        t.hidden = c !== "Todos" && t.dataset.categoria !== c;
      });
    });
    filtros.appendChild(b);
  });
  filtros.hidden = false;
})();
