import Link from "next/link";

const AuthOptionCard = ({ icon, title, onClick = null }) => {
    return (
        <div>
            <Link href="" onClick={onClick}>
                <div className="w-[300px] mt-3 p-2 text-[16px] text-center text-decoration-none font-normal border border-solid border-black bg-white rounded-full leading-6">
                    <div className="flex items-center justify-between">
                        { icon }
                        { title }
                        <div className="w-6 h-6"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AuthOptionCard;