import Link from "next/link";
import { LuMailPlus } from "react-icons/lu";

import { ImageIcon } from "@/components";

const UserAsideInfo = ({ image_url, firstname, lastname, bio, website, linkedin_profile }) => {
    const contactUrl = website ? website : linkedin_profile;

    return (
        <div>
            <div className="relative">
                { image_url && <ImageIcon src={image_url} width={88} height={88}/> }
                <div className="mt-4 flex flex-wrap items-baseline">
                    <h2 className="text-[16px] text-black font-medium tracking-normal leading-5">
                        { firstname && `${firstname}`} { lastname && `${lastname}`}
                    </h2>
                </div>
                <div className="mt-2">
                    <span className="text-[16px] text-zinc-500 font-normal leading-6">
                        <Link href="">
                            12.3K Followers
                        </Link>
                    </span>
                </div>
                <div className="mt-3">
                    <p className="text-[14px] text-zinc-500 font-normal leading-5">
                        { bio && (
                            <span className="mb-1 overflow-hidden line-clamp-2">
                                { bio }
                            </span>
                        ) }
                        { contactUrl && (
                            <Link href={contactUrl} className="underline line-clamp-1 overflow-hidden break-words">
                                { contactUrl }
                            </Link>
                        ) }
                    </p>
                </div>
                <div className="mt-6 mb-10 flex">
                    <button className="px-4 py-2 text-[14px] text-white text-center fill-white bg-lime-700 border border-solid border-lime-700 font-normal rounded-full leading-5 transition-all hover:bg-lime-800">
                        Follow
                    </button>
                    <div className="ml-2">
                        <button className="w-[36px] h-[36px] flex items-center justify-center text-[14px] text-white text-center fill-white bg-lime-700 border border-solid border-lime-700 font-normal rounded-full leading-5 transition-all hover:bg-lime-800">
                            <LuMailPlus size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAsideInfo;