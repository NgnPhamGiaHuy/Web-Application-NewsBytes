import Link from "next/link";

import { ImageIcon, RoundedButton } from "@/components";

import Avatar from "/public/images/Avatar.png";

const UserProfileCard = () => {
    return (
        <div>
            <div className="w-full h-full">
                <div className="w-full pt-4 flex items-start justify-between">
                    <div className="mr-2 flex">
                        <Link href="">
                            <div className="relative">
                                <ImageIcon src={Avatar} width={32} height={32}/>
                            </div>
                        </Link>
                        <div className="ml-4 mr-2">
                            <div className="flex items-center">
                                <Link href="">
                                    <h2 className="max-h-10 text-[16px] text-ellipsis font-medium line-clamp-2 break-words overflow-hidden relative leading-5">
                                        Akhilesh Mishra
                                    </h2>
                                </Link>
                            </div>
                            <Link href="">
                                <div className="mt-1 break-words">
                                    <p className="max-h-10 text-[13px] text-zinc-700 text-ellipsis font-normal line-clamp-2 break-words overflow-hidden relative leading-5">
                                        Self-taught DevOps engineer with expertise in multi-cloud, and various DevOps tools. Mentor at Preplaced: https://preplaced.in/profile/akhilesh-mishra
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <RoundedButton title="Follow" borderColor="black" backgroundColor="white"/>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;