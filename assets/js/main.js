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
  slidesPerView: '3',
  spaceBetween: 60,
  centeredSlides: true,
  navigation: {
    prevEl: '.section-lookbook .btn-prev',
    nextEl: '.section-lookbook .btn-next',
  },
  on: {
    slideChange: function() {
      const subLookbook = document.querySelectorAll('.sub-lookbook .product-list-wrap');
      const realIndex = this.realIndex;

      subLookbook.forEach(function(el, index) {
        el.classList.remove('is-visible');
        subLookbook[realIndex].classList.add('is-visible');
      });
    }
  }
});

const subLookbook = new Swiper('.section-lookbook .sub-lookbook .product-list-wrap', {
  speed: 600,
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: '.sub-lookbook .swiper-pagination',
    type: 'progressbar',
  },
  observer: true,
  observeParents: true,
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

const brandSwiper = new Swiper('.section-brand .brand-list-wrap', {
  autoplay: {
    delay: 4000
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 140,
  speed: 700,
  navigation: {
    prevEl: '.section-brand .btn-prev',
    nextEl: '.section-brand .btn-next',
  },
  on: {
    slideChange: function() {
      const index = this.realIndex;
      $('.section-brand .tab-item').eq(index).addClass('is-active').siblings().removeClass('is-active');
    }
  }
});

$('.section-brand .btn-tab').click(function() {
  const index = $(this).parent().index();
  brandSwiper.slideToLoop(index);
  $('.section-brand .tab-item').eq(index).addClass('is-active').siblings().removeClass('is-active');
});

new Swiper('.section-pick .pick-list-wrap', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 400,
  navigation: {
    prevEl: '.section-pick .btn-prev',
    nextEl: '.section-pick .btn-next',
  },
});

new Swiper('.section-editorial .editorial-list-wrap', {
  loop: true,
  speed: 900,
  navigation: {
    prevEl: '.section-editorial .btn-prev',
    nextEl: '.section-editorial .btn-next',
  },
  pagination: {
    el: '.section-editorial .tab-list',
    clickable: true,
    renderBullet: function (index, className) {
      const bulletName = ["WEEKLY CLOSET", "WHERE TO GO", "BRANDPEDIA", "KEYWORD#", "MARKETER'S DIARY", "SNACK FILM"];
      return `
      <li class="tab-item ${className}">
        <button type="button" class="btn-tab">${bulletName[index]}</button>
      </li>
      `;
    }
  }
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

// top btn
const topBtn = document.querySelector('.btn-top');

topBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
  const target = document.querySelector('.section-benefit');
  const targetPosition = target.getBoundingClientRect().top;
  const CLASSNAME = 'is-invisible';

  if(window.scrollY >= targetPosition) {
    topBtn.classList.remove(CLASSNAME);
  } else {
    topBtn.classList.add(CLASSNAME);
  }
})