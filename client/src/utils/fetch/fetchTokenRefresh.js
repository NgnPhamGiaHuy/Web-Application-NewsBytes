const fetchTokenRefresh = async () => {
    try {
        const remember_token = localStorage.getItem("remember_token");

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/refresh-tokens";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${remember_token}`,
            },
        });

        if (response.ok) {
            const responseData = await response.json();

            return responseData.accessToken;
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Get Token refresh failed" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export default fetchTokenRefresh;