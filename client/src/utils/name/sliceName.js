const sliceName = (fullName) => {
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts.slice(0, -1).join(" ");
    const lastName = nameParts.slice(-1).join(" ");
    return { firstName, lastName };
};

export default sliceName;