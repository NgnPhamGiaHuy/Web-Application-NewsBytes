import { SmallNewsScaffold } from "@/components";

const UserMainNews = ({ forwardRef, newsProps }) => {
    return (
        <div>
            <div className="flex-grow flex-shrink-0 basis-auto">
                <div ref={forwardRef}>
                    { newsProps?.map((value, index) => (
                        <SmallNewsScaffold key={index} {...value}/>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default UserMainNews;