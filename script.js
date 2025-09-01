document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ script.js cargado correctamente");

  // Validación del formulario
  const formulario = document.getElementById('formulario-contacto');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      alert(`¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto pronto.`);
      formulario.reset();
    });
  }

  // Animación al hacer scroll
  const secciones = document.querySelectorAll('section');

  const mostrarSeccionesVisibles = () => {
    secciones.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('mostrar');
      }
    });
  };

  // Mostrar al cargar
  mostrarSeccionesVisibles();

  // Mostrar al hacer scroll
  window.addEventListener('scroll', mostrarSeccionesVisibles);
});

// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, distance: 150, color: "#ffffff" },
    color: { value: "#ffffff" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// Validación del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje, pronto me pondré en contacto contigo.");
  this.reset();
});
