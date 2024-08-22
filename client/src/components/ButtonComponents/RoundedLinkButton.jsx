import Link from "next/link";

const RoundedLinkButton = ({ marginBottom = 10, marginRight = 8, paddingTop = 8, paddingBottom = 8, paddingRight = 16, paddingLeft = 16, borderRadius = 100, link = "", title = "" }) => {
    return (
        <div>
            <div style={{ marginBottom: `${marginBottom}px`, marginRight: `${marginRight}px` }} className="flex">
                <Link href={link}>
                    <div style={{ borderRadius: `${borderRadius}px`, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`, paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px`, }} className="text-[14px] text-black border border-solid border-zinc-100 bg-zinc-100 whitespace-nowrap font-normal relative leading-5 transition-all duration-150 hover:bg-zinc-200">
                        {title}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default RoundedLinkButton;