import Link from "next/link";

import { extractMonthAndDay } from "@/utils";
import { UserMainAboutBio, UserMainAboutEmailSubscribe } from "@/components";

const UserMainAbout = ({ id, bio, firstname, lastname, created_at }) => {
    const { month, day } = extractMonthAndDay(created_at);

    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-[680px] w-full mx-6">
                    <UserMainAboutBio bio={bio}/>
                    <div className="pb-6">
                        <span className="text-[14px] text-zinc-700 font-normal leading-5">
                            NewsBytes member since { month + " " + day }
                        </span>
                    </div>
                    <div className="pb-6">
                        <h4 className="text-[14px] text-lime-500 font-normal leading-5">
                            <Link href="" className="hover:text-lime-700">
                                467 Followers
                            </Link>
                            <span className="mx-3">·</span>
                            <Link href="" className="hover:text-lime-700">
                                467 Followers
                            </Link>
                        </h4>
                    </div>
                    <UserMainAboutEmailSubscribe id={id} firstname={firstname} lastname={lastname} />
                </div>
            </div>
        </div>
    );
};

export default UserMainAbout;