import { NewsNavigationItem } from "@/components";

const UserMainNavigation = () => {
    return (
        <>
            <nav className="h-[39px] shadow-custom-inset overflow-hidden relative">
                <div className="pt-[2px] flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar">
                    <span className="pb-[6px]">
                        <NewsNavigationItem active={true} label="Home"/>
                    </span>
                    <span className="pb-[6px]">
                        <NewsNavigationItem active={false} label="List"/>
                    </span>
                    <span className="pb-[6px]">
                        <NewsNavigationItem active={false} label="About"/>
                    </span>
                </div>
            </nav>
        </>
    );
};

export default UserMainNavigation;