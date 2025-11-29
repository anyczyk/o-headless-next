import { createContext, useState, useEffect, useRef } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const [activeScrollDown, setaAtiveScrollDown ] = useState(false);
    const lastState = useRef("top"); // zapamiętujemy poprzedni stan

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 30 && lastState.current !== "scroll") {
                console.log("scroll");
                lastState.current = "scroll";
                setaAtiveScrollDown(true);
            }

            if (window.scrollY < 30 && lastState.current !== "top") {
                console.log("top");
                lastState.current = "top";
                setaAtiveScrollDown(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, activeScrollDown, mobileMenuActive, setMobileMenuActive }}>
            {children}
        </ThemeContext.Provider>
    );
};
