import { MainNews, NewsNavigation } from "@/components";

const Main = ({ forwardRef, newsProps }) => {
    return (
        <main className="max-w-[728px] min-w-[728px] flex-grow flex-shrink basis-auto">
            <div>
                <NewsNavigation/>
                <MainNews forwardRef={forwardRef} newsProps={newsProps} />
            </div>
        </main>
    );
};

export default Main;