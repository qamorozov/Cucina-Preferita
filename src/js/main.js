// === BURGER BTN ===

const btn = document.querySelector('.burger-btn'),
    header = document.querySelector('.header'),
    listItem = document.querySelectorAll('.menu__list-item');

    btn.addEventListener('click', function () {
    header.classList.toggle('header--active')
    if (header.classList.contains('header--active')) {
        hideScroll();
    } else {
        showScroll();
    }
});

listItem.forEach(function(item) {
    item.addEventListener('click', function() {
        header.classList.remove('header--active');
        showScroll();
    })
});

// === FUNCTION THAT HIDES SCROLLBAR ===

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    document.getElementById('header').style.paddingRight = scrollWidth;
};

// === FUNCTION THAT SHOWS SCROLLBAR ===

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    document.getElementById('header').style.paddingRight = '';
};

// === FUNCTION THAT FIND SCROLLBAR WIDTH ===

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const ScrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return ScrollBarWidth;
};

// === TABS ===

const tabs = document.querySelectorAll('.tabs');

function tabCLick(wrapper) {
    wrapper.forEach(function (box) {
        const tabsItem = box.querySelectorAll('.tabs-triggers__item');
        const itemContent = box.querySelectorAll('.tabs-content__item');

        tabsItem.forEach(onTabClick);

        function onTabClick(item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                const id = e.target.getAttribute('href').replace('#', '');

                tabsItem.forEach(
                    (child) => child.classList.remove('tabs-triggers__item--active')
                );
                itemContent.forEach(
                    (child) => child.classList.remove('tabs-content__item--active')
                );

                item.classList.add('tabs-triggers__item--active');
                document.getElementById(id).classList.add('tabs-content__item--active');

            });
        };

        tabsItem[0].click();
    });
};

tabCLick(tabs);

// === MIXTUP FILTER ==

if (document.querySelector('.filter')) {
    let mixer = mixitup('.filter');
}

const filterItem = document.querySelectorAll('.filter-item');

filterItem.forEach(function (item) {
    item.addEventListener('click', function () {
        filterItem.forEach(
            (child) => child.classList.remove('filter-item--active')
        );
        item.classList.add('filter-item--active');
    });
    filterItem[0].click();
});


// === SLIDER ===
// === REVIEWS SLIDER ===
const mySwiper = new Swiper('.reviews-slider', {
    slideClass: 'reviews-item',
    wrapperClass: 'reviews-items',

    slidesPerView: 'auto',
    centeredSlides: true,
    simulateTouch: false,
    spaceBetween: 160,

    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    speed: 1500,

    breakpoints: {
        1000: {
            simulateTouch: true
        }
    }
});

// === SHOWROOM SLIDER ===
const swiperSlider = new Swiper(".showroom-container", {
    slideActiveClass: 'showroom-item--active',

    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 58,
    slideToClickedSlide: true,

    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            speed: 1100,
        },
        1000: {
            slidesPerView: 3,
            speed: 1500,
        },
    }
});

// === FUNCTION FOR MOBILE SLIDERs ===

if (document.querySelector('[data-mobile]')) {
    function mobileSlider(container, width) {
        const startSlider = document.querySelector(container);

        let swiperStart;

        function mobileSwiper() {
            if (window.innerWidth <= width && startSlider.dataset.mobile == 'false') {
                swiperStart = new Swiper(startSlider, {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 50,
                    pagination: {
                        el: '.slider-pagination',
                        clickable: true,
                    },
                    speed: 1000,
                });
                startSlider.dataset.mobile = 'true';
            };
            if (window.innerWidth > width) {
                startSlider.dataset.mobile = 'false';
                if (startSlider.classList.contains('swiper-container-initialized')) {
                    swiperStart.destroy();
                }
            };
        }

        mobileSwiper();

        window.addEventListener('resize', () => {
            mobileSwiper();
        })
    }

    // === EXHIBITION SLIDER ===

    mobileSlider('.exhibition-slider', 900);

    // === DESIGNER SLIDER ===

    mobileSlider('.designer-content', 1060);
};

const thumbsSlider = new Swiper(".thumbs-slider", {
    slidesPerView: 6,
    spaceBetween: 16,
});

const mainSlider = new Swiper(".main-slider", {
    slidesPerView: 1,
    speed: 1100,
    effect: 'fade',

    thumbs: {
        swiper: thumbsSlider,
    },

    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});

// === ANCHORS ===

// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (event) {
//     event.preventDefault();
    
//     const blockID = anchor.getAttribute('href');
    
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// };