import { AsideBox, RoundedLinkButton, UserNewsHighlight, UserProfileCard } from "@/components";

const Aside = ({ isHeaderVisible }) => {
    const staffPicks = [
        { name: "John Doe", description: "Amazing staff pick description 1" },
        { name: "Jane Smith", description: "Incredible staff pick description 2" },
        { name: "Alice Johnson", description: "Fantastic staff pick description 3" },
        { name: "Bob Brown", description: "Wonderful staff pick description 4" },
        { name: "Carol White", description: "Outstanding staff pick description 5" },
        { name: "Dave Black", description: "Excellent staff pick description 6" },
    ];

    const recommendedTopics = [
        { link: "/topic1", title: "React" },
        { link: "/topic2", title: "JavaScript" },
        { link: "/topic3", title: "CSS Grid" },
        { link: "/topic4", title: "TypeScript" },
        { link: "/topic5", title: "Next.js" },
        { link: "/topic6", title: "GraphQL" },
        { link: "/topic7", title: "Redux" },
    ];

    return (
        <div className="max-w-[368px] min-w-[368px] min-h-screen pr-6 pl-clamp-padding border-l border-solid border-zinc-200 bg-white">
            <div className="w-full h-full inline-block relative">
                <div className={`mt-0 sticky transition-all duration-300 ${isHeaderVisible ? "top-[57px]" : "top-[0px]"}`}>
                    <div className={`flex flex-col ${isHeaderVisible ? "min-h-[calc(-57px+100vh)]" : "min-h-[calc(-0px+100vh)]"}`}>
                        <div className="flex-grow flex-shrink-0 basis-auto">
                            <AsideBox title="Staff Picks" titleMarginBottom={22} list={staffPicks} limit={3} RenderComponent={UserNewsHighlight} />
                            <div>
                                <AsideBox title="Recommended topics" titleMarginBottom={22} linkMarginTop={14} list={recommendedTopics} limit={8} renderStyle="flex-wrap" RenderComponent={RoundedLinkButton} />
                                <AsideBox title="Who to follow" linkLabel="See more suggestions" titleMarginBottom={22} linkMarginTop={24} list={recommendedTopics} limit={4} RenderComponent={UserProfileCard} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aside;