import Link from "next/link";
import Image from "next/image";

import Avatar from "/public/images/Avatar.png";

const UserNewsHighlight = ({ name, description }) => {
    return (
        <div>
            <div className="pb-5">
                <div className="w-full h-full">
                    <div className="mb-2">
                        <div className="flex flex-row items-center">
                            <div>
                                <Link href="">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden relative">
                                        <Image src={Avatar} alt={`${Avatar}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </Link>
                            </div>
                            <div className="h-4 ml-2 flex flex-wrap items-center">
                                <Link href="">
                                    <h4 className="max-h-4 pr-[2px] text-[13px] text-ellipsis line-clamp-1 font-medium break-words overflow-hidden leading-4">
                                        { name }
                                    </h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href="">
                            <h2 className="text-[16px] font-semibold tracking-normal leading-5">
                                { description }
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNewsHighlight;