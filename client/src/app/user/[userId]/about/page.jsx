import { Header } from "@/components";
import { useWithAuth } from "@/hooks";

const UserAboutPage = () => {
    return (
        <div>
            <Header />
            <div>
                About
            </div>
        </div>
    );
};

export default useWithAuth(UserAboutPage);