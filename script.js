const inputApi = document.getElementById("clipboard");
const btnPaste = document.getElementById("btn_Paste");

btnPaste.addEventListener("click", () => {
inputApi.select();
 // Copiar al portapapeles (con comprobación de compatibilidad)
if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(inputApi.value)
    .then(() => alert("¡Texto copiado al portapapeles!"))
    .catch(err => alert("Error al copiar: " + err));
    } else {
        alert("Tu navegador no soporta la copia al portapapeles.");
    }
});