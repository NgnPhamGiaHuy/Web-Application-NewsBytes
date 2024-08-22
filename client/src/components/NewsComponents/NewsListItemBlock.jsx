const NewsListItemBlock = ({ content }) => {
    return (
        <li className="ml-[30px] mt-[2.14em] mb-[-0.46em] text-[20px] text-black font-normal list-disc leading-8">
            { content }
        </li>
    );
};

export default NewsListItemBlock;