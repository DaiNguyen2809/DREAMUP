import { Link, useNavigate } from "react-router-dom";
import { InputCombo } from "../../components";
import { useState } from "react";
import axios from "axios";
import loginImg from "../../assets/images/login.jpg";
function Login() {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                `${backendUrl}/api/login`,
                {
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            if (response.data.success) {
                const token = response.data.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(response.data.data.user));

                if (response.data.data.user.role === 0) {
                    navigate("/");
                } else {
                    localStorage.setItem("admin_token", response.data.data.admin_token);
                    window.location.href = `${backendUrl}/admin/verify?token=${response.data.data.admin_token}`;
                }
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "Đăng nhập thất bại!");
            } else {
                setError("Lỗi kết nối server!");
            }
        }
    };

    return (
        <div className="w-full h-screen">
            <div className="w-[85%] mx-auto py-[7.5rem] flex justify-center gap-10">
                <div className="w-[38%] flex justify-center">
                    <img src={loginImg} alt="hình ảnh" className="h-[35rem] rounded-sm shadow-xl border-2 border-darkCF" />
                </div>
                <div className="w-[40%] flex flex-col font-gilroy text-base my-auto">
                    <h1 className="text-greenCF font-gilroy_xbold text-4xl text-center">ĐĂNG NHẬP</h1>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <InputCombo onChange={handleChange} label="Email:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" value={formData.email} className="border-1.5 border-darkCF" />
                        <InputCombo onChange={handleChange} label="Mật khẩu:" type="password" id="password" name="password" placeholder="Nhập mật khẩu" value={formData.password} className="border-1.5 border-darkCF" />
                        <button type="submit" className="mt-6 bg-greenCF w-full text-lightCF px-2 py-3 ">
                            ĐĂNG NHẬP
                        </button>
                    </form>

                    <p className="mt-2 text-right">
                        Bạn là khách hàng mới?
                        <span className="ml-1 underline cursor-pointer">
                            <Link to="/register">Tạo tài khoản</Link>
                        </span>
                    </p>
                    <p className="mt-1 text-right">
                        Bạn không nhớ mật khẩu?
                        <span className="ml-1 underline cursor-pointer">
                            <Link to="/forgotpassword">Nhấn vào đây</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
