"use client"

import { useDescription, useTitle, useWithAuth } from "@/hooks";
import { DescriptionEditor, HeaderNewStory, TitleEditor } from "@/components";

const NewStoryPage = () => {
    const wordLimit = 20;

    const {
        isEditingDescription, description, setDescription, handleDescriptionClick,
        handleDescriptionChange, handleDescriptionBlur
    } = useDescription();

    const {
        isEditingTitle, title, textChunks, handleTitleClick, handleTitleChange, handleTitleBlur, handlePaste
    } = useTitle(wordLimit, setDescription);

    return (
        <div>
            <HeaderNewStory />
            <div>
                <main>
                    <article className="min-h-[calc(100vh-65px)] overflow-hidden relative">
                        <div className="mt-[3px] mb-[50px] outline-0 break-words relative">
                            <section className="mt-[20px] pt-0 pb-[5px] clear-both relative">
                                <div>
                                    <div className="max-w-[740px] w-full mx-auto px-5 relative">
                                        <TitleEditor title={title} onTitleChange={handleTitleChange} onTitleClick={handleTitleClick} onTitleBlur={handleTitleBlur} onPaste={handlePaste} isEditingTitle={isEditingTitle} />
                                        { textChunks.length > 1 && textChunks.slice(1).map((chunk, index) => (
                                            <p key={index} className="mt-[10px] ml-[2px] text-[21px] text-zinc-500 font-normal cursor-text leading-6">
                                                {chunk}
                                            </p>
                                        )) }
                                        <DescriptionEditor description={description} onDescriptionChange={handleDescriptionChange} onDescriptionClick={handleDescriptionClick} onDescriptionBlur={handleDescriptionBlur} isEditingDescription={isEditingDescription} />
                                    </div>
                                    <div>
                                        {/* Additional content */}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            {/* Additional content */}
                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
};

export default useWithAuth(NewStoryPage);