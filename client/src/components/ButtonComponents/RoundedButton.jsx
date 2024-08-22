"use client"

import { useState } from "react";

const RoundedButton = ({ marginBottom = 10, marginRight = 8, paddingTop = 8, paddingBottom = 8, paddingRight = 16, paddingLeft = 16, color = "black", borderStyle = "solid", borderWidth = 1, borderColor = "rgb(244, 244, 245)", borderRadius = 100, hoverBorderColor = "none", backgroundColor = "rgb(244, 244, 245)", hoverBackgroundColor = "rgb(244, 244, 245)", title = "", onClick = null }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const currentBorderColor = isHovered ? hoverBorderColor : borderColor;
    const currentBackgroundColor = isHovered ? hoverBackgroundColor : backgroundColor;

    return (
        <div style={{ marginBottom: `${marginBottom}px`, marginRight: `${marginRight}px` }} className="flex">
            <div onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ borderRadius: `${borderRadius}px`, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`, paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px`, color: color, borderColor: currentBorderColor, borderStyle: borderStyle, borderWidth: `${borderWidth}px`, backgroundColor: currentBackgroundColor }} className="text-[14px] text-black whitespace-nowrap font-normal relative leading-5 transition-all duration-150 cursor-pointer">
                { title }
            </div>
        </div>
    );
};

export default RoundedButton;