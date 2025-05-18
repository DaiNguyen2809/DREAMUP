import { RectangleUnderline } from "../../../components";
import { NotificationItem } from "../../../components/profile";
const Notifications = () => {
    return (
        <div className="w-[80%] bg-white px-4 py-4 rounded-sm shadow-lg">
            <div className="flex flex-col justify-center items-end">
                <p className="hover:text-yellowCF transition-all duration-200 ease-in-out cursor-pointer">Đánh dấu đã đọc tất cả</p>
            </div>
            <RectangleUnderline className="w-full h-px bg-darkCF"></RectangleUnderline>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
        </div>
    );
};

export default Notifications;
