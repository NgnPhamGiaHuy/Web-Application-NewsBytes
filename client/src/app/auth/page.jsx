"use client"

import { useRef, useState } from "react";

import { useCheckAccessToken, useClickOutside } from "@/hooks";
import { AuthMain, AuthPopUp, FooterAuth, HeaderAuth } from "@/components";

const AuthPage = () => {
    const popUpRef = useRef(null);

    const [togglePopUp, setTogglePopUp] = useState(false);
    const [toggleSignIn, setToggleSignIn] = useState(true);
    const [toggleSignUp, setToggleSignUp] = useState(false);

    const handleTogglePopUp = () => {
        return setTogglePopUp((prevState) => !prevState);
    }

    const handleToggleSignUp = () => {
        setToggleSignUp(true);
        return setToggleSignIn(false);
    }

    const handleToggleSignIn = () => {
        setToggleSignIn(true);
        return setToggleSignUp(false);
    }

    useClickOutside(popUpRef, togglePopUp, setTogglePopUp);

    return (
        <>
            <div>
                <div className="h-screen flex flex-col bg-[#F7F4ED]">
                    <div className="min-h-[560px] flex flex-col flex-grow flex-shrink-0 basis-auto overflow-hidden relative">
                        <HeaderAuth handleTogglePopUp={handleTogglePopUp} />
                        <AuthMain handleTogglePopUp={handleTogglePopUp} />
                    </div>
                    <FooterAuth/>
                </div>
            </div>
            { togglePopUp && (
                <AuthPopUp forwardRef={popUpRef} toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} handleToggleSignIn={handleToggleSignIn} handleToggleSignUp={handleToggleSignUp} handleTogglePopUp={handleTogglePopUp} />
            ) }
        </>
    );
};

export default useCheckAccessToken(AuthPage);