
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();


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
      e.target.classList.add('active');
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
   loop: true,
   pagination: {
      // el: ".swiper-points",
      clickable: true,
   },
   // стрелки
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 2,
         spaceBetween: 20,
      },

      668: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 5,
         spaceBetween: 16,
      },
   },
});

// Swiper
// ------------------
new Swiper('.image-slider-menu', {
   slidesPerView: 6,
   spaceBetween: 30,
   loop: true,
   pagination: {
      // el: ".swiper-points",
      clickable: true,
   },
   // стрелки
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 3,
         spaceBetween: 20,
      },

      668: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 6,
         spaceBetween: 16,
      },
   },
});