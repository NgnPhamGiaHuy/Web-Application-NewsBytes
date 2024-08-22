"use client"

import useSWR from "swr";

import { fetcherWithAccessToken } from "@/utils";
import { AsideBox, UserAsideInfo, UserFollowingCard, UserListCard } from "@/components";

const UserAside = ({ isHeaderVisible, userProps }) => {
    const FOLLOWING_API_URL = userProps?.id ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userProps.id}/following` : null;
    const LIST_API_URL = userProps?.id ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userProps.id}/news-lists` : null;

    const { data: userFollowing } = useSWR(FOLLOWING_API_URL, fetcherWithAccessToken, {
        revalidateOnFocus: false
    });

    const { data: userList } = useSWR(LIST_API_URL, fetcherWithAccessToken, {
        revalidateOnFocus: false
    });

    return (
        <div className="max-w-[368px] min-w-[368px] min-h-screen pr-6 pl-clamp-padding border-l border-solid border-zinc-200 bg-white">
            <div className="w-full h-full inline-block relative">
                <div className={`mt-0 sticky transition-all duration-300 ${isHeaderVisible ? "top-[57px]" : "top-[0px]"}`}>
                    <div className={`flex flex-col ${isHeaderVisible ? "min-h-[calc(-57px+100vh)]" : "min-h-[calc(-0px+100vh)]"}`}>
                        <div className="flex-grow flex-shrink-0 basis-auto">
                            <div className="mt-10">
                                { userProps && <UserAsideInfo {...userProps} /> }
                                <div>
                                    { userFollowing && <AsideBox title="Following" titleMarginBottom={16} linkMarginTop={16} linkLabel={`${ userFollowing?.length - 4 > 0 ? `See all (${userFollowing?.length - 4})` : "" }`} list={userFollowing} limit={4} RenderComponent={UserFollowingCard} /> }
                                    { userList && <AsideBox title="Lists" titleMarginBottom={16} linkMarginTop={16} linkLabel="View All" list={userList} limit={3} RenderComponent={UserListCard} /> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAside;
