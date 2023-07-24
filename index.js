



// -----------titleAboutMe-------------

const titulo = "<h3> About me </h3>";
const tituloAnimado = document.getElementById("titulo-animado");

function escribirTitulo() {
  tituloAnimado.innerHTML = ""; // Limpia el contenido previo del elemento
  let index = 0;
  const longitudTitulo = titulo.length;

  function escribirSiguienteCaracter() {
    const caracter = titulo.charAt(index);
    const span = document.createElement("span");
    span.textContent = caracter;

    if (caracter === "<" || caracter === ">" || caracter === "h" || caracter === "3" || caracter === "/") {
      span.style.color = getRandomColor(); // Cambia el color para los caracteres específicos
    }

    tituloAnimado.appendChild(span);
    index++;

    if (index < longitudTitulo) {
      setTimeout(escribirSiguienteCaracter, Math.random() * 200 + 100);
    } else {
      // Espera un tiempo antes de desaparecer el texto
      setTimeout(desaparecerTitulo, 5000);
    }
  }

  escribirSiguienteCaracter();
}

function desaparecerTitulo() {
  tituloAnimado.innerHTML = ""; // Borra el contenido del elemento
  // Espera un tiempo antes de iniciar nuevamente el proceso de escritura
  setTimeout(escribirTitulo, 1000);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setTimeout(function () {
  tituloAnimado.style.visibility = "visible";
  tituloAnimado.style.paddingRight = "0";
  escribirTitulo(); // Llama a la función que inicia la escritura
}, 1000);





// ----------hideNavMovileOnclickLink------------- 

document.addEventListener("DOMContentLoaded", function () {
  var offcanvas = document.getElementById("offcanvasWithBothOptions");
  var offcanvasInstance = new bootstrap.Offcanvas(offcanvas);

  var links = document.querySelectorAll(".offcanvas-body a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      offcanvasInstance.hide();
    });
  });
});


// --------scrollNavDesktop-------------

document.addEventListener("DOMContentLoaded", function () {
  var navNav = document.querySelector(".navNav");
  var scrollThreshold = 600; // Cambia este valor para ajustar la posición de scroll a partir de la cual se produce el cambio de color

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      navNav.classList.add("navbar-scrolled");
    } else {
      navNav.classList.remove("navbar-scrolled");
    }
  });
});




// --------------portfoliTittle-------------------

const tituloPortfolio = "<h3> Portfolio </h3>";
const tituloAnimadoPortfolio = document.getElementById("titulo-animado-Portfolio");

function escribirTituloPortfolio() {
  tituloAnimadoPortfolio.innerHTML = ""; // Limpia el contenido previo del elemento
  let index = 0;
  const longitudTituloPortfolio = tituloPortfolio.length;

  function escribirSiguienteCaracterPortfolio() {
    const caracter = tituloPortfolio.charAt(index);
    const span = document.createElement("span");
    span.textContent = caracter;

    if (caracter === "<" || caracter === ">" || caracter === "h" || caracter === "3" || caracter === "/") {
      span.style.color = getRandomColorPortfolio(); // Cambia el color para los caracteres específicos
    }

    tituloAnimadoPortfolio.appendChild(span);
    index++;

    if (index < longitudTituloPortfolio) {
      setTimeout(escribirSiguienteCaracterPortfolio, Math.random() * 200 + 100);
    } else {
      // Espera un tiempo antes de desaparecer el texto
      setTimeout(desaparecerTituloPortfolio, 5000);
    }
  }

  escribirSiguienteCaracterPortfolio();
}

function desaparecerTituloPortfolio() {
  tituloAnimadoPortfolio.innerHTML = ""; // Borra el contenido del elemento
  // Espera un tiempo antes de iniciar nuevamente el proceso de escritura
  setTimeout(escribirTituloPortfolio, 1000);
}

function getRandomColorPortfolio() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setTimeout(function () {
  tituloAnimadoPortfolio.style.visibility = "visible";
  tituloAnimadoPortfolio.style.paddingRight = "0";
  escribirTituloPortfolio(); // Llama a la función que inicia la escritura
}, 1000);




// --------------background Scroll MenuMobile----------------------------

window.addEventListener('scroll', function () {
  var menuButton = document.getElementById('btnMenuMovile');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 500) { // Ajusta este valor según el punto en el que deseas aplicar el fondo
    menuButton.classList.add('scrolled');
  } else {
    menuButton.classList.remove('scrolled');
  }
});


// --------------------------------------------

const swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
});


// Selecciona todos los slides en el Swiper
var slides = document.querySelectorAll(".mySwiper .swiper-slide");

// Agrega el evento mouseenter a cada slide
slides.forEach(function(slide) {
  slide.addEventListener("mouseenter", function() {
    var swiperInstance = slide.closest(".mySwiper").swiper;
    swiperInstance.autoplay.stop(); // Detiene la animación del Swiper
  });
});

// Agrega el evento mouseleave a cada slide
slides.forEach(function(slide) {
  slide.addEventListener("mouseleave", function() {
    var swiperInstance = slide.closest(".mySwiper").swiper;
    swiperInstance.autoplay.start(); // Inicia la animación del Swiper
  });
});

