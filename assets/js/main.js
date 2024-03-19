const rolling = document.querySelector('.rolling-banner');

const swiper = new Swiper('.rolling-banner', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  direction: 'vertical'
});

$(window).scroll(function() {
  const scrollValue = $(document).scrollTop();
  if(scrollValue > 0) {
    $('.header').addClass('is-fixed');
  } else {
    $('.header').removeClass('is-fixed');
  }
})

$('.link-gnb').on('mouseenter', function() {
  $('.lnb-container').removeClass('is-visible');
  $(this).siblings('.lnb-container').addClass('is-visible');
})

$('.lnb-container').on('mouseleave', function() {
  $('.lnb-container').removeClass('is-visible');
})