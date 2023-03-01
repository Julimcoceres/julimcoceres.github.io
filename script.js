// Función para mostrar leyenda al hacer clic en el enlace de Argentina Programa o el footer
const mostrarLeyenda = (event) => {
  event.preventDefault(); // Prevenimos que se realice la acción por defecto del enlace
  const leyenda = "Desarrollado gracias a lo aprendido en Argentina Programa cursado en 2023.";
  alert(leyenda); // Mostramos la leyenda en un mensaje de alerta
};

// Función para agrandar la foto de perfil al hacer clic
const agrandarFoto = () => {
  const foto = document.querySelector("img"); // Seleccionamos la foto de perfil
  foto.classList.toggle("agrandada"); // Añadimos o removemos la clase "agrandada" para cambiar su tamaño
};

// Seleccionamos los enlaces de clase "programa" y "programas" y les agregamos el evento click para mostrar la leyenda correspondiente
const enlacesPrograma = document.querySelectorAll(".programa");
enlacesPrograma.forEach((enlace) => {
  enlace.addEventListener("click", mostrarLeyenda);
});

const enlaceProgramas = document.querySelector(".programas");
enlaceProgramas.addEventListener("click", mostrarLeyenda);

// Seleccionamos la foto de perfil y le agregamos el evento click para agrandarla
const fotoPerfil = document.querySelector("img");
fotoPerfil.addEventListener("click", agrandarFoto);