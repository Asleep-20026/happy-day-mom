document.addEventListener('DOMContentLoaded', () => {
  const startAnimationBtn = document.getElementById('startAnimationBtn');
  const cardContainer = document.getElementById('cardContainer');
  const botonRecuerdos = document.getElementById("botonRecuerdos");
  const imagen = document.getElementById("imagen");

  startAnimationBtn.addEventListener('click', () => {
      hideButton(); // Ocultar el botón al mostrar el contenido
      cardContainer.classList.toggle('hidden');
      hideImage();
      reproducirAudio();
      
  });

  function hideButton() {
      startAnimationBtn.style.display = 'none';
  }

  function hideImage() {
      imagen.style.display = 'none';
  }

  function showImage() {
      imagen.style.display = "block";
  }

  botonRecuerdos.addEventListener("click", function() {
      if (imagen.style.display === "none") {
          showImage(); // Mostrar la imagen si está oculta
      } else {
          hideImage(); // Ocultar la imagen si está visible
      }
  });

  const hearts = document.querySelectorAll('.heart');
  hearts.forEach(heart => {
      heart.style.setProperty('--random', Math.random());
  });
  

});
function reproducirAudio() {
    if (miAudio.paused) { // Verificar si el audio está pausado
      miAudio.play(); // Reproducir el audio
    } else {
      miAudio.pause(); // Pausar el audio si ya está reproduciéndose
      miAudio.currentTime = 0; // Reiniciar la reproducción al principio del audio
    }
  }
reproducirAudio();