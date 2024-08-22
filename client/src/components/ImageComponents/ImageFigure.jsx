"use client";

import Image from "next/image";
import { useState } from "react";

import { useZoomAnimation } from "@/hooks";

const ImageFigure = ({ figureStyle, imageSrc }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const { showZoomedImage } = useZoomAnimation(isZoomed);

    const toggleZoom = () => {
        setIsZoomed(prev => !prev);
    };

    return (
        <figure style={{ ...figureStyle }} className={`mx-auto mt-10 clear-both ${isZoomed ? "relative z-50" : ""}`}>
            <div role="button" className="w-full cursor-zoom-in relative" onClick={toggleZoom}>
                <div className="max-w-[1200px] mx-auto">
                    <picture>
                        <div className="min-h-[384px] w-full h-full flex items-center rounded-md overflow-hidden relative">
                            <Image src={imageSrc} alt="Avatar image" fill={true} sizes="(max-width: 768px) 100vw" className="max-w-full w-full h-auto align-middle bg-white" />
                        </div>
                    </picture>
                </div>
            </div>
            { showZoomedImage && (
                <div className={`fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center cursor-zoom-out z-50 transition-opacity duration-1000 ease-in-out ${isZoomed ? "opacity-100 animate-zoomIn" : "opacity-0 animate-zoomOut"}`} onClick={toggleZoom}>
                    <picture className="w-full h-full">
                        <div className="w-full h-full flex justify-center items-center relative">
                            <div className={`w-[70%] h-[70%] flex items-center justify-center rounded-md overflow-hidden relative transition-transform duration-1000 ease-in-out ${isZoomed ? "scale-105" : "scale-95"}`}>
                                <Image src={imageSrc} alt="Zoomed Avatar image" fill={true} className="max-w-full w-full h-auto align-middle bg-white" />
                            </div>
                        </div>
                    </picture>
                </div>
            ) }
        </figure>
    );
};

export default ImageFigure;