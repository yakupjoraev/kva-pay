function currenciesSlider() {
  const sl = new Swiper('.currencies__slider', {
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      enabled: true,
      delay: 1,
    },
  });
}

export default currenciesSlider;