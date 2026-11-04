/* =====================================================================
   EQUIPOS USADOS EN VENTA — este es el ÚNICO archivo que hay que tocar
   para agregar, cambiar o sacar equipos de la sección "Usados" del sitio.

   CÓMO AGREGAR UN EQUIPO
   1. Subí las fotos a la carpeta  assets/img/usados/  (JPG o WebP,
      idealmente horizontales 4:3, unos 1200 px de ancho y menos de 300 KB).
   2. Copiá un bloque { ... } completo de abajo (desde la llave que abre
      hasta la llave que cierra, con la coma final) y pegalo dentro de la lista.
   3. Cambiá los datos. Respetá las comillas "..." y las comas.

   CAMPOS
   - publicar:   true = se muestra en el sitio · false = queda oculto (borrador).
   - estado:     "disponible" · "reservado" · "vendido"
   - categoria:  "Notebook" · "Celular" · "TV" · "Otro"  (se usa para los filtros y el ícono)
   - precio:     número en pesos, SIN puntos ni signo $ (ej.: 450000). Se muestra como $ 450.000.
                 Si ponés null se muestra "Consultar precio".
   - precioAnterior: opcional; si bajaste el precio, el valor viejo aparece tachado.
   - condicion:  estado estético/funcional en pocas palabras (ej.: "Muy buena").
   - caracteristicas: pares "Nombre": "Valor". Se muestran en el orden en que los escribas.
   - detalle:    texto libre opcional (marcas de uso, qué se le hizo, etc.).
   - incluye:    opcional (ej.: "Cargador original").
   - garantia:   opcional (ej.: "30 días"). Si queda vacío "" no se muestra nada.
   - fotos:      lista de rutas. La primera es la principal. Puede quedar vacía [].
                 Ej.: fotos: ["assets/img/usados/lenovo-1.jpg", "assets/img/usados/lenovo-2.jpg"]
   - ejemplo:    true solo en los equipos de muestra (muestran un cartel amarillo
                 "EJEMPLO"). Borrá esos bloques antes de publicar.

   Para sacar un equipo: cambiá publicar a false, o borrá su bloque entero.
   Para marcarlo vendido: estado: "vendido" (queda visible, al final, como vendido).
   Si una comilla dentro del texto molesta, escribila como \"  (ej.: 15,6\").
   ===================================================================== */

window.EQUIPOS_USADOS = [

  {
    publicar: true,
    ejemplo: true,
    nombre: "Notebook Lenovo IdeaPad 15\"",
    categoria: "Notebook",
    estado: "disponible",
    precio: 450000,
    precioAnterior: null,
    condicion: "Muy buena",
    caracteristicas: {
      "Procesador": "Intel Core i5 (10.ª gen.)",
      "Memoria RAM": "8 GB",
      "Almacenamiento": "SSD 256 GB",
      "Pantalla": "15,6\" Full HD",
      "Batería": "Autonomía aprox. 3 h",
      "Sistema": "Windows 11"
    },
    detalle: "Revisada en el laboratorio: limpieza interna, pasta térmica nueva y prueba de estrés. Detalles de uso en la tapa.",
    incluye: "Cargador original",
    garantia: "",
    fotos: []
  },

  {
    publicar: true,
    ejemplo: true,
    nombre: "Celular Samsung Galaxy A-series",
    categoria: "Celular",
    estado: "reservado",
    precio: 180000,
    precioAnterior: 200000,
    condicion: "Buena",
    caracteristicas: {
      "Memoria": "128 GB",
      "RAM": "4 GB",
      "Pantalla": "6,5\"",
      "Batería": "Cambiada a nueva"
    },
    detalle: "Liberado. Pantalla sin rayones; marcos con marcas leves de uso.",
    incluye: "Cable USB-C",
    garantia: "",
    fotos: []
  },

  {
    publicar: true,
    ejemplo: true,
    nombre: "Smart TV LED 43\"",
    categoria: "TV",
    estado: "vendido",
    precio: 260000,
    precioAnterior: null,
    condicion: "Muy buena",
    caracteristicas: {
      "Resolución": "Full HD",
      "Sistema": "Android TV",
      "Conexiones": "3 HDMI · 2 USB · Wi-Fi"
    },
    detalle: "Retroiluminación (backlight) nueva.",
    incluye: "Control remoto y patas",
    garantia: "",
    fotos: []
  },

];
