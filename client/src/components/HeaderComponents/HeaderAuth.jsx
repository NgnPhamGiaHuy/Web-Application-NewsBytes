import Link from "next/link";

const HeaderAuth = ({ handleTogglePopUp }) => {
    const list = [
        { link: "", name: "Our story" },
        { link: "", name: "Membership" },
        { link: "", name: "Write" },
    ];

    return (
        <div>
            <div className="w-full top-0 right-0 left-0 border-b border-solid border-black fixed z-10">
                <div className="flex justify-center">
                    <div className="max-w-[1192px] min-w-0 w-full mx-16">
                        <div className="h-[75px] py-[25px] flex flex-row items-center">
                            <div>
                                <Link href="/">
                                    <div className="flex flex-grow-0 flex-shrink-0 items-center basis-auto">
                                        <span className="text-[32px] text-black font-medium relative leading-5">
                                            NewBytes
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex-grow flex-shrink-0 basis-auto"></div>
                            <div className="flex flex-row items-center">
                                { list.map((value, index) => (
                                    <HeaderAuthButton key={index} {...value} />
                                )) }
                                <div className="inline-block">
                                    <div className="mr-[25px]">
                                        <p className="text-[14px] text-black font-normal leading-5 cursor-pointer">
                                            Sign in
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="px-4 py-2 text-[14px] text-white fill-white font-normal border border-solid border-black bg-black bg-opacity-90 rounded-full leading-5 hover:bg-opacity-100 transition-opacity" onClick={handleTogglePopUp}>
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeaderAuthButton = ({link, name}) => {
    return (
        <div className="inline-block">
            <div className="mr-[25px]">
                <p className="text-[14px] text-black font-normal leading-5">
                    <Link href={link}>
                        { name }
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default HeaderAuth;