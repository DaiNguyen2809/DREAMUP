import { InputCombo } from "../components";
import { Link } from "react-router-dom";
function Register() {
    return (
        <div className="w-[45%] px-10 py-10 bg-lightCF font-gilroy text-base mx-auto my-20">
            <h1 className="font-gilroy_bold text-4xl text-center">ĐĂNG KÝ</h1>
            <InputCombo label="Họ và tên:" type="text" id="name" name="name" placeholder="Họ và tên" />
            <InputCombo label="Email:" type="email" id="email" name="email" placeholder="email" />
            <InputCombo label="Mật khẩu:" type="password" id="password" name="password" placeholder="Mật khẩu" />
            <InputCombo label="Xác nhận mật khẩu:" type="password" id="password" name="password" placeholder="Mật khẩu" />

            <button className="mt-6 bg-darkCF w-full text-lightCF px-2 py-3 ">ĐĂNG KÝ</button>
            <p className="mt-2 text-center">
                Bạn đã có tài khoản?
                <span className="ml-1 underline cursor-pointer">
                    <Link to="/login">Đăng nhập ngay</Link>
                </span>
            </p>
        </div>
    );
}

export default Register;
