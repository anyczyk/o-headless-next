import {closeModal, trapTabKey} from '../../../assets/js/functions';

document.addEventListener('DOMContentLoaded', () => {
  console.log(".m-005-tiles-with-slider-modals-v1 loaded");
  let previouslyFocusedElement = null;

  document.addEventListener("click", e => {
    const eTarget = e.target;
    const buttonTile = eTarget.closest(".ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title[role=button]");
    if(buttonTile) {
      const mainModule = eTarget.closest(".ho-module-m-005-tiles-with-slider-modals-v1");
      const bgColor = mainModule.dataset.bgColor;
      const textColor = mainModule.dataset.textColor;

      previouslyFocusedElement = document.activeElement;
      const dataAutoplay = buttonTile.dataset.autoplay;
      const dataId = parseInt(buttonTile.dataset.index);

      // create modal:
      const modal = document.createElement("div");
      modal.className = "ho-modal ho-module-m-005-tiles-with-slider-modals-v1-modal fade-in";
      modal.role = "dialog";
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-label", "Tile Modal");

      const btnClose = document.createElement("button");
      btnClose.className = "ho-modal__close";
      btnClose.title = "Close modal";
      btnClose.setAttribute("aria-label", "Close modal");

      const modalContainer = document.createElement("div");
      modalContainer.className = "container pt-3 pb-3";

      // create swiperModule
      const swiperModule = document.createElement("div");
      swiperModule.className = "ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper";
      if(bgColor) {
        swiperModule.style.backgroundColor = bgColor;
      }
      if(textColor) {
        swiperModule.style.color = textColor;
      }

      // create swiperContainer
      const swiperContainer = document.createElement("div");
      swiperContainer.className = "swiper-container ho-swiper-tiles-init";
      swiperContainer.dataset.paginationClickable = "true";
      swiperContainer.dataset.autoplay = dataAutoplay;

      // create swiperWrapper
      const swiperWrapper = document.createElement("div");
      swiperWrapper.className = "swiper-wrapper";

      // create nav swiper
      const swiperBtnPrev = document.createElement("button");
      swiperBtnPrev.className = "swiper-button-prev";
      const swiperBtnNext = document.createElement("button");
      swiperBtnNext.className = "swiper-button-next";
      const swiperPagination = document.createElement("div");
      swiperPagination.className = "swiper-pagination";


      // create Array with items
      const mainWrapItems = eTarget.closest(".ho-module-m-005-tiles-with-slider-modals-v1__list");
      const arrayItems = mainWrapItems.querySelectorAll(".ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title");

      arrayItems.forEach((item, index) => {
        const dataImage = item.dataset.image;
        const dataImageAlt = item.dataset.imageAlt;
        const dataImageSrcset = item.dataset.imageSrcset
        const dataModalTitle = item.dataset.modalTitle;
        const dataModalSubTitle = item.dataset.modalSubTitle;
        const dataModalDescription = item.dataset.modalDescription;
        const dataTag = item.dataset.tag;

        // create swiperSlide
        const swiperSlide = document.createElement("div");
        swiperSlide.className = `swiper-slide id-${index} d-block d-lg-flex align-items-center pb-5 pt-3 ps-3 pe-3 p-lg-5 gap-5`;

        swiperSlide.innerHTML = `
          ${dataImage ? `<div class="ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper-image mb-3 mb-lg-0"><img src="${dataImage}" srcset="${dataImageSrcset}" alt="${dataImageAlt ? dataImageAlt : 'Image'}"/></div>` : ""}
          <div class="ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper-text">
              ${dataModalTitle ? `<${dataTag} class="h4">${dataModalTitle}</${dataTag}>` : ""}
              ${dataModalSubTitle ? `<p>${dataModalSubTitle}</p>` : ""}
              ${dataModalDescription ? `<div>${dataModalDescription}</div>` : ""}
          </div>
        `;

        swiperWrapper.appendChild(swiperSlide);
      });

      swiperContainer.appendChild(swiperWrapper);
      swiperContainer.appendChild(swiperBtnPrev);
      swiperContainer.appendChild(swiperBtnNext);
      swiperContainer.appendChild(swiperPagination);

      swiperModule.appendChild(swiperContainer);

      modalContainer.appendChild(swiperModule);
      modalContainer.appendChild(btnClose);

      modal.appendChild(modalContainer);

      document.body.appendChild(modal);

      const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        autoplay: dataAutoplay ? { delay: 5000 } : false,
        navigation: {
          nextEl: swiperContainer.querySelector('.swiper-button-next'),
          prevEl: swiperContainer.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: swiperContainer.querySelector('.swiper-pagination'),
          clickable: true,
        },
        initialSlide: dataId
      });

      // Zapisujemy referencję do funkcji obsługującej klawisze
      const keydownHandler = (e) => {
        trapTabKey(e, modal, previouslyFocusedElement, keydownHandler);
      };
      document.addEventListener('keydown', keydownHandler);

      // Przycisk zamykający
      btnClose.focus();
      btnClose.addEventListener('click', () => closeModal(modal, previouslyFocusedElement, keydownHandler));

      // Zamknięcie po kliknięciu w tło
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal(modal, previouslyFocusedElement, keydownHandler);
        }
      });
    }
  });
});
