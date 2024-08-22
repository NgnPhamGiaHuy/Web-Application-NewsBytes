"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { sliceName } from "@/utils";
import { useAccessTokenContext } from "@/components/ProviderComponents/Providers";

const useAuthForm = (toggleSignIn, toggleSignUp) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });

    const { setAccessToken } = useAccessTokenContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleShowPassword = () => {
        setShowPassword(true);
    };

    const handleSubmit = async () => {
        const url = toggleSignIn ? "/api/v1/auth/login" : "/api/v1/auth/register";
        const { email, password, name } = formData;
        let bodyData = { email, password };

        if (toggleSignUp) {
            const { firstName, lastName } = sliceName(name);
            bodyData = { ...bodyData, firstname: firstName, lastname: lastName };
        }

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + url, bodyData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);

            setAccessToken(response.data.accessToken);

            return router.push("/");
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        if (showPassword) {
            setIsButtonEnabled(!!formData.password);
        } else {
            setIsButtonEnabled(!!formData.email);
        }
    }, [formData, showPassword]);

    return { showPassword, isButtonEnabled, formData, handleChange, handleShowPassword, handleSubmit };
};

export default useAuthForm;