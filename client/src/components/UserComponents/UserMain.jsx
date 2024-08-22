import { UserMainHeader, UserMainNews } from "@/components";

const UserMain = ({ forwardRef, newsProps, userProps }) => {
    return (
        <main className="max-w-[728px] min-w-[728px] flex-grow flex-shrink basis-auto">
            <div className="flex flex-col min-h-screen bg-white">
                <UserMainHeader {...userProps} />
                <UserMainNews forwardRef={forwardRef} newsProps={newsProps} />
            </div>
        </main>
    );
};

export default UserMain;