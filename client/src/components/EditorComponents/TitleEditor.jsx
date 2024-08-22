"use client"

import DOMPurify from "dompurify";

import { useCKEditor } from "@/hooks";

const TitleEditor = ({ title, onTitleChange, onTitleClick, onTitleBlur, onPaste, isEditingTitle }) => {
    const { editorLoaded, editorRef } = useCKEditor();

    const handleReady = (editor) => {
        const sanitizedTitle = DOMPurify.sanitize(title);
        editor.setData(sanitizedTitle);
        editor.focus();
    };

    const handleChange = (event, editor) => {
        const data = editor.getData();
        onTitleChange(data);
    };

    if (!editorLoaded) {
        return <div>Editor loading...</div>;
    }

    const { CKEditor, ClassicEditor } = editorRef.current;

    return (
        <div>
            <h3 className="w-full pt-4 text-[42px] font-normal tracking-normal break-words leading-[52px]" onClick={onTitleClick}>
                { isEditingTitle ? (
                    <CKEditor editor={ClassicEditor} data={DOMPurify.sanitize(title)} onChange={handleChange} onBlur={onTitleBlur} onReady={handleReady} onPaste={onPaste} config={{ placeholder: "Title" }} />
                ) : (
                    <span className="text-zinc-700 cursor-text">
                        { title || "Title" }
                    </span>
                ) }
            </h3>
        </div>
    );
};

export default TitleEditor;