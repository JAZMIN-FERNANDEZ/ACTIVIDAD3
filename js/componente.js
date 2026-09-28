// Esta función sirve para mostrar una ventana modal en la página.
// Recibe tres cosas: el título, el mensaje y el texto que va en el botón.
// Si no le pongo texto al botón, por defecto dice "Cerrar".
function abrirModal(titulo, contenido, textoBoton = "Cerrar") {

  // Primero busco si ya hay un modal abierto en la página.
  // Si lo hay, lo borro para que no se junten varios uno sobre otro.
  const anterior = document.querySelector(".modal-fondo");
  if (anterior) anterior.remove();

  // creo el fondo con un div nuevo que cubre toda la pantalla.
  // Le pongo la clase modal-fondo para que el CSS le dé su estilo.
  const fondo = document.createElement("div");
  fondo.className = "modal-fondo";

  // Dentro del fondo meto la caja del modal, con un título h2
  // un mensaje p y un botón. El título y el mensaje los dejo vacíos
  // porque los lleno en el siguiente paso.
  fondo.innerHTML = `
    <div class="modal-caja">
      <h2></h2>
      <p></p>
      <button>${textoBoton}</button>
    </div>
  `;

  //  Aquí es donde se personaliza el modal busco el h2 y el p
  // y les escribo lo que me mandaron al llamar la función.
  // Por eso el mismo modal puede decir cosas diferentes cada vez.
  fondo.querySelector("h2").textContent = titulo;
  fondo.querySelector("p").textContent = contenido;

  //  Le pongo las formas de cerrarse.
  // Si le dan clic al botón, el modal se quita de la página.
  fondo.querySelector("button").onclick = () => fondo.remove();

  // Si le dan clic a la parte de afuera el, también se cierra.
  // Uso el if para revisar que el clic fue en el fondo y no en la caja,
  // porque si no, se cerraría hasta al tocar el texto del modal.
  fondo.onclick = (e) => {
    if (e.target === fondo) fondo.remove();
  };

  // Hasta ahora el modal solo estaba creado en memoria.
  // Con esta línea lo agrego a la página y es cuando por fin aparece.
  document.body.appendChild(fondo);
}