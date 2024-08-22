"use client"

import Link from "next/link";
import { useState } from "react";
import { PiBellLight } from "react-icons/pi";
import { FcAddressBook } from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";

import { getUserData } from "@/utils";
import { HeaderUserPopUp, ImageIcon, SearchInputField } from "@/components";

const Header = ({ isScrollingDown }) => {
    const user = getUserData();
    
    const [toggleUserMenu, setToggleUserMenu] = useState(false);

    return (
        <>
            <div className={`top-0 sticky bg-white z-[999] transition-transform duration-300 ${isScrollingDown ? "-translate-y-[57px]" : "translate-y-0"}`}>
                <div className="h-[57px] px-6 flex items-center border-b border-solid border-gray-200">
                    <div className="flex flex-grow flex-shrink-0 basis-0 items-center">
                        <Link href="/">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <FcAddressBook size={32} />
                            </div>
                        </Link>
                        <div className="ml-4">
                            <SearchInputField />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-8 flex">
                            <Link href="/new-story">
                                <div className="flex items-center text-sm text-[#6B6B6B] fill-[#6B6B6B] hover:text-black hover:fill-black relative">
                                    <BsPencilSquare size={24} />
                                    <div className="ml-2">
                                        Write
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mr-8 flex">
                        <Link href="">
                            <div className="flex items-center text-sm text-[#6B6B6B] fill-[#6B6B6B] hover:text-black hover:fill-black relative">
                                <PiBellLight size={24} />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <button className="flex items-center bg-transparent border-none cursor-pointer" onClick={() => setToggleUserMenu((prevState) => !prevState)}>
                            <ImageIcon src={user?.image_url} width={32} height={32} />
                        </button>
                    </div>
                    { toggleUserMenu && <HeaderUserPopUp id={user?.id} email={user?.email} /> }
                </div>
            </div>
        </>
    );
};

export default Header;