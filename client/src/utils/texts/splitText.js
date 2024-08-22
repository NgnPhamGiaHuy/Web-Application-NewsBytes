const splitText = (text = "", wordLimit) => {
    const words = text.split(" ");
    const chunks = [];
    let currentChunk = [];

    words.forEach((word) => {
        if ((currentChunk.join(" ") + " " + word).split(" ").length > wordLimit) {
            chunks.push(currentChunk.join(" "));
            currentChunk = [word];
        } else {
            currentChunk.push(word);
        }
    });

    if (currentChunk.length > 0) {
        chunks.push(currentChunk.join(" "));
    }

    return chunks;
};

export default splitText;