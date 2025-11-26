document.addEventListener('DOMContentLoaded', () => {
    console.log(".swiper-v1 loaded");
    const swiperContainers = document.querySelectorAll('.swiper-v1');

    swiperContainers.forEach((container) => {
        const clickable = container.dataset.paginationClickable === 'true';
        const autoPlay = container.dataset.autoplay === 'true';
        const loop = container.dataset.loop === 'true';
        const autoHeight = container.dataset.autoHeight === 'true';
        const dots = container.dataset.dots === 'true';
        const arrows = container.dataset.arrows === 'true';
        const effect = container.dataset.effectFade;
        const countSlides = container.querySelectorAll(".swiper-slide");

        console.log("effect: ", effect);

        let config = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: loop,
            effect: effect,
            autoHeight: autoHeight,
            touchStartPreventDefault: countSlides.length > 1,
            autoplay: autoPlay ? { delay: 5000 } : false,
        };

        if (arrows) {
            config.navigation = {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            };
        }

        if (dots) {
            config.pagination = {
                el: container.querySelector('.swiper-pagination'),
                clickable: clickable,
            };
        }

        new Swiper(container, config);
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     console.log(".swiper-v1 loaded");
//     const swiperContainers = document.querySelectorAll('.swiper-v1');
//
//     swiperContainers.forEach((container) => {
//         const clickable = container.dataset.paginationClickable === 'true';
//         const autoPlay = container.dataset.autoplay === 'true';
//         const dots = container.dataset.dots === 'true';
//         const arrows = container.dataset.arrows === 'true';
//         const countSlides = container.querySelectorAll(".swiper-slide");
//         // console.log("countSlides: ", countSlides.length);
//         new Swiper(container, {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//             touchStartPreventDefault: countSlides.length > 1,
//             autoplay: autoPlay ? { delay: 5000 } : false,
//             navigation: {
//                 nextEl: container.querySelector('.swiper-button-next'),
//                 prevEl: container.querySelector('.swiper-button-prev'),
//             },
//             pagination: {
//                 el: container.querySelector('.swiper-pagination'),
//                 clickable: clickable,
//             },
//         });
//     });
// });