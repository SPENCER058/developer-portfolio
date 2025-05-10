"use client";

import { useEffect, useState } from "react";
import { LuArrowUpFromDot } from "react-icons/lu";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility(); // Check once on mount
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
                fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg
                bg-[var(--border-color)] text-white
                transition-all duration-700 ease-out
                transform ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4 pointer-events-none"}
                hover:bg-[var(--tertiary)] hover:scale-110
                will-change-transform
            `}
        >
            <LuArrowUpFromDot size={24} />
        </button>
    );
}
