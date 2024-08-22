"use client";

import { useState } from "react";
import { splitText } from "@/utils";

const useTitle = (wordLimit, setDescription) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [title, setTitle] = useState("");
    const [textChunks, setTextChunks] = useState([]);

    const handleTitleClick = () => setIsEditingTitle(true);

    const handleTitleChange = (data) => {
        setTitle(data);
        const chunks = splitText(data, wordLimit);
        setTextChunks(chunks);
    };

    const handleTitleBlur = () => {
        if (title.trim() === "") setTitle("");
        setIsEditingTitle(false);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("Text");
        const words = text.split(" ");
        const titleText = words.slice(0, wordLimit).join(" ");
        const descriptionText = words.slice(wordLimit).join(" ");

        handleTitleChange(titleText);
        setDescription(descriptionText);
    };

    return { isEditingTitle, title, textChunks, handleTitleClick, handleTitleChange, handleTitleBlur, handlePaste };
};

export default useTitle;
