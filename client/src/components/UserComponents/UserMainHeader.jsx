import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { IconActionButton, UserMainNavigation } from "@/components";

const UserMainHeader = ({ firstname, lastname, }) => {
    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <div className="max-w-[680px] w-full mx-6">
                        <div className="mt-[52px] mb-[48px]">
                            <div className="mb-10 flex flex-wrap items-center justify-end">
                                <div className="w-full flex items-center">
                                    <div className="flex flex-grow flex-shrink basis-auto items-center justify-start">
                                        <div className="flex flex-nowrap">
                                            <h2 className="max-h-[52px] pr-2 text-[42px] text-black text-ellipsis font-medium line-clamp-1 break-words tracking-tight overflow-hidden leading-[52px]">
                                                { firstname && `${firstname}`} { lastname && `${lastname}`}
                                            </h2>
                                        </div>
                                    </div>
                                    <IconActionButton icon={<IoEllipsisHorizontalSharp size={25}/>} buttonStyle={{marginLeft: "12px", padding: 0}} iconStyle={{width: "33px", height: "33px", padding: "4px"}}/>
                                </div>
                            </div>
                            <UserMainNavigation/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMainHeader;