import {useEffect, useRef, useState} from "react";

export const useSwipe = (ref, direction) => {
    const startX = useRef(0);
    const [result, setResult] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setResult(false);

        const handleMouseDown = (e) => {
            startX.current = e.clientX;
        };

        const handleMouseUp = (e) => {
            const diff = e.clientX - startX.current;
            // console.log('diff:', diff);
            if(direction === 'left-right' && diff > 50) {
                console.log("Swipe to right ✅ (mouse)");
                setResult(true);
            } else if(direction === 'right-left' && diff < -50) {
                console.log("Swipe to left ✅ (mouse)");
                setResult(true);
            }
        };

        const handleTouchStart = (e) => {
            startX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const diff = e.changedTouches[0].clientX - startX.current;
            // console.log('diff:', diff);
            if(direction === 'left-right' && diff > 50) {
                console.log("Swipe to right ✅ (touch)");
                setResult(true);
            } else if(direction === 'right-left' && diff < -50) {
                console.log("Swipe to left ✅ (touch)");
                setResult(true);
            }
        };

        el.addEventListener("mousedown", handleMouseDown);
        el.addEventListener("mouseup", handleMouseUp);
        el.addEventListener("touchstart", handleTouchStart);
        el.addEventListener("touchend", handleTouchEnd);

        return () => {
            el.removeEventListener("mousedown", handleMouseDown);
            el.removeEventListener("mouseup", handleMouseUp);
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchend", handleTouchEnd);
        };
    });

    return result;

};
