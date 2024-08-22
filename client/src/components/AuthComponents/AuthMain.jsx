import { ImageIcon } from "@/components";
import AuthImage from "/public/images/Auth-Image.webp";

const AuthMain = ({ handleTogglePopUp }) => {
    return (
        <>
            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                <div className="max-w-[1192px] w-full mx-16 mt-[75px]">
                    <div>
                        <div className="top-[54%] right-0 -translate-y-1/2 absolute">
                            <div className="w-full h-full relative">
                                <ImageIcon src={AuthImage} width={460} height={600} borderRadius={0}/>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[810px] mb-12">
                        <h2 className="text-[120px] text-black font-normal tracking-tight leading-[100px]">
                            Human
                            <br/>
                            stories & ideas
                        </h2>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-[22px] text-black font-normal leading-7">
                            A place to read, write, and deepen your understanding
                        </h3>
                    </div>
                    <div>
                        <button className="w-[196px] px-5 py-2 text-[20px] text-center text-decoration-none text-white fill-white font-normal rounded-full border border-solid border-black bg-black bg-opacity-90 leading-7 hover:bg-opacity-100 transition-opacity" onClick={handleTogglePopUp}>
                            Start reading
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthMain;