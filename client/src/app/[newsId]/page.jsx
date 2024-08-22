"use client"

import useSWR from "swr";

import { useWithAuth } from "@/hooks";
import { fetcherWithAccessToken } from "@/utils";
import { Header, LoadingPageComponent, NewsArticle } from "@/components";

const NewsPage = ({ params }) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news/${params.newsId}`;

    const { data, isLoading } = useSWR(API_URL, fetcherWithAccessToken);

    if (isLoading) {
        return <LoadingPageComponent/>
    }

    return (
        <div>
            <Header />
            <div>
                <div className="mb-[68px]">
                    <NewsArticle {...data} />
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(NewsPage);