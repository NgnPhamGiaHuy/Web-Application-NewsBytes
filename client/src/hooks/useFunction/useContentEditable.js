"use client"

import { useCallback, useEffect, useRef, useState } from "react";

import { setCursorToEnd } from "@/utils";

const useContentEditable = (maximumInputText = Infinity) => {
    const inputRef = useRef(null);
    const [inputText, setInputText] = useState("");

    const handleInputTextChange = useCallback(() => {
        const newText = inputRef.current.textContent;

        if (newText.length <= maximumInputText) {
            setInputText(newText);
        } else {
            inputRef.current.textContent = inputText;
        }

        setCursorToEnd(inputRef.current);
    }, [inputText, maximumInputText]);

    const handlePaste = useCallback((event) => {
        event.preventDefault();
        const text = (event.clipboardData || window.clipboardData).getData("text/plain");
        const currentText = inputRef.current.textContent;
        const newText = currentText + text;

        if (newText.length <= maximumInputText) {
            document.execCommand("insertText", false, text);
        } else {
            const allowedLength = maximumInputText - currentText.length;
            if (allowedLength > 0) {
                const truncatedText = text.slice(0, allowedLength);
                document.execCommand("insertText", false, truncatedText);
            }
        }
    }, [maximumInputText]);

    useEffect(() => {
        const element = inputRef.current;
        if (element) {
            element.addEventListener("input", handleInputTextChange);
            element.addEventListener("paste", handlePaste);
            return () => {
                element.removeEventListener("input", handleInputTextChange);
                element.removeEventListener("paste", handlePaste);
            };
        }
    }, [handleInputTextChange, handlePaste]);

    return { inputRef, inputText, setInputText };
}

export default useContentEditable;