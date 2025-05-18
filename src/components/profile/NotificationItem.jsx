import LinkButton from "../LinkButton";
const NotificationItem = () => {
    return (
        <div className="flex mt-4 justify-between">
            <div className=" w-full h-32 px-4 py-4 flex gap-4 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                <div className="w-[12%] h-full bg-violet-50 flex justify-center items-center">
                    <div className="h-full w-full"></div>
                </div>
                <div className="w-[88%] h-full flex justify-center items-start">
                    <div className="w-[80%] h-full flex flex-col">
                        <h1 className="text-lg">Đang vận chuyển</h1>
                        <p>Đơn hàng 20x12312312312 với mã vận đơn 12312312312x đã được DREAM UP STORE giao cho đơn vị vận chuyển</p>
                        <p>29/09/2025</p>
                    </div>
                    <div className="w-[20%] h-full flex justify-end items-center">
                        <LinkButton path="/">Xem chi tiết</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotificationItem;
