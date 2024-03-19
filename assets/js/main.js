const rolling = document.querySelector('.rolling-banner');

const swiper = new Swiper('.rolling-banner', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  direction: 'vertical'
  // spaceBetween: 100,
});

$(window).scroll(function() {
  const scrollValue = $(document).scrollTop();
  if(scrollValue > 0) {
    $('.header').addClass('is-fixed');
  } else {
    $('.header').removeClass('is-fixed');
  }
})