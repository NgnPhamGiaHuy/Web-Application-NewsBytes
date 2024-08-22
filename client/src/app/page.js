"use client"

import { Aside, Header, Main } from "@/components";
import { useNewsData, useScroll, useWithAuth } from "@/hooks";

const LandingPage = () => {
    const { isScrollingDown } = useScroll();
    const { newsRef, newsProps } = useNewsData();

    return (
        <div>
            <Header isScrollingDown={isScrollingDown} />
            <div className="max-w-[1336px] m-auto">
                <div className="flex flex-row justify-evenly">
                    <Main forwardRef={newsRef} newsProps={newsProps.data} />
                    <Aside isHeaderVisible={!isScrollingDown} />
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(LandingPage);