import { fetchDataWithAccessToken } from "@/utils";

const clearLocalStorage = () => {
    return localStorage.clear();
}

const useLogout = async (router) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/logout";

        const logoutData = await fetchDataWithAccessToken(url, "POST");

        if (!logoutData) {
            return { error: logoutData.error };
        }

        clearLocalStorage();

        return router.push("/auth");
    } catch (error) {
        return console.error(error);
    }
};

export default useLogout;