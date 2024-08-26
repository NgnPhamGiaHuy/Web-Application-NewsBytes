"use client"

import useSWR from "swr";

import { fetcherWithAccessToken } from "@/utils";
import { Header, UserAside, UserMain } from "@/components";
import { useNewsData, useScroll, useWithAuth } from "@/hooks";

const UserAboutPage = ({ params }) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${params.userId}`;

    const { isScrollingDown } = useScroll();

    const { data: userProps } = useSWR(API_URL, fetcherWithAccessToken);
    const { newsRef, newsProps } = useNewsData(params.userId);

    return (
        <div>
            <Header isScrollingDown={isScrollingDown}/>
            <div className="max-w-[1336px] m-auto">
                <div className="flex flex-row justify-evenly">
                    <UserMain forwardRef={newsRef} newsProps={newsProps.data} userProps={userProps}/>
                    <UserAside isHeaderVisible={!isScrollingDown} userProps={userProps}/>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(UserAboutPage);