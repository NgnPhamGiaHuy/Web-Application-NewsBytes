import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple, FaFacebook } from "react-icons/fa";

import { AuthOptionCard } from "@/components";

const AuthOptionPopUp = ({ toggleSignIn, toggleSignUp, handleToggleSignIn, handleToggleSignUp, handleToggleEmailPopUp }) => {
    const signUpOptionsList = [
        { icon: <FcGoogle size={24} />, title: "Sign up with Google", onClick: "" },
        { icon: <FaFacebook size={24} style={{ color: "blue" }} />, title: "Sign up with Facebook", onClick: "" },
        { icon: <CiMail size={24} />, title: "Sign up with email", onClick: handleToggleEmailPopUp },
    ]

    const signInOptionsList = [
        { icon: <FcGoogle size={24} />, title: "Sign up with Google", onClick: "" },
        { icon: <FaFacebook size={24} style={{ color: "blue" }} />, title: "Sign up with Facebook", onClick: "" },
        { icon: <FaApple size={24} />, title: "Sign up with Apple", onClick: "" },
        { icon: <FaXTwitter size={24} />, title: "Sign up with X", onClick: "" },
        { icon: <CiMail size={24} />, title: "Sign up with email", onClick: handleToggleEmailPopUp },
    ]

    return (
        <>
            <h2 className="text-[28px] text-black font-normal tracking-tight leading-8">
                {toggleSignIn && "Welcome back."}
                {toggleSignUp && "Join NewsBytes."}
            </h2>
            <div className="mt-[50px]">
                {toggleSignIn && signInOptionsList?.map((value, index) => (
                    <AuthOptionCard key={index} {...value} />
                ))}
                {toggleSignUp && signUpOptionsList?.map((value, index) => (
                    <AuthOptionCard key={index} {...value} />
                ))}
                <div className="mt-10 mb-[100px]">
                    <p className="text-[16px] text-black text-center font-normal leading-6">
                        {toggleSignIn && "No account??"}
                        {toggleSignUp && "Already have an account?"}
                        &nbsp;
                        {toggleSignUp && (
                            <button
                                className="text-lime-700 fill-lime-700 cursor-pointer hover:text-lime-900 hover:fill-lime-900 transition-all"
                                onClick={handleToggleSignIn}>
                                <b>Sign in</b>
                            </button>
                        )}
                        {toggleSignIn && (
                            <button className="text-lime-700 fill-lime-700 cursor-pointer hover:text-lime-900 hover:fill-lime-900 transition-all"
                                onClick={handleToggleSignUp}>
                                <b>Sign up</b>
                            </button>
                        )}
                    </p>
                </div>
            </div>
            <div className="w-[450px]">
                <p className="text-[12px] text-zinc-500 leading-5">
                    Click “Sign up” to agree to NewsBytes’s&nbsp;
                    <Link href="" className="underline cursor-pointer">Terms of Service</Link>
                    &nbsp;and acknowledge that NewsBytes’s&nbsp;
                    <Link href="" className="underline cursor-pointer">Privacy Policy</Link>
                    &nbsp;applies to you.
                </p>
            </div>
        </>
    );
};

export default AuthOptionPopUp;