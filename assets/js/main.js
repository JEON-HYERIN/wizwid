const rolling = document.querySelector('.rolling-banner');

const swiper = new Swiper('.rolling-banner', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  direction: 'vertical'
  // spaceBetween: 100,
});