import { RectangleUnderline } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines, faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const ProfileSidebar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="w-[20%] px-4 py-4">
            <div className="flex justify-start items-center gap-4 mb-4 mt-2">
                <div className="bg-pink-200 w-10 h-10 rounded-full"></div>
                <p>{user.name}</p>
            </div>
            <RectangleUnderline className="w-full h-px bg-gray-500"></RectangleUnderline>

            <NavLink to="/profile/notifications" className={({ isActive }) => `mt-4 flex items-center gap-4 cursor-pointer transition-colors ${isActive ? "text-orange-500" : "text-black"} hover:text-orange-500`}>
                <FontAwesomeIcon icon={faBell} />
                <p>Thông báo</p>
            </NavLink>

            <NavLink to="/profile/user" className={({ isActive }) => `mt-4 flex items-center gap-4 cursor-pointer transition-colors ${isActive ? "text-orange-500" : "text-black"} hover:text-orange-500`}>
                <FontAwesomeIcon icon={faUser} />
                <p>Tài khoản của tôi</p>
            </NavLink>

            <NavLink to="/profile/purchase" className={({ isActive }) => `mt-4 flex items-center gap-4 cursor-pointer transition-colors ${isActive ? "text-orange-500" : "text-black"} hover:text-orange-500`}>
                <FontAwesomeIcon icon={faFileLines} />
                <p>Đơn mua</p>
            </NavLink>
        </div>
    );
};

export default ProfileSidebar;
