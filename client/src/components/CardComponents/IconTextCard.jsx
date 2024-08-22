import Link from "next/link";

const IconTextCard = ({ link, icon, name }) => {
    return (
        <div>
            <Link href={link}>
                <div className="px-6 py-2 text-[14px] text-zinc-500 font-normal leading-5">
                    <div className="flex items-center">
                        { icon }
                        <div className="ml-4">
                            <p className="max-h-5 text-[14px] text-zinc-500 text-ellipsis font-normal line-clamp-1 break-words overflow-hidden leading-5">
                                { name }
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default IconTextCard;