// Імпортуємо бібліотеку
import './libs/smooth-scroll.min.js';
import "./libs/ismobile.js";
//Динамический адаптив
import { useDynamicAdapt } from './libs/dynamic_adapt.js'
useDynamicAdapt();

//burger
import "./libs/burger.js";
//spollers
import "./libs/spollers.js";

const anim = lottie;
anim.loadAnimation({
	container: document.querySelector('.lottie-test'),
	renderer: 'canvas',
	loop: true,
	autoplay: true,
	path: 'js/anims/data1.json'
});
// console.log(lottie);

const image = document.querySelector('.sui__img');
const firstImage = "../img/sui.png";
const secondImage = "../img/sui-hover.png";

let clicked = false;

function changeImage() {
  if (!clicked) {
    image.src = secondImage;
    clicked = true;
    setTimeout(function() {
      image.src = firstImage;
      clicked = false;
    }, 1000);
  }
}

image.addEventListener('mouseover', function() {
  image.src = secondImage;
});

image.addEventListener('mouseout', function() {
  image.src = firstImage;
});

image.addEventListener('click', function() {
  changeImage();
});


const swiper = new Swiper('.our-slider', {
  slidesPerView: 'auto',
	// autoplay: {
	// 	delay: 1000,
	// },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
	// speed: 10,
  // spaceBetween: 30,
	// loop: true,
  // centerInsufficientSlides: true,
  breakpoints: { 
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 30,
      // centeredSlides: true
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 20,
      // centeredSlides: true
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 50,
      // centeredSlides: true
    }
  }
});

const hgSwiper = new Swiper('.hg-slider', {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: 'row'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: { 
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
      grid: {
        rows: 2,
        fill: 'row'
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 50,
      grid: {
        rows: 1,
        fill: 'row'
      },
    }
  }
});

// Створюємо новий екземпляр Smooth Scroll та налаштовуємо його параметри
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100, // швидкість прокрутки
  // offset: 80 // відступ від верхнього краю елементу, до якого прокручуємо сторінку
});