import React, {useContext, forwardRef} from "react";
import { ThemeContext } from "@/context/ThemeContext";
export const Hamburger = forwardRef((props,ref) => {
    const { mobileMenuActive, setMobileMenuActive } = useContext(ThemeContext);
    return (
        <button
            ref={ref}
            className={`xl:hidden my-auto relative w-8 h-8 ml-auto flex items-center justify-center cursor-pointer
    before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-white before:transition-transform before:duration-300
    after:content-[''] after:absolute after:w-8 after:h-[2px] after:bg-white after:transition-transform after:duration-300
    ${mobileMenuActive
                ? 'before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:-rotate-45 after:top-1/2 after:-translate-y-1/2'
                : 'before:-translate-y-2 after:translate-y-2'
            }
  `}
            onClick={() => setMobileMenuActive(prev => !prev)}
        >
          <span
              className={`block w-8 h-[2px] bg-white transition-opacity duration-300
      ${mobileMenuActive ? 'opacity-0' : 'opacity-100'}
      overflow-hidden text-[1px] text-transparent
    `}
          >
    Menu
        </span>
        </button>
    );
});
