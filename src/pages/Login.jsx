import { Link } from "react-router-dom";
import { InputCombo } from "../components";
function Login() {
    return (
        <div className="w-[45%] px-10 py-10 bg-lightCF font-gilroy text-base mx-auto my-20">
            <h1 className="font-gilroy_bold text-4xl text-center">ĐĂNG NHẬP</h1>
            <InputCombo label="Tên đăng nhập:" type="text" id="username" name="username" placeholder="Nhập tên đăng nhập hoặc email" />
            <InputCombo label="Mật khẩu:" type="password" id="password" name="password" placeholder="Nhập mật khẩu" />

            <button className="mt-6 bg-darkCF w-full text-lightCF px-2 py-3 ">ĐĂNG NHẬP</button>
            <p className="mt-2 text-center">
                Bạn là khách hàng mới?
                <span className="ml-1 underline cursor-pointer">
                    <Link to="/register">Tạo tài khoản</Link>
                </span>
            </p>
            <p className="mt-1 text-center">
                Bạn không nhớ mật khẩu?
                <span className="ml-1 underline cursor-pointer">
                    <Link to="/forgotpassword">Nhấn vào đây</Link>
                </span>
            </p>
        </div>
    );
}

export default Login;
