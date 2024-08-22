const IconActionButton = ({ icon, buttonStyle, iconStyle, onClick = null }) => {
    return (
        <div>
            <button style={{ ...buttonStyle }} className="p-4 relative text-zinc-500 fill-zinc-500 hover:text-black hover:fill-black cursor-pointer z-20" onClick={onClick}>
                <div style={{ ...iconStyle }} className="w-6 h-6 flex items-center justify-center">
                    { icon }
                </div>
            </button>
        </div>
    );
};

export default IconActionButton;