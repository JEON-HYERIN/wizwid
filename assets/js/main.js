// a태그 기본동작 방지
$(function () {
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });
})

// header
$(window).scroll(function () {
  const scrollValue = $(document).scrollTop();
  if (scrollValue > 0) {
    $('.header').addClass('is-fixed');
    $('.header .logo').addClass('blind');
  } else {
    $('.header').removeClass('is-fixed');
    $('.header .logo').removeClass('blind');
  }
})

$('.link-gnb').on('mouseenter', function () {
  $('.lnb-container').removeClass('is-visible');
  $(this).siblings('.lnb-container').addClass('is-visible');
})

$('.lnb-container').on('mouseleave', function () {
  $('.lnb-container').removeClass('is-visible');
})

new Swiper('.rolling-banner', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
  direction: 'vertical'
});

// visual
new Swiper('.section-visual .swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  speed: 600,
  spaceBetween: 12,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section-visual .swiper-button-prev',
    nextEl: '.section-visual .swiper-button-next',
  },
  pagination: {
    el: ".section-visual .swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1680: {
      spaceBetween: 16,
    },
    1920: {
      spaceBetween: 20,
    }
  }
});

// new
new Swiper('.section-new .category-list-wrap', {
  slidesPerView: 6,
  spaceBetween: 2
});

// benefit
new Swiper('.section-benefit .benefit-list-wrap', {
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section-benefit .btn-prev',
    nextEl: '.section-benefit .btn-next',
  },
});

// wish
new Swiper('.section-wish .product-list-wrap', {
  slidesPerView: 5,
  navigation: {
    prevEl: '.section-wish .btn-prev',
    nextEl: '.section-wish .btn-next',
  },
  breakpoints: {
    1501: {
      slidesPerView: 6
    }
  }
});

// lookbook
const lookbookSwiper = new Swiper('.section-lookbook .lookbook-list-wrap', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
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
    slideChange: function () {
      const subLookbook = document.querySelectorAll('.sub-lookbook .product-list-wrap');
      const realIndex = this.realIndex;

      subLookbook.forEach(function (el, index) {
        el.classList.remove('is-visible');
        subLookbook[realIndex].classList.add('is-visible');
      });
    }
  }
});

// sublookbook
const subLookbook = new Swiper('.section-lookbook .sub-lookbook .product-list-wrap', {
  speed: 600,
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.sub-lookbook .swiper-pagination',
    type: 'progressbar',
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    1501: {
      slidesPerView: 4
    }
  }
});

// keyword
new Swiper('.section-keyword .keyword-list-wrap', {
  slidesPerView: 2,
  loop: true,
  speed: 600,
  navigation: {
    prevEl: '.section-keyword .btn-prev',
    nextEl: '.section-keyword .btn-next',
  },
  breakpoints: {
    1501: {
      slidesPerView: 3
    }
  }
});

// sale
new Swiper('.section-sale .product-list-wrap', {
  slidesPerView: 4,
  speed: 400,
  navigation: {
    prevEl: '.section-sale .btn-prev',
    nextEl: '.section-sale .btn-next',
  },
  breakpoints: {
    1501: {
      slidesPerView: 5
    }
  }
});

// brand
const brandSwiper = new Swiper('.section-brand .brand-list-wrap', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
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
    slideChange: function () {
      const index = this.realIndex;
      $('.section-brand .tab-item').eq(index).addClass('is-active').siblings().removeClass('is-active');
    }
  }
});

$('.section-brand .btn-tab').click(function () {
  const index = $(this).parent().index();
  brandSwiper.slideToLoop(index);
  $('.section-brand .tab-item').eq(index).addClass('is-active').siblings().removeClass('is-active');
});

// pick
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

$('.section-pick .btn-more').on('click', function() {
  $('.section-pick .map').removeClass('is-visible');
  $(this).parent().addClass('is-visible');
});

// editorial
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

// top btn
const topBtn = document.querySelector('.btn-top');

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  const target = document.querySelector('.section-benefit');
  const targetPosition = target.getBoundingClientRect().top;
  const CLASSNAME = 'is-invisible';

  if (window.scrollY >= targetPosition) {
    topBtn.classList.remove(CLASSNAME);
  } else {
    topBtn.classList.add(CLASSNAME);
  }
})

// sale - countdown
function dayCount() {
  const timeEls = document.querySelectorAll('.section-sale .time');
  
  const today = new Date();
  const dday = new Date(2024, 10, 18);
  const timeGap = dday.getTime() - today.getTime();

  const remainDay = Math.ceil(timeGap / (1000 * 60 * 60 * 24));
  
  const hours = String(Math.floor(timeGap / (1000 * 60 * 60) % 24)).padStart(2, '0');
  const minutes = String(Math.floor(timeGap / (1000 * 60) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((timeGap / 1000) % 60)).padStart(2, '0');

  if(timeGap <= 0) {
    clearInterval(countdownInterval);
    
    timeEls.forEach(function(timeEl) {
      timeEl.remove();
    })
  }

  timeEls.forEach(function(timeEl) {
    timeEl.textContent = `${String(hours).padStart(2, 0)}h : ${String(minutes).padStart(2, 0)}m : ${String(seconds).padStart(2, 0)}s`;
  });
}

const countdownInterval = setInterval(dayCount, 1000);