
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// TABS
// -------------------
function Tabs() {
   var bindAll = function () {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
         menuElements[i].addEventListener('click', change, false);
      }
   }

   var clear = function () {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
         menuElements[i].classList.remove('active');
         var id = menuElements[i].getAttribute('data-tab');
         document.getElementById(id).classList.remove('active');
      }
   }

   var change = function (e) {
      clear();
      e.target.parentNode.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
   }

   bindAll();
}

var connectTabs = new Tabs();

// Swiper
// ------------------
new Swiper('.image-slider', {
   slidesPerView: 5,
   spaceBetween: 30,
   pagination: {
      el: ".image-slider-pagination",
      clickable: true,
    },
   // стрелки
   navigation: {
      nextEl: ".popular-slide-btn-next",
      prevEl: ".popular-slide-btn-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      340: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 5,
         spaceBetween: 16,
      },
      1700: {
         slidesPerView: 5,
         spaceBetween: 16,
         pagination: {
            enabled: false,
         }
      },
   },
});

// Swiper
// ------------------
new Swiper('.image-slider-menu', {
   slidesPerView: 6,
   spaceBetween: 30,
   pagination: {
      el: ".image-slider-menu-pagination",
      clickable: true,
    },
   // стрелки
   navigation: {
      nextEl: ".menu-nav-btn-next",
      prevEl: ".menu-nav-btn-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 2,
         spaceBetween: 20,
         pagination: {
            enabled: true,
         }
      },
      479: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      992: {
         slidesPerView: 6,
         spaceBetween: 16,
         pagination: {
            enabled: false,
         }
      },
   },
});