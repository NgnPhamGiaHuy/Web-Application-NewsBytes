"use client"

import { useState, useEffect, useRef } from "react";

const useCKEditor = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const editorRef = useRef(null);

    useEffect(() => {
        (async () => {
            try {
                const { CKEditor } = await import("@ckeditor/ckeditor5-react");
                const ClassicEditor = (await import("@ckeditor/ckeditor5-build-classic")).default;
                editorRef.current = { CKEditor, ClassicEditor };
                setEditorLoaded(true);
            } catch (error) {
                console.error("Failed to load CKEditor:", error);
            }
        })();
    }, []);

    return { editorLoaded, editorRef };
};

export default useCKEditor;