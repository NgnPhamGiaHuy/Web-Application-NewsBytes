"use client"

import { useState, useEffect } from "react";

const useZoomAnimation = (isZoomed) => {
    const [showZoomedImage, setShowZoomedImage] = useState(false);
    const [animationState, setAnimationState] = useState("idle");

    useEffect(() => {
        if (isZoomed) {
            setAnimationState("zoomingOut");
            const timer = setTimeout(() => {
                setAnimationState("zoomedOut");
                setShowZoomedImage(true);
            }, 0);
            return () => clearTimeout(timer);
        } else {
            setAnimationState("zoomingIn");
            const timer = setTimeout(() => {
                setAnimationState("idle");
                setShowZoomedImage(false);
            }, 350);
            return () => clearTimeout(timer);
        }
    }, [isZoomed]);

    return { showZoomedImage, animationState };
};

export default useZoomAnimation;