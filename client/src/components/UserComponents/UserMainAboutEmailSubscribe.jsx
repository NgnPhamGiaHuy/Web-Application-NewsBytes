import Link from "next/link";
import { LuMailPlus } from "react-icons/lu";

import { getUserData } from "@/utils";

const UserMainAboutEmailSubscribe = ({ id, firstname, lastname }) => {
    const currentUser = getUserData();

    if (currentUser?.id === id) {
        return null;
    }

    return (
        <div>
            <div className="pt-6">
                <div className="min-h-[121px] mb-6 py-6 border-t border-solid border-black">
                    <div className="pt-[6px] break-words">
                        <h2 className="text-[20px] font-medium tracking-normal leading-6">
                            Get an email whenever { firstname && `${firstname}`} { lastname && `${lastname}`} publishes.
                        </h2>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full flex flex-row items-center justify-between">
                            <div className="pr-2">
                                <div className="max-w-[425px] mt-[10px]">
                                    <p className="text-[11px] text-zinc-700 font-normal leading-4">
                                        Emails will be sent to {currentUser?.email} &nbsp;
                                        <span>
                                            <Link href="">
                                                <button className="underline">
                                                    Not you?
                                                </button>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex-grow-0 flex-shrink-0 basis-auto">
                                <button className="px-4 py-2 text-[14px] text-black text-center text-decoration-none fill-black border border-solid border-black rounded-full font-normal leading-5">
                                    <div className="flex items-center justify-center">
                                        <span className="mr-2">
                                            <LuMailPlus size={24}/>
                                        </span>
                                        Subscribe
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMainAboutEmailSubscribe;