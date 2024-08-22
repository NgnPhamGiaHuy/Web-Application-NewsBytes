"use client"

import { useRouter } from "next/navigation";

import { useLogout } from "@/hooks";
import { HeaderPopUpBox, IconTextCard, TextCard } from "@/components";
import { HEADER_ICON_TEXT_LIST, HEADER_MEMBER_TEXT_LIST, HEADER_SETTING_TEXT_LIST } from "@/constants/HeaderConstants";

const HeaderUserPopUp = ({ id, email }) => {
    const iconTextList = HEADER_ICON_TEXT_LIST({ id });

    const router = useRouter();

    const handleLogout = async () => {
        const logout = await useLogout(router);
        try {
            return await logout();
        } catch (error) {
            return console.error("Logout failed: ", error);
        }
    }

    return (
        <>
            <div style={{ transform: "translate3d(1224px, 52px, 0px)" }} className="top-0 right-auto bottom-auto left-0 rounded-md bg-white transition-opacity duration-300 absolute z-[999]">
                <div className="max-h-[790px] border border-solid border-zinc-200 rounded-md shadow-lg bg-white overflow-y-auto">
                    <div className="w-[264px]">
                        <HeaderPopUpBox list={iconTextList} RenderComponent={IconTextCard} />
                        <HeaderPopUpBox list={HEADER_SETTING_TEXT_LIST} RenderComponent={TextCard} />
                        <HeaderPopUpBox list={HEADER_MEMBER_TEXT_LIST} RenderComponent={TextCard} />
                        <div>
                            <div className="py-4 border-b border-solid border-zinc-100">
                                <button onClick={handleLogout}>
                                    <div className="px-6 py-2 text-[14px] text-left text-zinc-500 font-normal leading-5 hover:text-black transition-all">
                                        <div className="mb-1">
                                            Sign out
                                        </div>
                                        <p className="max-h-5 text-[13px] text-zinc-500 text-ellipsis line-clamp-1 font-normal overflow-hidden break-words leading-5">
                                            {email}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderUserPopUp;