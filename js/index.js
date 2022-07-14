/*$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});*/

 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  


function abrirPuntitos() {
  document.getElementById("popup1").classList.toggle("popup-active")
}

function abrirLike() {
  document.getElementById("popup2").classList.toggle("popup-like-active")
  setTimeout(() => document.getElementById("popup2").style.display="none", 4000);
}


function abrirFiltros() {
  document.getElementById("dropwdown").classList.toggle("dropdown-active")

}

function noMG() {
  document.getElementById("dislike").classList.toggle("overlay-dislike-active")
}

function filtros() {
  document.getElementById("chips").classList.toggle("chips-extra-active")
  document.getElementById("chips2").classList.toggle("chips-extra-active")
  document.getElementById("chips3").classList.toggle("chips-extra-active")
  document.getElementById("chips4").classList.toggle("chips-extra-active")
  console.log ("envio");
}

