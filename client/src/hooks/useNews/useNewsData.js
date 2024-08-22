"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { useScrollHandler } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/news/";

const useNewsData = (userId = null) => {
    const router = useRouter();
    const newsRef = useRef(null);
    const hasInitialFetchCompleted = useRef(false);

    const [newsProps, setNewsProps] = useState({
        currentPage: 1,
        data: [],
        firstPageUrl: "",
        lastPage: 1,
        lastPageUrl: "",
        links: [],
        nextPageUrl: "",
        path: "",
        perPage: 10,
        prevPageUrl: "",
        to: 10,
        total: 0
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (page = 1) => {
        setError(null);
        setIsLoading(true);

        const url = userId ? `${API_URL}user/?userId=${userId}&page=${page}` : `${API_URL}?page=${page}`;

        try {
            const response = await fetchDataWithAccessToken(url, "GET");

            // if (!response || response.error) {
            //     router.push("/auth");
            //     return;
            // }

            if (response && typeof response === 'object') {
                setNewsProps(prevProps => ({
                    ...prevProps,
                    currentPage: response.current_page,
                    data: page === 1 ? response.data : [...prevProps.data, ...response.data],
                    firstPageUrl: response.first_page_url,
                    lastPage: response.last_page,
                    lastPageUrl: response.last_page_url,
                    links: response.links,
                    nextPageUrl: response.next_page_url,
                    path: response.path,
                    perPage: response.per_page,
                    prevPageUrl: response.prev_page_url,
                    to: response.to,
                    total: response.total
                }));
            } else {
                console.error("Response data is not in the expected format");
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!hasInitialFetchCompleted.current) {
            fetchData();
            hasInitialFetchCompleted.current = true;
        }
    }, []);

    useScrollHandler(() => {
        if (newsRef.current && (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 && !isLoading && newsProps.nextPageUrl) {
            const nextPage = newsProps.currentPage + 1;
            fetchData(nextPage);
        }
    }, [isLoading, newsProps.nextPageUrl]);

    return { newsProps, setNewsProps, newsRef, isLoading, error };
};

export default useNewsData;
