document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.ho-module-m-006-slider-v2 .swiper-main');

    swiperContainers.forEach((container) => {
        const clickable = container.dataset.paginationClickable === 'true';
        const autoPlay = container.dataset.autoplay === 'true';
        const loop = container.dataset.loop === 'true';
        const delay = container.dataset.delay;
        const autoHeight = container.dataset.autoHeight === 'true';
        const dots = container.dataset.dots === 'true';
        const arrows = container.dataset.arrows === 'true';
        const effect = container.dataset.effectFade;
        const countSlides = container.querySelectorAll(".swiper-slide");

        console.log("delay: ",delay);

        const arrowsHideShow = (slide) => {
            if(container.getAttribute("data-loop") === "false" && container.getAttribute("data-arrows") === "true") {
                if(slide.activeIndex === 0) {
                    container.querySelector(".swiper-button-prev")?.classList.add("d-none");
                } else {
                    container.querySelector(".swiper-button-prev")?.classList.remove("d-none");
                }

                if(slide.activeIndex === container.querySelectorAll(".swiper-slide").length - 1) {
                    container.querySelector(".swiper-button-next")?.classList.add("d-none");
                } else {
                    container.querySelector(".swiper-button-next")?.classList.remove("d-none");
                }
            }
        };

        let config = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: loop,
            effect: effect,
            autoHeight: autoHeight,
            touchStartPreventDefault: countSlides.length > 1,
            autoplay: autoPlay ? { delay: delay } : false,
            preventClicks: false,

            // touchStartPreventDefault: false,
            // preventClicks: false,
            // preventClicksPropagation: false,

            on: {
                slideChangeTransitionEnd: (slide) => {
                    container.querySelector(".ho-module-m-006-slider-v2__wrap-text--show")?.classList.remove("ho-module-m-006-slider-v2__wrap-text--show");
                    container.classList.remove("ho-module-m-006-slider-v2__text-show");
                },
                slideChange: (slide) => {
                    arrowsHideShow(slide);
                },
                init: function (slide) {
                    arrowsHideShow(slide);
                    setTimeout(function () {
                        container.querySelector(".swiper-slide-active .ho-module-m-006-slider-v2__toggle-text")?.click();
                    }, 300);
                }
            },
            hashNavigation: {
                watchState: true,
                // replaceState: true
            }
        };

        if (arrows) {
            // config.navigation = {
            //     nextEl: container.querySelector('.swiper-button-next'),
            //     prevEl: container.querySelector('.swiper-button-prev'),
            // };
        }

        if (dots) {
            config.pagination = {
                el: container.querySelector('.swiper-pagination'),
                clickable: clickable,
            };
        }

        const thatSwiper = new Swiper(container, config);


        container.addEventListener('click', function(event) {
            const eTarget = event.target;
            if(!(eTarget.closest(".ho-module-m-006-slider-v2__toggle-text") || eTarget.closest(".ho-module-m-006-slider-v2__wrap-text > div") || eTarget.closest(".swiper-pagination") )) {
                const rect = this.getBoundingClientRect();
                const clickX = event.clientX - rect.left;
                const containerWidth = rect.width;

                if (clickX < containerWidth / 2) {
                    thatSwiper.slidePrev();
                } else {
                    thatSwiper.slideNext();
                }
            }
        });

    });
    
    document.addEventListener("click", e => {
       const eTarget = e.target;
       if(eTarget.closest(".ho-module-m-006-slider-v2__toggle-text")) {
           eTarget.closest(".ho-module-m-006-slider-v2__toggle-text").parentNode.querySelector(".ho-module-m-006-slider-v2__wrap-text").classList.toggle("ho-module-m-006-slider-v2__wrap-text--show");
           eTarget.closest(".swiper-container").classList.toggle("ho-module-m-006-slider-v2__text-show");
           setTimeout(function () {
               const swiperContainer = eTarget.closest(".swiper-main");
               if (swiperContainer && swiperContainer.swiper) {
                   swiperContainer.swiper.updateAutoHeight();
               }
           }, 200);
       }
    });
});