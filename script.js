window.onload = () => {
  const inputApi = document.getElementById("clipboard");
  const btnPaste = document.getElementById("btnPaste");

  if (!inputApi) {
    console.error("El elemento con el ID 'clipboard' no existe.");
  } else if (!btnPaste) {
    console.error("El elemento con el ID 'btnPaste' no existe.");
  } else {
    btnPaste.addEventListener("click", () => {
      // Seleccionar el texto del input
      inputApi.select();

      // Copiar al portapapeles (con comprobación de compatibilidad)
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(inputApi.value)
          .then(() => alert("\n\t\t¡Bien hecho!"));
          window.close();
          .catch(err => alert("Error al copiar: " + err));
      } else {
        alert("Tu navegador no soporta la copia al portapapeles.");
      }
    });
  }
};
