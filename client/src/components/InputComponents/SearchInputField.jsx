import { IoSearchOutline } from "react-icons/io5";

const SearchInputField = ({ width = 240, border = "none", borderRadius = 20, backgroundColor = "#F9F9F9", iconSize = 24 }) => {
    return (
        <>
            <div className="flex items-center relative" style={{ width: `${width}px`, border: border, borderRadius: `${borderRadius}px`, backgroundColor: backgroundColor }}>
                <div className="mx-4 flex">
                    <IoSearchOutline size={iconSize} />
                </div>
                <input type="text" placeholder="Search" className="py-2 pr-5 text-sm outline-none border-none bg-transparent"/>
            </div>
        </>
    );
};

export default SearchInputField;