// a태그 기본동작 방지
$(function () {
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });
})

new Swiper('.rolling-banner', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  direction: 'vertical'
});

new Swiper('.section-visual .swiper', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  speed: 600,
  spaceBetween: 20,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section-visual .btn-prev',
    nextEl: '.section-visual .btn-next',
  },
  pagination: {
    el: ".section-visual .swiper-pagination",
    type: "progressbar",
  }
});

new Swiper('.section-new .category-list-wrap', {
  slidesPerView: 6,
  spaceBetween: 2
});

new Swiper('.section-benefit .benefit-list-wrap', {
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section-benefit .btn-prev',
    nextEl: '.section-benefit .btn-next',
  },
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

