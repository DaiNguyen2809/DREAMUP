import { Link, useNavigate } from "react-router-dom";
import { InputCombo } from "../components";
import { useState } from "react";
import axios from "axios";
function Login() {
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
                "http://127.0.0.1:8000/api/login",
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
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.data.user));

                if (response.data.data.user.role === 0) {
                    navigate("/");
                } else {
                    window.location.href = "http://127.0.0.1:8000/admin/dreamup";
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
        <div className="w-[45%] px-10 py-10 bg-lightCF font-gilroy text-base mx-auto my-20">
            <h1 className="font-gilroy_bold text-4xl text-center">ĐĂNG NHẬP</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputCombo onChange={handleChange} label="Email:" type="text" id="email" name="email" placeholder="Nhập email đăng nhập" value={formData.email} />
                <InputCombo onChange={handleChange} label="Mật khẩu:" type="password" id="password" name="password" placeholder="Nhập mật khẩu" value={formData.password} />
                <button type="submit" className="mt-6 bg-darkCF w-full text-lightCF px-2 py-3 ">
                    ĐĂNG NHẬP
                </button>
            </form>

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
