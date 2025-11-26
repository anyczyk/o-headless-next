export const debounce = (func, wait, immediate = false) => {
    let timeout;
    return function(...args) {
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};

export const parseAttributes = (attrString) => {
    const regex = /(\S+)=["']([^"']+)["']/g;
    const attributes = {};
    let match;
    while ((match = regex.exec(attrString)) !== null) {
        attributes[match[1]] = match[2];
    }
    return attributes;
};
export const closeModal = (activeModal, previouslyFocusedElement, keydownHandler) => {
    if (keydownHandler) {
        document.removeEventListener('keydown', keydownHandler);
    }

    const swiperInit = activeModal.querySelector(".swiper");
    if (swiperInit && swiperInit.swiper) {
        swiperInit.swiper.destroy(true, true);
    }

    activeModal.remove();
    activeModal = null;

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
        previouslyFocusedElement = null;
    }
};
export const trapTabKey = (e, activeModal, previouslyFocusedElement, keydownHandler) => {
    if (!activeModal) return;

    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableElements = activeModal.querySelectorAll(focusableSelectors);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    if (e.key === 'Escape') {
        closeModal(activeModal, previouslyFocusedElement, keydownHandler);
    }
};
