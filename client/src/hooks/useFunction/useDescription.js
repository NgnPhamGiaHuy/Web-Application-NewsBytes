"use client";

import { useState } from "react";
import { splitText } from "@/utils";

const useDescription = (wordLimit, setTitle) => {
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [description, setDescription] = useState("");
    const [textChunks, setTextChunks] = useState([]);

    const handleDescriptionClick = () => setIsEditingDescription(true);

    const handleDescriptionChange = (data) => {
        setDescription(data);
        const chunks = splitText(data, wordLimit);
        setTextChunks(chunks);
        if (setTitle) {
            setTitle(chunks[0]);
        }
    };

    const handleDescriptionBlur = () => {
        if (description.trim() === "") setDescription("");
        setIsEditingDescription(false);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("Text");
        const words = text.split(" ");
        const descriptionText = words.join(" ");

        handleDescriptionChange(descriptionText);
    };

    return { isEditingDescription, description, textChunks, handleDescriptionClick, handleDescriptionChange, handleDescriptionBlur, handlePaste };
};

export default useDescription;
