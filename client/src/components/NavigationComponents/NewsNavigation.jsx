"use client"

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { useHorizontalScroll } from "@/hooks";
import { NavigationButton, NewsNavigationItem } from "@/components";

const NewsNavigation = () => {
    const buttonBackBackground = "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgb(255, 255, 255) 75%)";
    const buttonForwardBackground = "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgb(255, 255, 255) 75%)";
    const newsTypeList = ["Docker", "Javascript", "Web3", "Quantum Computing", "Artificial Intelligence", "Machine Learning", "Blockchain", "Cybersecurity", "Data Science", "Cloud Computing", "DevOps", "Full Stack Development", "Frontend Development", "Backend Development", "Mobile Development", "Game Development", "UI/UX Design", "Product Management", "Agile Methodology", "Scrum"];

    const { scroll, scrollContainerRef, showBackButton, showForwardButton } = useHorizontalScroll();

    return (
        <div>
            <div className="pt-6 top-[57px] sticky bg-white z-[499]">
                <div className="flex justify-center">
                    <div className="max-w-[680px] w-full mx-6">
                        <div className="h-4"></div>
                        <div className="h-[39px] block border-b border-solid border-zinc-200 overflow-hidden relative">
                            <div ref={scrollContainerRef} className="flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar">
                                <div className="flex">
                                    <div className="min-w-max mr-6 pb-4 leading-5">
                                        <Link href="">
                                            <span className="text-sm text-[#6B6B6B] font-normal">
                                                <AiOutlinePlus size={20} />
                                            </span>
                                        </Link>
                                    </div>
                                    <NewsNavigationItem active={true} label="For you"/>
                                    <NewsNavigationItem label="Following"/>
                                    { newsTypeList?.map((value, index) => (
                                        <NewsNavigationItem key={index} label={value} />
                                    )) }
                                </div>
                                { showBackButton && (
                                    <NavigationButton bottomPosition={16} leftPosition={0} icon={<IoChevronBack size={16} />} opacityBackgroundColor={buttonBackBackground} onClick={() => scroll("left")} />
                                ) }
                                { showForwardButton && (
                                    <NavigationButton bottomPosition={16} rightPosition={0} icon={<IoChevronForward size={16} />} opacityBackgroundColor={buttonForwardBackground} onClick={() => scroll("right")} />
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsNavigation;