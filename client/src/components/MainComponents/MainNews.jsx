import { SmallNewsScaffold } from "@/components";

const MainNews = ({ forwardRef, newsProps }) => {
    return (
        <div>
            <div className="pt-[50px]">
                <div ref={forwardRef}>
                    { newsProps?.map((value, index) => (
                        <SmallNewsScaffold key={index} {...value} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default MainNews;