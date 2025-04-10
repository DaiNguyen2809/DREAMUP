import { InputCombo } from "../components";
import { Link } from "react-router-dom";
function ForgotPassword() {
    return (
        <div className="w-[45%] px-10 py-10 bg-lightCF font-gilroy text-base mx-auto my-20">
            <h1 className="font-gilroy_bold text-4xl text-center">KHÔI PHỤC MẬT KHẨU</h1>
            <p className="w-[80%] mx-auto mt-4 text-center">Chúng tôi sẽ gửi tin nhắn khôi phục mật khẩu thông qua email của bạn. Vui lòng nhập email</p>
            <InputCombo label="Email khôi phục:" type="email" id="email" name="email" placeholder="Email" />
            <button className="mt-6 bg-darkCF w-full text-lightCF px-2 py-3 ">KHÔI PHỤC</button>
            <p className="mt-2">
                Bạn đẫ nhớ mật khẩu?
                <span className="ml-1 underline cursor-pointer">
                    <Link to="/login">Trở lại đăng nhập</Link>
                </span>
            </p>
        </div>
    );
}
export default ForgotPassword;
