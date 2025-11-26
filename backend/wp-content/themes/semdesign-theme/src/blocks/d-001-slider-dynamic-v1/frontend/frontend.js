document.addEventListener('DOMContentLoaded', () => {
    console.log(".swiper-dynamic loaded");
    const swiperContainers = document.querySelectorAll('.swiper-dynamic');

    swiperContainers.forEach((container) => {
        const clickable = container.dataset.paginationClickable === 'true';
        const autoPlay = container.dataset.autoplay === 'true';
        new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            autoplay: autoPlay ? { delay: 5000 } : false,
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: container.querySelector('.swiper-pagination'),
                clickable: clickable,
            },
        });
    });
});