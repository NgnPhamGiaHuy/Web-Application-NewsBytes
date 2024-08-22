import { FiUser } from "react-icons/fi";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiBookmarks, PiNotebook } from "react-icons/pi";

export const HEADER_ICON_TEXT_LIST = ({ id }) => {
    return [
        { link: `/user/${id}`, icon: <FiUser size={24} />, name: "Profile" },
        { link: "", icon: <PiBookmarks size={24} />, name: "Library" },
        { link: "", icon: <PiNotebook size={24} />, name: "Stories" },
        { link: "", icon: <LiaChartBarSolid size={24} />, name: "Stats" },
    ]
}

export const HEADER_SETTING_TEXT_LIST = [
    { link: "", name: "Settings" },
    { link: "", name: "Refine recommendations" },
    { link: "", name: "Help" },
]

export const HEADER_MEMBER_TEXT_LIST = [
    { link: "", name: "Apply for author verification" },
    { link: "", name: "Apply to the Partner Program" },
    { link: "", name: "Gift a membership" },
]