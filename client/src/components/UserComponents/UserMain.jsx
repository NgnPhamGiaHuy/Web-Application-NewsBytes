"use client"

import { usePathname } from "next/navigation";

import { UserMainAbout, UserMainHeader, UserMainNews } from "@/components";

const UserMain = ({ forwardRef, newsProps, userProps }) => {
    const pathname = usePathname();

    const conditionRender = () => {
        if (pathname.includes("/about")) {
            return <UserMainAbout {...userProps} />
        }

        return <UserMainNews forwardRef={forwardRef} newsProps={newsProps} />
    }

    return (
        <main className="max-w-[728px] min-w-[728px] flex-grow flex-shrink basis-auto">
            <div className="flex flex-col min-h-screen bg-white">
                <UserMainHeader {...userProps} />
                { conditionRender() }
            </div>
        </main>
    );
};

export default UserMain;