import Link from "next/link";

const FooterAuth = () => {
    const list = [
        { link: "", name: "Help" },
        { link: "", name: "Status" },
        { link: "", name: "About" },
        { link: "", name: "Careers" },
        { link: "", name: "Press" },
        { link: "", name: "Blog" },
        { link: "", name: "Privacy" },
        { link: "", name: "Terms" },
        { link: "", name: "Text to speech" },
        { link: "", name: "Teams" },
    ]

    return (
        <div>
            <div className="flex justify-center border-t border-solid border-black">
                <div className="max-w-[680px] min-w-0 w-full mx-6">
                    <div className="py-6 flex flex-row flex-wrap">
                        {list?.map((value, index) => (
                            <FooterAuthItem key={index} {...value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const FooterAuthItem = ({ link, name }) => {
    return (
        <div>
            <div className="mr-4">
                <Link href={link}>
                    <p className="text-[13px] text-zinc-500 font-normal leading-5">
                        { name }
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default FooterAuth;