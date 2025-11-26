import {closeModal, trapTabKey, debounce} from './functions';
import {setCookie, hasCookie} from './cookies';
import AOS from 'aos';

AOS.init();
console.log("Main js");

// Scroll for section in homepage
document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector(".ho-bar__bottom ")) {
        return;
    }

    const loadHash = window.location.hash;
    const menuLinks = document.querySelectorAll('.ho-bar__main-navigation-list a[href*="#"]');
    const sections = document.querySelectorAll('section');

    const setActiveLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            if (section.hasAttribute('id') && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        if(currentSection) {
            menuLinks.forEach(link => {
                const menuItem = link.closest(".menu-item");
                if(!menuItem) {
                    return;
                }
                menuItem.classList.remove('current-menu-item');
                const linkHash = new URL(link.href, window.location.href).hash;
                if (linkHash === `#${currentSection}`) {
                    menuItem.classList.add('current-menu-item');
                    history.replaceState(null, null, window.location.pathname + window.location.search + `#${currentSection}`);
                }
            });
        }
    };

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    window.addEventListener('load', () => {
        if (!loadHash) {
            return;
        }

        const targetId = loadHash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu in header
document.addEventListener("DOMContentLoaded", () => {
    const bar = document.querySelector('.ho-bar');
    const hamburger = bar.querySelector('.ho-bar__hamburger');
    const navigation = document.querySelector('.ho-bar__main-navigation');
    const body = document.body;

    const scrollingBar = () => {
        const topDocument = body.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;

        if (scrollY >= topDocument + 100) {
            body.classList.add("ho-mode-scrolling");
        } else {
            body.classList.remove("ho-mode-scrolling");
        }
    };

    window.addEventListener("scroll", scrollingBar);
    scrollingBar();

    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    const minSwipeDistance = 50;
    let pointerId = null;
    const openMenu = () => {
        body.classList.add('ho-mobile-nav-active');
        navigation.querySelectorAll("a").forEach(item => item.setAttribute("tabindex","0"));
    };

    const closeMenu = () => {
        body.classList.remove('ho-mobile-nav-active');
        navigation.querySelectorAll("a").forEach(item => item.setAttribute("tabindex","-1"));
    };

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        if(body.classList.contains('ho-mobile-nav-active')) {
            closeMenu();
        } else {
            openMenu();
        }
        // body.classList.toggle('ho-mobile-nav-active');
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && body.classList.contains('ho-mobile-nav-active')) {
            closeMenu();
        }
    });

    const tabindexNavigation = () => {
        console.log("translate: ", window.getComputedStyle( navigation ).translate);
      if(window.getComputedStyle( navigation ).translate === "0px" || window.getComputedStyle( navigation ).translate === "none") {
          navigation.querySelectorAll("a").forEach(item => item.setAttribute("tabindex","0"));
      } else {
          navigation.querySelectorAll("a").forEach(item => item.setAttribute("tabindex","-1"));
      }
    };
    tabindexNavigation();

    const debouncedTabindexNavigation = debounce(tabindexNavigation, 1000);

    window.addEventListener('resize', debouncedTabindexNavigation);

    document.body.addEventListener('click', e => {
        const eTarget = e.target;
        if ((!eTarget.closest('.ho-bar') && body.classList.contains('ho-mobile-nav-active')) || eTarget.closest('.ho-bar__main-navigation-list a')) {
            closeMenu();
        }
    });


    navigation.querySelector('ul > li:first-child > a').addEventListener("click", e => {
        const hashId = e.target.getAttribute("href").split('#')[1];
        console.log(hashId);
        if(hashId) {
            if(document.querySelector(`#${hashId}`)) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    });

    const handlePointerDown = (e) => {
        if (e.target.closest('a')) return;

        startX = e.clientX;
        isDragging = true;
        pointerId = e.pointerId;
        navigation.style.transition = 'none';
        navigation.setPointerCapture(e.pointerId);
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
        document.addEventListener('pointercancel', handlePointerCancel);
    };

    const handlePointerMove = (e) => {
        if (!isDragging || e.pointerId !== pointerId) return;
        currentX = e.clientX - startX;
        if(navigation.classList.contains("ho-bar__main-navigation--mobile-menu-slide-left")) {
            if (currentX < 0) {
                navigation.style.translate = `${currentX}px 0`;
            }
        } else {
            if (currentX > 0) {
                navigation.style.translate = `${currentX}px 0`;
            }
        }
    };

    const handlePointerUp = (e) => {
        if (!isDragging || e.pointerId !== pointerId) return;
        isDragging = false;
        navigation.style.transition = 'translate 250ms';

        if(navigation.classList.contains("ho-bar__main-navigation--mobile-menu-slide-left")) {
            if (currentX < -minSwipeDistance) {
                closeMenu();
            } else {
                openMenu();
            }
        } else {
            if (currentX > minSwipeDistance) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        navigation.style.translate = '';
        navigation.releasePointerCapture(pointerId);
        currentX = 0;
        pointerId = null;
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
        document.removeEventListener('pointercancel', handlePointerCancel);
    };
    const handlePointerCancel = (e) => {
        if (!isDragging || e.pointerId !== pointerId) return;
        isDragging = false;
        navigation.style.transition = 'translate 250ms';
        navigation.style.translate = '';
        navigation.releasePointerCapture(pointerId);
        currentX = 0;
        pointerId = null;

        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
        document.removeEventListener('pointercancel', handlePointerCancel);
    };
    navigation.addEventListener('pointerdown', handlePointerDown);
});


// modal
document.addEventListener("DOMContentLoaded", () => {
    let previouslyFocusedElement = null;

    function openModal(gallery, initialIndex) {
        previouslyFocusedElement = document.activeElement;

        const body = document.body;
        const newElementModal = document.createElement("div");
        newElementModal.className = "ho-modal ho-swiper-gallery-modal";
        newElementModal.setAttribute("role", "dialog");
        newElementModal.setAttribute("aria-modal", "true");
        newElementModal.setAttribute("aria-label", "Gallery Modal");

        const newElementContainer = document.createElement("div");
        newElementContainer.classList.add("container");

        const newElementSwiper = document.createElement("div");
        newElementSwiper.classList.add("swiper", "ho-swiper-gallery-init");

        const newElementSwiperWrapper = document.createElement("div");
        newElementSwiperWrapper.classList.add("swiper-wrapper");

        const newElementSwiperButtonPrev = document.createElement("button");
        newElementSwiperButtonPrev.classList.add("swiper-button-prev");
        newElementSwiperButtonPrev.setAttribute("aria-label", "Previous slide");

        const newElementSwiperButtonNext = document.createElement("button");
        newElementSwiperButtonNext.classList.add("swiper-button-next");
        newElementSwiperButtonNext.setAttribute("aria-label", "Next slide");

        const newElementModalButtonClose = document.createElement("button");
        newElementModalButtonClose.classList.add("ho-modal__close");
        newElementModalButtonClose.setAttribute("aria-label", "Close modal");
        newElementModalButtonClose.setAttribute("title", "Close modal");

        const newElementSwiperPagination = document.createElement("div");
        newElementSwiperPagination.classList.add("swiper-pagination");

        const images = gallery.querySelectorAll("a");
        images.forEach(image => {
            const url = image.getAttribute("href");
            const alt = image.querySelector("img").getAttribute("alt");
            const newElementSwiperSlide = document.createElement("div");
            newElementSwiperSlide.classList.add("swiper-slide");
            const newElementImg = document.createElement("img");
            newElementImg.setAttribute("src", url);
            newElementImg.setAttribute("alt", alt);
            newElementSwiperSlide.append(newElementImg);
            newElementSwiperWrapper.append(newElementSwiperSlide);
        });

        newElementSwiper.append(newElementSwiperWrapper);
        newElementSwiper.append(newElementSwiperButtonPrev);
        newElementSwiper.append(newElementSwiperButtonNext);
        newElementSwiper.append(newElementSwiperPagination);

        newElementContainer.append(newElementSwiper);
        newElementContainer.append(newElementModalButtonClose);
        newElementModal.append(newElementContainer);
        body.append(newElementModal);

        const swiperInstance = new Swiper(newElementSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: initialIndex,
            autoHeight: true,
            navigation: {
                nextEl: newElementSwiper.querySelector('.swiper-button-next'),
                prevEl: newElementSwiper.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            }
        });
        const keydownHandler = (e) => {
            trapTabKey(e, newElementModal, previouslyFocusedElement, keydownHandler);
        };
        document.addEventListener('keydown', keydownHandler);
        newElementModalButtonClose.focus();
        newElementModalButtonClose.addEventListener('click', () => closeModal(newElementModal, previouslyFocusedElement, keydownHandler));
        newElementModal.addEventListener('click', (e) => {
            if (e.target === newElementModal) {
                closeModal(newElementModal, previouslyFocusedElement, keydownHandler);
            }
        });
    }

    document.addEventListener("click", e => {
        const eTarget = e.target;
        const gallery = eTarget.closest(".ho-swiper-gallery");
        if (gallery) {
            e.preventDefault();

            const wpBlockImage = eTarget.closest('.wp-block-image');
            let index = 0;

            if (wpBlockImage) {
                const wpBlockImages = Array.from(gallery.querySelectorAll('.wp-block-image'));
                index = wpBlockImages.indexOf(wpBlockImage);
            }

            openModal(gallery, index);
        }
    });
});

// Lazy loading for background
document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll(".lazy-background");

    const lazyLoad = () => {
        lazyBackgrounds.forEach((bg) => {
            const rect = bg.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const bgImage = bg.getAttribute("data-bg");
                if (bgImage) {
                    bg.style.backgroundImage = `url('${bgImage}')`;
                    bg.removeAttribute("data-bg");
                }
            }
        });
    };

    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    lazyLoad();
});

// cart refresh

// build/assets/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Przechwytywanie funkcji fetch
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        const response = await originalFetch(...args);

        // Klonujemy odpowiedź, aby móc ją ponownie odczytać
        const clonedResponse = response.clone();
        const data = await clonedResponse.json();

        // Sprawdzenie, czy odpowiedź zawiera sukces
        if (data && data.success) {
            alert('Operacja zakończona sukcesem!');
        }

        return response;
    };

    // Analogicznie dla XMLHttpRequest, jeśli WooCommerce go używa
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        this.addEventListener('load', function() {
            if (this.status >= 200 && this.status < 300) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        alert('Operacja zakończona sukcesem!');
                    }
                } catch (e) {
                    // Niepoprawny JSON lub inny błąd
                    console.error('Błąd parsowania odpowiedzi AJAX:', e);
                }
            }
        });
        originalXHROpen.apply(this, arguments);
    };

    // Inne funkcje mogą być dodane tutaj
});


// Back top top button
document.addEventListener("scroll", function () {
    const btn = document.querySelector(".ho-back-to-top");
    if (window.scrollY > 300) {
        btn.classList.add("ho-back-to-top--show");
    } else {
        btn.classList.remove("ho-back-to-top--show");
    }
});

document.querySelector(".ho-back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Cookies banner
document.addEventListener('DOMContentLoaded', () => {
    const cookiesBanner = document.querySelector(".ho-cookies");
    cookiesBanner.addEventListener("click", e => {
        const eTarget = e.target;
        if(eTarget.classList.contains("ho-btn-cookies-accept") || eTarget.classList.contains("ho-btn-cookies-reject")) {
            if(eTarget.classList.contains("ho-btn-cookies-accept")) {
                setCookie("oSemDesignCookiesBanner", "accept");
            } else {
                setCookie("oSemDesignCookiesBanner", "reject");
            }
            cookiesBanner.classList.add("ho-cookies--hidden");
        }
    });

    if(!hasCookie("oSemDesignCookiesBanner")) {
        cookiesBanner.classList.remove("ho-cookies--hidden");
    }
});
