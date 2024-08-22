import Link from "next/link";
import { GoBlocked } from "react-icons/go";
import { MdWavingHand } from "react-icons/md";
import { TbBookmarkPlus } from "react-icons/tb";
import { IoChatbubble, IoEllipsisHorizontal } from "react-icons/io5";

import { IconActionButton, ImageIcon } from "@/components";

const SmallNewsScaffoldContent = ({ id, title, content, image_url }) => {
    return (
        <div>
            <div className="flex">
                <div className="flex-grow flex-shrink basis-auto break-words">
                    <div>
                        <Link href={`/${id}`}>
                            <div className="flex flex-col static">
                                <h2 className="max-h-[90px] text-[24px] text-ellipsis text-black line-clamp-3 font-bold overflow-hidden leading-7">
                                    {title}
                                </h2>
                                <div className="pt-2">
                                    <h3 className="max-h-[40px] text-[16px] text-zinc-700 text-ellipsis line-clamp-2 font-normal overflow-hidden leading-5">
                                        {content}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className="pt-[10px]">
                            <span className="text-[13px] text-zinc-500 font-normal leading-5">
                                <div className="h-[48px] flex justify-between">
                                    <div className="flex items-center">
                                        <span>Jul 7</span>
                                        <div>
                                            <div className="max-w-[200px] h-[16px] flex items-center relative">
                                                <Link href="" className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="flex items-center relative">
                                                            <div className="w-4 h-4 flex items-center justify-center">
                                                                <MdWavingHand size={12}/>
                                                            </div>
                                                            <span className="ml-1">434</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex items-center relative">
                                                            <div className="w-4 h-4 flex items-center justify-center">
                                                                <IoChatbubble size={12}/>
                                                            </div>
                                                            <span className="ml-1">434</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow-0 flex-shrink-0 items-center justify-end basis-0">
                                        <IconActionButton icon={<GoBlocked size={24}/>}/>
                                        <IconActionButton icon={<TbBookmarkPlus size={24}/>}/>
                                        <IconActionButton icon={<IoEllipsisHorizontal size={24}/>}/>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                { image_url && (
                    <Link href={`/${id}`}>
                        <div className="ml-14">
                            <ImageIcon src={image_url} width={160} height={108} borderRadius={6}/>
                        </div>
                    </Link>
                ) }
            </div>
        </div>
    );
};

export default SmallNewsScaffoldContent;