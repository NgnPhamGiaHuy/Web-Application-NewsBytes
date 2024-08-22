const NewsQuoteBlock = ({ content }) => {
    return (
        <blockquote className="-ml-5 pl-[23px]" style={{ boxShadow: "rgb(36, 36, 36) 3px 0px 0px 0px inset" }}>
            <p className="mt-[2.14em] mb-[-0.46em] text-[20px] text-black font-normal italic tracking-tight break-words leading-8">
                { content }
            </p>
        </blockquote>
    );
};

export default NewsQuoteBlock;