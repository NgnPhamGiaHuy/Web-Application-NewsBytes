import { TbBookmarkPlus } from "react-icons/tb";
import { GoPlay, GoShare } from "react-icons/go";
import { PiHandsClappingThin } from "react-icons/pi";
import { HiMiniEllipsisHorizontal, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

import { IconActionButton } from "@/components";

const NewsArticleControl = () => {
    return (
        <div>
            <div className="mt-8 px-2 py-[3px] flex justify-between border-b border-t border-solid border-zinc-100">
                <div className="flex items-center text-zinc-500 font-normal break-words">
                    <div className="w-[72px]">
                        <div className="flex flex-row items-center">
                            <div className="mr-1 flex items-center relative user-select-none">
                                <button className="text-zinc-500 fill-zinc-500 cursor-pointer">
                                    <PiHandsClappingThin size={24} style={{ rotate: "-15deg" }} />
                                </button>
                            </div>
                            <div>
                                <p className="text-[13px] text-zinc-500 font-normal leading-5">
                                    <button>89</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="my-1 flex items-center text-zinc-500 fill-zinc-500 bg-transparent border-none cursor-pointer opacity-100">
                            <HiOutlineChatBubbleOvalLeft size={24} style={{ transform: "scaleX(-1)", strokeWidth: "1px" }}/>
                            <p className="ml-1 text-[13px] text-zinc-500 font-normal leading-5">
                                3
                            </p>
                        </button>
                    </div>
                </div>
                <div className="flex items-center overflow-x-scroll no-scrollbar">
                    <IconActionButton icon={<TbBookmarkPlus size={24} />} buttonStyle={{ marginRight: "24px", padding: "8px 2px", zIndex: 0 }} />
                    <IconActionButton icon={<GoPlay size={24} />} buttonStyle={{ marginRight: "24px", padding: "8px 2px", zIndex: 0 }} />
                    <IconActionButton icon={<GoShare size={24} />} buttonStyle={{ marginRight: "24px", padding: "8px 2px", zIndex: 0 }} />
                    <IconActionButton icon={<HiMiniEllipsisHorizontal size={24} />} buttonStyle={{ padding: "8px 2px", zIndex: 0 }} />
                </div>
            </div>
        </div>
    );
};

export default NewsArticleControl;