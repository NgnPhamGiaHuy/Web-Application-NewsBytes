import Link from "next/link";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { ImageIcon } from "@/components";

const UserFollowingCard = ({ id, image_url, firstname, lastname }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <Link href={`/user/${id}`} className="cursor-pointer">
                    <div className="pr-[10px] flex">
                        <div className="pr-4">
                            { image_url && <ImageIcon src={image_url} width={20} height={20} /> }
                        </div>
                        <p className="max-h-5 text-[13px] text-zinc-500 text-ellipsis font-normal line-clamp-1 break-words overflow-hidden relative leading-5 hover:underline transition-all">
                            { firstname && `${firstname}`} { lastname && `${lastname}`}
                        </p>
                    </div>
                </Link>
                <div>
                    <button className="p-1">
                        <IoEllipsisHorizontalSharp size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserFollowingCard;