import { RectangleUnderline, InputCombo } from "../../../components";
const User = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="w-[80%] bg-white px-4 py-4 rounded-sm shadow-lg">
            <div className="flex flex-col justify-start items-start">
                <p className="text-2xl">Hồ sơ của tôi</p>
                <p>Cập nhật đầy đủ thông tin để có thể mua hàng</p>
            </div>
            <RectangleUnderline className="w-full h-px"></RectangleUnderline>
            <div className="flex mt-4 justify-between">
                <div className="w-[70%]">
                    <InputCombo label="Họ và tên:" type="text" id="name" name="name" placeholder="Họ và tên" className="border-1.5 border-darkCF" />

                    <div className="w-full flex justify-between gap-4">
                        <InputCombo label="Email:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" value={user.email} />
                        <InputCombo label="Số điện thoại:" type="text" id="phone" name="phone" placeholder="Nhập số điện thoại" className="border-1.5 border-darkCF" value={user.phone} />
                    </div>

                    <div className="w-full flex justify-between gap-4">
                        <InputCombo label="Ngày sinh:" type="date" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" />
                        <InputCombo label="Giới tính:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" />
                    </div>
                    <div className="w-full flex justify-between gap-4">
                        <InputCombo label="Khu vực:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" />
                        <InputCombo label="Phường/Xã:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" />
                    </div>
                    <InputCombo label="Địa chỉ cụ thể:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" className="border-1.5 border-darkCF" />
                    <button className="h-10 w-[20%] px-4 border border-darkCF rounded-sm mt-6">Lưu</button>
                </div>
                <div className="w-[29%] flex flex-col items-center py-20">
                    <div className="bg-pink-200 w-28 h-28 rounded-full"></div>
                    <div className="relative mt-6 w-[40%] h-10 pl-3 pr-4 py-2 border border-darkCF rounded-sm overflow-hidden flex items-center justify-center cursor-pointer">
                        <input type="file" name="image" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                        <span className="cursor-pointer">Lưu</span>
                    </div>
                    <p className="text-sm text-center w-[90%] mt-4">
                        Dụng lượng file tối đa 1 MB <br></br> Định dạng:.JPEG, .PNG
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;
