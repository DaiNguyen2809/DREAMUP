import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../components";
function ProfileCustomer() {
    return (
        <div className="w-[100%] h-fit flex justify-center py-20 px-20 font-gilroy bg-lightCF">
            <ProfileSidebar />
            <Outlet />
        </div>
    );
}
export default ProfileCustomer;
