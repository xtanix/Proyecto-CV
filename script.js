/*Animacion de carga en la seccion de "habilidades"*/
document.addEventListener('DOMContentLoaded', function() {
  console.log('funciona');

  var habilidades = document.querySelectorAll('.habilidad-progreso');

  habilidades.forEach(function(habilidad) {
    var waypoint = new Waypoint({
      element: habilidad,
      handler: function(direction) {
        habilidad.classList.add('loading');
        setTimeout(function() {
          habilidad.classList.add('loaded');
          habilidad.classList.remove('loading');
        }, 2000);
        this.destroy();
      },
      offset: 'bottom-in-view'
    });
  });
});


/*animacion Final de pagina*/
document.addEventListener("DOMContentLoaded", function() {
  // Obtener la posición vertical de la ventana
  const scrollPosition = window.scrollY;

  // Obtener el elemento con el ID "acerca-de-mi"
  const element = document.getElementById('acerca-de-mi');

  // Verificar que el elemento existe antes de acceder a su propiedad offsetTop
  if (element) {
    // Obtener la posición vertical del elemento
    const elementPosition = element.offsetTop;

    // Comparar la posición del elemento con la posición vertical de la ventana
    if (elementPosition < scrollPosition + window.innerHeight) {
      // El elemento está visible en la ventana, aplicar animación
    } else {
      // El elemento no está visible en la ventana, no aplicar animación
    }
  }
});



function confirmar() {
  // Muestra un mensaje de confirmación
  const respuesta = confirm("¿Estás seguro de que quieres continuar?");
  
  // Si el usuario selecciona "Aceptar", redirige a la página a1.html después de 5 segundos
  if (respuesta) {
    setTimeout(function() {
      window.location.href = "a1.html";
    }, 1000);
  } else {
    // Si el usuario selecciona "Cancelar", muestra un mensaje
    alert("¡Para qué me presionas entonces!");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtener la pregunta y el texto
  const pregunta = document.getElementById("subtitulo");
  const texto = document.getElementById("texto");

  // Verificar si los elementos existen antes de agregar el event listener
  if (pregunta && texto) {
    // Agregar un controlador de eventos clic a la pregunta
    pregunta.addEventListener("click", function() {
      // Alternar la clase "oculto" en el texto
      texto.classList.toggle("oculto");
    });
  }
});



/* ---------- */
function seleccionar(){
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

