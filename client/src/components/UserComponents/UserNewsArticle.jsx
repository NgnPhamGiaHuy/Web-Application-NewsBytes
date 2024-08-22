import Link from "next/link";

import { formatLongDate } from "@/utils";
import { ImageIcon, NewsArticleControl } from "@/components";

const UserNewsArticle = ({ id, image_url, firstname, lastname, newCreatedAt }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div>
                        <div className="flex items-baseline">
                            <Link href={`/user/${id}`}>
                                <ImageIcon src={image_url} width={48} height={48}/>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-4">
                        <div className="flex">
                            <div className="flex-grow flex-shrink basis-0">
                                <div className="flex flex-nowrap items-center">
                                    <div className="flex items-center">
                                        <p className="text-[16px] text-black font-normal leading-6">
                                            <Link href={`/user/${id}`}>
                                                { firstname + " " + lastname }
                                            </Link>
                                        </p>
                                    </div>
                                    <span className="mx-2 text-[14px] text-zinc-500 font-normal inline leading-5">·</span>
                                    <p className="text-[16px] font-normal leading-6">
                                        <button className="text-lime-600 fill-lime-600 transition-all hover:text-lime-700 hover:fill-lime-700">
                                            Follow
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="block flex-grow-0 flex-shrink-0 basis-auto">
                            <div className="flex flex-wrap items-start">
                                <span className="text-[14px] text-zinc-700 font-normal leading-5">
                                    <div className="flex flex-grow flex-shrink-0 basis-auto">
                                        <span>4 min read</span>
                                        <div className="px-2">
                                            <span>·</span>
                                        </div>
                                        <span>{formatLongDate(newCreatedAt)}</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsArticleControl/>
        </div>
    );
};

export default UserNewsArticle;