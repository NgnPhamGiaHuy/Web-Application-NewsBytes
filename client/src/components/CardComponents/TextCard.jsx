import Link from "next/link";

const TextCard = ({ link, name }) => {
    return (
        <div>
            <Link href={link}>
                <div className="px-6 py-[6px] text-[14px] text-zinc-500 font-normal leading-5 hover:text-black transition-all">
                    {name}
                </div>
            </Link>
        </div>
    )
};

export default TextCard;