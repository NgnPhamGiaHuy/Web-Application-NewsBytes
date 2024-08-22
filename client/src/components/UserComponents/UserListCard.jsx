import Link from "next/link";

import { ImageIcon } from "@/components";

const UserListCard = ({ id, name, news_items }) => {
    const renderImageList = (news_items) => {
        if (news_items?.length === 1) {
            return (
                <div className="w-full border-r-2 border-solid border-white rounded-[4px] overflow-hidden relative">
                    <ImageIcon src={news_items[0]?.image_url} width="100%" height={48} borderRadius={2} />
                </div>
            );
        }

        if (news_items?.length === 2) {
            return (
                <>
                    <div className="w-1/2 border-r-2 border-solid border-white rounded-[4px] overflow-hidden relative z-[2]">
                        <ImageIcon src={news_items[0]?.image_url} width="100%" height={48} borderRadius={2} />
                    </div>
                    <div className="-ml-6 border-r-2 border-solid border-white rounded-[4px] overflow-hidden relative z-[1]" style={{ width: '48px' }}>
                        <ImageIcon src={news_items[1]?.image_url} width={48} height={48} borderRadius={2} />
                    </div>
                </>
            );
        }

        return news_items?.slice(0, 3)?.map((value, index) => {
            let marginLeftClass = "";
            if (index === 1) {
                marginLeftClass = "-ml-6";
            } else if (index === 2) {
                marginLeftClass = "-ml-9";
            }

            return (
                <div key={index} style={{ zIndex: 3 - index }} className={`${marginLeftClass} border-r-2 border-solid border-white rounded-[4px] overflow-hidden relative`}>
                    <ImageIcon src={value.image_url} width={48} height={48} borderRadius={2} />
                </div>
            );
        });
    };

    return (
        <div>
            <Link href={`/list/${id}`} className="mb-4 flex items-start">
                <div className="w-[93px] flex flex-grow-0 flex-shrink-0 basis-auto overflow-hidden relative">
                    { renderImageList(news_items) }
                </div>
                <div className="ml-4">
                    { name && (
                        <h2 className="max-h-10 text-[16px] text-black font-medium line-clamp-2 overflow-hidden relative leading-5">
                            { name }
                        </h2>
                    ) }
                    <div className="flex text-[13px] text-zinc-500 font-normal leading-5">
                        { news_items?.length } stories
                        <span className="mx-2 text-[14px] text-zinc-500 font-normal leading-5">·</span>
                        2 saves
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default UserListCard;
