const NavigationButton = ({ icon, rightPosition = null, leftPosition = null, topPosition = null, bottomPosition = null, onClick, opacityBackgroundColor = null }) => {
    const styles = {
        top: topPosition,
        bottom: bottomPosition,
        left: leftPosition,
        right: rightPosition,
        background: opacityBackgroundColor
    }

    return (
        <div style={styles} className="flex items-center opacity-100 absolute">
            <button className="m-[2px] cursor-pointer bg-transparent overflow-visible" onClick={onClick}>
                { icon }
            </button>
        </div>
    );
};

export default NavigationButton;