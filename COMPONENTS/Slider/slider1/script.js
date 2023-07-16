// script.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          showDescription(this);
        },
        slideChange: function () {
          showDescription(this);
        },
      },
    });
  
    function showDescription(swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const descriptions = activeSlide.querySelectorAll('.description');
      descriptions.forEach(description => description.style.display = 'block');
    }
  });
  