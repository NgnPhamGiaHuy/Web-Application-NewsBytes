import Link from "next/link";

const AsideBox = ({ title, boxMarginTop = 40, link = "", linkLabel = "See the full list", titleMarginTop = 0, titleMarginBottom = 16, linkMarginTop = 0, linkMarginBottom = 0, list = [], limit = list.length, renderStyle = "normal", RenderComponent = null }) => {
    const renderNormal = () => (
        <div>
            {list.slice(0, limit).map((value, index) => (
                <RenderComponent key={index} {...value} />
            ))}
        </div>
    );

    const renderFlexWrap = () => (
        <div className="flex flex-wrap items-start">
            { list.slice(0, limit).map((value, index) => (
                <RenderComponent key={index}  {...value} />
            )) }
        </div>
    );

    return (
        <div>
            <div style={{ marginTop: `${boxMarginTop}px` }}>
                <div style={{ marginTop: `${titleMarginTop}px`, marginBottom: `${titleMarginBottom}px` }}>
                    <h2 className="text-[16px] text-black font-medium leading-5">
                        {title}
                    </h2>
                </div>
                { renderStyle === "flex-wrap" ? renderFlexWrap() : renderNormal() }
                <div style={{ marginTop: `${linkMarginTop}px`, marginBottom: `${linkMarginBottom}px` }}>
                    <Link href={link}>
                        <span className="text-[14px] text-green-500 font-normal leading-5 hover:text-green-500 hover:transition-all">
                            { linkLabel }
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AsideBox;