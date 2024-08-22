const HeaderPopUpBox = ({ list, RenderComponent }) => {
    return (
        <div>
            <div className="py-4 border-b border-solid border-zinc-100 ">
                { list.map((value, index) => (
                    <RenderComponent key={index} {...value} />
                )) }
            </div>
        </div>
    )
}

export default HeaderPopUpBox;