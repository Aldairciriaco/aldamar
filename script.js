const pasos = document.querySelectorAll(".paso");
const imagen = document.getElementById("imagenProceso");
const titulo = document.getElementById("tituloProceso");
const descripcion = document.getElementById("descripcionProceso");

const procesos = {
    1: {
        titulo: "Asesoría y evaluación",
        descripcion: "Evaluamos tu proyecto de forma personalizada.",
        imagen: "superviObra.png"
    },
    2: {
        titulo: "Diseño y planificación",
        descripcion: "Diseñamos la mejor solución según tus necesidades.",
        imagen: "asesorventana.jpeg"
    },
    3: {
        titulo: "Fabricación",
        descripcion: "Fabricamos cada pieza con materiales de alta calidad.",
        imagen: "fabricaciopuerta.jpeg"
    },
    4: {
        titulo: "Instalación",
        descripcion: "Realizamos una instalación profesional con acabados impecables.",
        imagen: "intalacion.jpeg"
    }
};

let animando = false;

pasos.forEach(paso => {

    paso.addEventListener("mouseenter", () => {

        if (animando) return;

        animando = true;

        pasos.forEach(p => p.classList.remove("activo"));
        paso.classList.add("activo");

        const id = paso.dataset.id;

        // Desaparece
        imagen.style.opacity = "0";
        titulo.style.opacity = "0";
        descripcion.style.opacity = "0";

        setTimeout(() => {

            imagen.src = procesos[id].imagen;
            titulo.textContent = procesos[id].titulo;
            descripcion.textContent = procesos[id].descripcion;

            // Aparece nuevamente
            imagen.style.opacity = "1";
            titulo.style.opacity = "1";
            descripcion.style.opacity = "1";

            animando = false;

        }, 300);

    });

});

pasos.forEach(paso => {

    paso.addEventListener("click", () => {

        pasos.forEach(p => p.classList.remove("activo"));

        paso.classList.add("activo");

        const id = paso.dataset.id;

        titulo.textContent = datos[id].titulo;
        descripcion.textContent = datos[id].descripcion;
        imagen.src = datos[id].imagen;

    });

});

// ===============================
// Selección de series
// ===============================

let seriesElegidas = [];

const tarjetas = document.querySelectorAll(".sistema-card");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        const serie = tarjeta.dataset.serie;

        if (seriesElegidas.includes(serie)) {

            seriesElegidas = seriesElegidas.filter(s => s !== serie);
            tarjeta.classList.remove("seleccionada");

        } else {

            seriesElegidas.push(serie);
            tarjeta.classList.add("seleccionada");

        }

        document.getElementById("seriesSeleccionadas").value =
            seriesElegidas.join("\n");

    });

});
const formulario = document.getElementById("formCotizacion");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const cantidad = document.getElementById("cantidad").value;
    const observaciones = document.getElementById("mensaje").value;
    const series = document.getElementById("seriesSeleccionadas").value;

    if (series === "") {
        alert("Seleccione al menos una serie de ventana.");
        return;
    }

    const mensajeWhatsApp =
        `📋 *NUEVA SOLICITUD DE COTIZACIÓN - ALDAMAR*

👤 *Nombre:* ${nombre}
📞 *Teléfono:* ${telefono}

📦 *Series seleccionadas:*
${series}

🔢 *Cantidad:* ${cantidad}

📝 *Observaciones:*
${observaciones}`;

    // Número del asesor
    const numero = "51910762088";

    // Abrir WhatsApp
    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensajeWhatsApp)}`,
        "_blank"
    );

    // Mensaje de confirmación
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <div class="mensaje-exito">
        <h2>✅ Redirigiendo a WhatsApp...</h2>
        <p>Solo presione <strong>Enviar</strong> para que el asesor reciba su solicitud.</p>
    </div>
`;

    formulario.reset();

    document.getElementById("seriesSeleccionadas").value = "";

    seriesElegidas = [];

    document.querySelectorAll(".sistema-card").forEach(tarjeta => {
        tarjeta.classList.remove("seleccionada");
    });

});


const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");


menuBtn.addEventListener("click", () => {
    nav.classList.toggle("activo");
});


const enlaces = document.querySelectorAll("#nav a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("activo");
    });
});

const imagenHero = document.getElementById("imagenHero");

const imagenes = [
    "superviObra.png",
    "serie80llave.jpeg",
    "seri80enL.jpeg",
    "alturafachada.jpeg",
];

let indice = 0;

setInterval(() => {

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    imagenHero.src = imagenes[indice];

}, 2000);


const secciones = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

    let seccionActual = "";

    secciones.forEach((seccion) => {

        const inicio = seccion.offsetTop - 120;
        const fin = inicio + seccion.offsetHeight;

        if (window.scrollY >= inicio && window.scrollY < fin) {
            seccionActual = seccion.id;
        }

    });

    links.forEach((link) => {

        link.classList.remove("activo");

        if(link.getAttribute("href") === "#" + seccionActual){
            link.classList.add("activo");
        }

    });

});