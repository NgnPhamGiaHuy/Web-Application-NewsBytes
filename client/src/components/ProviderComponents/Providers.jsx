"use client"

// import { Provider } from "react-redux";
import { createContext, useContext } from "react";

// import { store } from "@/store";
import { useTokenRefresh } from "@/hooks";

const AccessTokenContext = createContext(null);

export const useAccessTokenContext = () => {
    return useContext(AccessTokenContext);
};

const Providers = (props) => {
    const { accessToken, setAccessToken } = useTokenRefresh();

    return (
        // <Provider store={store}>
            <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
                { props.children }
            </AccessTokenContext.Provider>
        // </Provider>
    );
};

export default Providers;