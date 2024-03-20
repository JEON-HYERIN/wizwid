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
    prevEl: '.section-visual .swiper-button-prev',
    nextEl: '.section-visual .swiper-button-next',
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

new Swiper('.section-wish .product-list-wrap', {
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section-wish .btn-prev',
    nextEl: '.section-wish .btn-next',
  },
});

const lookbookSlide1 = new Swiper('.section-lookbook .lookbook-list-wrap', {
  // autoplay: {
  //   delay: 3000
  // },
  loop: true,
  speed: 600,
  slidesPerView: 3,
  // spaceBetween: 60,
  centeredSlides: true,
  navigation: {
    prevEl: '.section-lookbook .btn-prev',
    nextEl: '.section-lookbook .btn-next',
  },
  on: {
    slideChange: function() {
      // console.log('hello');
    }
  }
});

// const lookbookSlide2 = new Swiper('.section-lookbook .product-list-wrap', {
//   speed: 600,
//   slidesPerView: 'auto',
//   pagination: {
//     el: ".section-lookbook .swiper-pagination",
//     type: "progressbar",
//   },
//   on:{
//     'reachEnd':function(){
//       cnt = this.slides.length
//       realIdx = this.realIndex+1;
//       if(cnt === realIdx){
//         lookbookSlide1.slideNext();
//       }
//     },
//     'reachBeginning':function(){
//       realIdx = this.realIndex;
//       if(0 === realIdx){
//         lookbookSlide1.slidePrev();
//       }
//     }
//   }
// });

// lookbookSlide1.on('slideChange', function() {
//   idx = lookbookSlide1.realIndex;
//   console.log(idx);
//   lookbookSlide2.slideToLoop(idx)
// })


new Swiper('.section-keyword .keyword-list-wrap', {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  navigation: {
    prevEl: '.section-keyword .btn-prev',
    nextEl: '.section-keyword .btn-next',
  },
});

new Swiper('.section-sale .product-list-wrap', {
  slidesPerView: 'auto',
  speed: 400,
  navigation: {
    prevEl: '.section-sale .btn-prev',
    nextEl: '.section-sale .btn-next',
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

