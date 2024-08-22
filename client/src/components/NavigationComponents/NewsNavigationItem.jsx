import Link from "next/link";

const NewsNavigationItem = ({ active = false, link = "", label }) => {
    return (
        <div>
            <div className={`${active && "border-b border-solid border-black"} min-w-max mr-6 pb-4 relative leading-5`}>
                <Link href={link}>
                    <span className={`${active ? "text-black" : "text-[#6B6B6B] hover:text-black"} text-sm font-normal transition-all`}>
                        { label }
                    </span>
                </Link>
            </div>
        </div>
);
};

export default NewsNavigationItem;