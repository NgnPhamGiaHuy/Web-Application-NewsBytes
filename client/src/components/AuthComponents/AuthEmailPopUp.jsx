import { GoChevronLeft } from "react-icons/go";

import { useAuthForm } from "@/hooks";

const AuthEmailPopUp = ({ toggleSignIn, toggleSignUp, handleToggleEmailPopUp }) => {
    const { showPassword, isButtonEnabled, formData, handleChange, handleShowPassword, handleSubmit } = useAuthForm(toggleSignIn, toggleSignUp);

    return (
        <>
            <h2 className="text-[28px] text-black font-normal tracking-tight leading-8">
                {toggleSignIn && "Sign in with email"}
                {toggleSignUp && "Sign up with email"}
            </h2>
            <div className="max-w-[316px] mt-[30px]">
                <h4 className="text-[14px] text-black font-normal leading-6">
                    {toggleSignIn && "Enter the email address associated with your account, and we’ll send a magic link to your inbox."}
                    {toggleSignUp && "Enter your email address to create an account."}
                </h4>
            </div>
            <div className="mt-[50px]">
                <div className="flex flex-col items-center">
                    <div className="mt-3 mb-7">
                        <span className="text-[14px] text-black font-normal leading-5">
                            { showPassword ? (
                                <div className="w-[270px] flex flex-col">
                                    {toggleSignUp && (
                                        <div className="mb-4">
                                            <label htmlFor="name" className="mb-2 text-black">Name</label>
                                            <div className="w-[270px] px-3 py-2 flex border border-solid border-transparent rounded-md bg-zinc-100">
                                                <input type="text" name="_token" id="name" required value={formData?.name} onChange={handleChange} className="flex-grow flex-shrink basis-0 border-none outline-none bg-inherit"/>
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <label htmlFor="password" className="mb-2 text-black">Your password</label>
                                        <div className="w-[270px] px-3 py-2 flex border border-solid border-transparent rounded-md bg-zinc-100">
                                            <input type="password" name="_token" id="password" required value={formData?.password} onChange={handleChange} className="flex-grow flex-shrink basis-0 border-none outline-none bg-inherit"/>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-[270px] flex flex-col">
                                    <label htmlFor="email" className="mb-2 text-black">Your email</label>
                                    <div className="w-[270px] px-3 py-2 flex border border-solid border-transparent rounded-md bg-zinc-100">
                                        <input type="email" name="_token" id="email" required value={formData?.email} onChange={handleChange} className="flex-grow flex-shrink basis-0 border-none outline-none bg-inherit"/>
                                    </div>
                                </div>
                            ) }
                        </span>
                    </div>
                    <div className="mt-3 mb-[15px]">
                        <button onClick={showPassword ? handleSubmit : handleShowPassword} disabled={!isButtonEnabled} className={`${isButtonEnabled ? "border-black bg-black" : "border-zinc-500 bg-zinc-500 cursor-not-allowed select-none"} w-[226px] px-4 py-2 fill-white text-[14px] text-white text-center text-decoration-none font-normal border border-solid rounded-full leading-5`}>
                            { showPassword ? "Submit" : "Continue" }
                        </button>
                    </div>
                    <div className="mt-3 mb-7 pr-[21px]">
                        <p className="text-[14px] text-zinc-500 leading-5">
                            <button className="flex flex-row items-center text-[14px] text-lime-700 text-center text-decoration-none fill-lime-700 font-normal rounded-full leading-5 hover:text-lime-900 hover:fill-lime-900" onClick={handleToggleEmailPopUp}>
                                <GoChevronLeft size={20} />
                                { toggleSignIn && "All sign in options" }
                                { toggleSignUp && "All sign up options" }
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthEmailPopUp;