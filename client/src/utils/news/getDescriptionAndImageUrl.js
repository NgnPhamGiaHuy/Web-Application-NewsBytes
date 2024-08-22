const getDescriptionAndImageUrl = (contentBlocks) => {
    let description = null;
    let imageUrl = null;

    contentBlocks?.forEach((block) => {
        if (!description && ['paragraph', 'heading', 'quote'].includes(block.type)) {
            description = block.content;
        }
        if (!imageUrl && block.type === 'image') {
            imageUrl = block.content;
        }
    });

    return { description, imageUrl };
};

export default getDescriptionAndImageUrl;