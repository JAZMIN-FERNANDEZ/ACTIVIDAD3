function abrirModal(titulo, contenido, textoBoton = "Cerrar") {
  const anterior = document.querySelector(".modal-fondo");
  if (anterior) anterior.remove();

  const fondo = document.createElement("div");
  fondo.className = "modal-fondo";

  fondo.innerHTML = `
    <div class="modal-caja">
      <h2></h2>
      <p></p>
      <button>${textoBoton}</button>
    </div>
  `;

  fondo.querySelector("h2").textContent = titulo;
  fondo.querySelector("p").textContent = contenido;

  fondo.querySelector("button").onclick = () => fondo.remove();
  fondo.onclick = (e) => {
    if (e.target === fondo) fondo.remove();
  };

  document.body.appendChild(fondo);
}