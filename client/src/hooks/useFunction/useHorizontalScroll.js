"use client"

import { useEffect, useRef, useState } from "react";

const useHorizontalScroll = () => {
    const scrollContainerRef = useRef(null);

    const [showBackButton, setShowBackButton] = useState(false);
    const [showForwardButton, setShowForwardButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const scrollLeft = container.scrollLeft;
                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;

                setShowBackButton(scrollLeft > 0);
                setShowForwardButton(scrollLeft < scrollWidth - clientWidth);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 100;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return { scroll, scrollContainerRef, showBackButton, showForwardButton };
}

export default useHorizontalScroll;