"use client"

import DOMPurify from "dompurify";

import { useCKEditor } from "@/hooks";

const DescriptionEditor = ({ description, onDescriptionChange, onDescriptionClick, onDescriptionBlur, isEditingDescription }) => {
    const { editorLoaded, editorRef } = useCKEditor();

    const handleReady = (editor) => {
        const sanitizedDescription = DOMPurify.sanitize(description);
        editor.setData(sanitizedDescription);
        editor.focus();
    };

    const handleChange = (event, editor) => {
        const data = editor.getData();
        onDescriptionChange(data);
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const text = event.clipboardData.getData("Text");
        onDescriptionChange(text);
    };

    if (!editorLoaded) {
        return <div>Editor loading...</div>;
    }

    const { CKEditor, ClassicEditor } = editorRef.current;

    return (
        <div>
            <p className="mt-[10px] ml-[2px] text-[21px] text-zinc-500 font-normal cursor-text leading-6" onClick={onDescriptionClick}>
                { isEditingDescription ? (
                    <CKEditor editor={ClassicEditor} data={DOMPurify.sanitize(description)} onChange={handleChange} onBlur={onDescriptionBlur} onReady={handleReady} onPaste={handlePaste} config={{ placeholder: "Tell your story…" }} />
                ) : (
                    <span>
                        { description || "Tell your story…" }
                    </span>
                ) }
            </p>
        </div>
    );
};

export default DescriptionEditor;