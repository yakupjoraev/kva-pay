function trustedSlider() {
  const swiper = new Swiper('.trusted__slider', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.1,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.trusted__slider-btn--next',
      prevEl: '.trusted__slider-btn--prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 300px
      300: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },

      // when window width is >= 1220px
      1220: {
        slidesPerView: 1.4,
        spaceBetween: 40
      }
    }

  });

  window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.trusted__slider');
    const slide = document.querySelector('.trusted__slide');
    const btns = document.querySelector('.trusted__slider-btns');

    const setBtnsWidth = () => {
      const slideWidth = slide.clientWidth;
      btns.style.width = `${slideWidth}px`;
    };

    setBtnsWidth(); // устанавливаем начальную ширину кнопок

    // обработчик изменения размеров окна
    window.addEventListener('resize', setBtnsWidth);

    // обработчик изменения размеров слайда
    new ResizeObserver(setBtnsWidth).observe(slider);
  });
}

export default trustedSlider;