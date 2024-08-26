"use client"

import { usePathname } from "next/navigation";

import { NewsNavigationItem } from "@/components";

const UserMainNavigation = ({ id }) => {
    const pathname = usePathname();

    return (
        <>
            <nav className="h-[39px] shadow-custom-inset overflow-hidden relative">
                <div className="pt-[2px] flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar">
                    <span className="pb-[6px]">
                        <NewsNavigationItem link={`/user/${id}`} active={!pathname.includes("/list") && !pathname.includes("/about")} label="Home"/>
                    </span>
                    <span className="pb-[6px]">
                        <NewsNavigationItem active={pathname.includes("/list")} label="List"/>
                    </span>
                    <span className="pb-[6px]">
                        <NewsNavigationItem link={`/user/${id}/about`} active={pathname.includes("/about")} label="About"/>
                    </span>
                </div>
            </nav>
        </>
    );
};

export default UserMainNavigation;