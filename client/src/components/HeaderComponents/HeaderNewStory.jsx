import Link from "next/link";
import { PiBellLight } from "react-icons/pi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { ImageIcon } from "@/components";

import Avatar from "/public/images/Avatar.png";

const HeaderNewStory = () => {
    return (
        <div className="w-full top-0 text-[16px] text-black font-normal block z-[999]">
            <div className="max-w-[1032px] h-[65px] mx-auto px-5 flex items-center justify-between relative">
                <div className="flex flex-grow flex-shrink items-center basis-auto relative z-[500]">
                    <div>
                        <Link href="/">
                            <div className="flex flex-grow-0 flex-shrink-0 items-center basis-auto">
                                <span className="text-[32px] text-black font-medium relative leading-5">
                                    NewBytes
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="h-[65px] ml-3 flex items-center relative">
                        <span className="pt-[10px] text-[16px] text-black fill-black font-normal relative leading-5">
                            Draf in Nguyen Pham Gia Huy
                        </span>
                    </div>
                </div>
                <div className="flex flex-grow-0 flex-shrink-0 items-center basis-auto relative z-[500]">
                    <div className="h-[65px] px-2 flex items-center">
                        <button className="h-[25px] px-[10px] text-[15px] text-white text-left font-normal bg-green-500 bg-opacity-50 border-none whitespace-normal rounded-full cursor-pointer leading-[25px]">
                            Public
                        </button>
                    </div>
                    <div className="h-[65px] px-2 flex items-center">
                        <button className="w-[37px] text-[16px] text-zinc-500 text-center font-normal bg-transparent border-none rounded-full align-baseline whitespace-normal transition-all hover:text-black">
                            <IoEllipsisHorizontalSharp size={25} />
                        </button>
                    </div>
                    <div className="flex flex-row items-center">
                        <button className="w-[37px] mr-4 text-[16px] text-zinc-500 text-center font-normal bg-transparent border-none rounded-full align-baseline whitespace-normal transition-all hover:text-black">
                            <PiBellLight size={25} />
                        </button>
                        <button className="w-[37px] text-[16px] text-zinc-500 text-center font-normal bg-transparent border-none rounded-full align-baseline whitespace-normal transition-all hover:text-black">
                            <ImageIcon src={Avatar} width={32} height={32}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNewStory;