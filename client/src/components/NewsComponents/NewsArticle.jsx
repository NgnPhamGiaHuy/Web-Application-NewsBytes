import NewsHeadingBlock from "@/components/NewsComponents/NewsHeadingBlock";
import NewsFigCaptionBlock from "@/components/NewsComponents/NewsFigCaptionBlock";
import NewsListItemBlock from "@/components/NewsComponents/NewsListItemBlock";
import NewsParagraphBlock from "@/components/NewsComponents/NewsParagraphBlock";
import NewsQuoteBlock from "@/components/NewsComponents/NewsQuoteBlock";
import { ImageFigure, UserNewsArticle } from "@/components";

const contentBlockComponents = { heading: NewsHeadingBlock, paragraph: NewsParagraphBlock, quote: NewsQuoteBlock, list: () => <ul></ul>, list_item: NewsListItemBlock, image: ImageFigure, image_caption: NewsFigCaptionBlock, };

const NewsArticle = ({ title, user, content_blocks, created_at }) => {
    const renderContentBlock = (block, index) => {
        const Component = contentBlockComponents[block.type];

        if (block.type === "image") {
            return (
                <ImageFigure key={index} imageSrc={block.content} />
            );
        }

        if (Component) {
            return <Component key={index} {...block} />;
        }

        return null;
    };

    return (
        <article>
            <section>
                <div className="break-words">
                    <div className="flex justify-center">
                        <div className="max-w-[680px] w-full mx-6">
                            <div>
                                <h1 className="mt-12 mb-8 text-[42px] text-black font-medium leading-[52px]">
                                    { title }
                                </h1>
                                <UserNewsArticle {...user} newCreatedAt={created_at} />
                            </div>
                            { content_blocks?.map(renderContentBlock) }
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default NewsArticle;
