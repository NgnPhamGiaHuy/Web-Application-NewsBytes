import Link from "next/link";
import Image from "next/image";

import { BiSolidBookContent } from "react-icons/bi";
import { SmallNewsScaffoldContent } from "@/components";
import { getDescriptionAndImageUrl } from "@/utils";

const SmallNewsScaffold = ({ id, user, title, content_blocks, description, image_url }) => {
    const { description: dynamicDescription, imageUrl: dynamicImageUrl } = getDescriptionAndImageUrl(content_blocks);

    return (
        <div className="max-h-[450px] transition-opacity transition-max-height duration-300 delay-300 overflow-hidden">
            <div className="flex justify-center">
                <div className="max-w-[680px] mx-6 mb-8 border-b border-solid border-zinc-100">
                    <article>
                        <div className="w-full h-full">
                            <div className="flex">
                                <div className="mb-[16px] flex items-center">
                                    <div className="mr-[8px]">
                                        <Link href={`/user/${user?.id}`} className="z-[2] relative">
                                            <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden relative">
                                                <Image src={user?.image_url} alt={`${user?.image_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="pr-1">
                                        <Link href={`/user/${user?.id}`} className="flex items-center relative z-[2]">
                                            <span className="max-h-5 text-[13px] text-black text-ellipsis font-normal line-clamp-1 overflow-hidden break-words">
                                                { user?.firstname + "" + user?.lastname }
                                            </span>
                                            <div className="w-4 h-4 ml-[2px] block">
                                                <BiSolidBookContent size={16} color="#427AFE"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <SmallNewsScaffoldContent id={id} title={title} content={description || dynamicDescription} image_url={image_url || dynamicImageUrl}/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default SmallNewsScaffold;