"use client"

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { AuthEmailPopUp, AuthOptionPopUp } from "@/components";

const AuthPopUp = ({ forwardRef, toggleSignIn, toggleSignUp, handleToggleSignIn, handleToggleSignUp, handleTogglePopUp }) => {
    const [toggleEmailPopUp, setToggleEmailPopUp] = useState(false);

    const handleToggleEmailPopUp = () => {
        return setToggleEmailPopUp((prevState) => !prevState);
    }

    return (
        <div>
            <div style={{ animation: "300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running k1" }} className="inset-0 flex items-center justify-center bg-white bg-opacity-95 overflow-y-auto overflow-x-hidden scroll-smooth fixed z-[800]">
                <div style={{ animation: "300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running k2" }} className="my-auto origin-center">
                    <div ref={forwardRef} className="w-[678px] bg-white rounded-md shadow-2xl border border-solid border-zinc-200 relative animate-zoomIn">
                        <div className="min-h-[695px] w-full h-full flex flex-row justify-between rounded-md bg-white">
                            <div className="w-[360px] px-14 py-11 flex flex-col flex-grow flex-shrink-0 basis-auto items-center justify-center text-center">
                                { toggleEmailPopUp ? (
                                    <AuthEmailPopUp toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} handleToggleEmailPopUp={handleToggleEmailPopUp}/>
                                ) : (
                                    <AuthOptionPopUp toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} handleToggleSignIn={handleToggleSignIn} handleToggleSignUp={handleToggleSignUp} handleToggleEmailPopUp={handleToggleEmailPopUp}/>
                                ) }
                            </div>
                            <div className="top-3 right-3 absolute">
                                <button className="text-zinc-500 fill-zinc-500 hover:text-black hover:fill-black transition-all" onClick={handleTogglePopUp}>
                                    <IoMdClose size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPopUp;