import { InputCombo } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import regisImg1 from "../assets/images/regis1.png";
import regisImg2 from "../assets/images/regis2.jpg";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
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

        if (!formData.name.trim()) {
            setUsernameError("Tên đăng nhập không được để trống!");
            return;
        }

        if (!formData.email.trim()) {
            setEmailError("Email không được để trống!");
            return;
        }

        if (!formData.phone.trim()) {
            setPhoneError("Số điện thoại không được để trống!");
            return;
        }

        // if (/^[0-9]{10}$/.test(formData.phone)) {
        //     setPhoneError("Số điện thoại phải có 10 ký tự là số!");
        //     return;
        // }

        if (formData.password.length < 8 || formData.confirmPassword < 8) {
            setPasswordError("Mật khẩu phải có tối thiểu 8 ký tự");
            return;
        }

        if (!/[A-Z]/.test(formData.password) || !/[A-Z]/.test(formData.confirmPassword)) {
            setPasswordError("Mật khẩu phải có tối thiểu 1 ký tự in hoa");
            return;
        }

        if (!/[0-9]/.test(formData.password) || !/[0-9]/.test(formData.confirmPassword)) {
            setPasswordError("Mật khẩu phải có tối thiểu 1 ký tự là số");
            return;
        }

        if (!/[\W_]/.test(formData.password) || !/[\W_]/.test(formData.confirmPassword)) {
            setPasswordError("Mật khẩu phải có tối thiểu 1 ký tự đặc biệt");
            return;
        }

        if (/^[\\/]/.test(formData.password) || /^[\\/]/.test(formData.confirmPassword)) {
            setPasswordError("Mật khẩu không được bắt đầu bằng ký tự \\ hoặc /.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Mật khẩu không khớp");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
            });

            if (response.data.success) {
                try {
                    const loginResponse = await axios.post(
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

                    if (loginResponse.data.success) {
                        const token = loginResponse.data.data.token;
                        localStorage.setItem("token", token);
                        localStorage.setItem("user", JSON.stringify(loginResponse.data.data.user));

                        if (loginResponse.data.data.user.role === 0) {
                            navigate("/");
                        } else {
                            localStorage.setItem("admin_token", loginResponse.data.data.admin_token);
                            window.location.href = `http://127.0.0.1:8000/admin/verify?token=${loginResponse.data.data.admin_token}`;
                        }
                    }
                } catch (err) {
                    if (err.response) {
                        setError(err.response.data.message || "Đăng nhập thất bại!");
                    } else {
                        setError("Lỗi kết nối server!");
                    }
                }
            } else {
                setError("Đăng nhập thất bại sau khi đăng ký");
            }
        } catch (err) {
            setError("Có lỗi xảy ra, vui lòng thử lại");
        }
    };

    return (
        <div className="w-full h-fit">
            <div className="w-[85%] mx-auto py-[7.5rem] flex justify-center gap-10">
                <div className="w-[45%] font-gilroy text-base mx-auto">
                    <h1 className="text-greenCF font-gilroy_xbold text-4xl text-center">ĐĂNG KÝ</h1>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <InputCombo onChange={handleChange} message={usernameError && usernameError} label="Họ và tên:" type="text" id="name" name="name" placeholder="Họ và tên" value={formData.name} className="border-1.5 border-greenCF" />
                    <InputCombo onChange={handleChange} message={emailError && emailError} label="Email:" type="email" id="email" name="email" placeholder="Email" value={formData.email} className="border-1.5 border-greenCF" />
                    <InputCombo onChange={handleChange} message={phoneError && phoneError} label="Số điện thoại:" type="number" id="phone" name="phone" placeholder="Số điện thoại" value={formData.phone} className="border-1.5 border-greenCF" />
                    <InputCombo onChange={handleChange} message={passwordError && passwordError} label="Mật khẩu:" type="password" id="password" name="password" placeholder="Mật khẩu" value={formData.password} className="border-1.5 border-greenCF" />
                    <InputCombo onChange={handleChange} message={passwordError && passwordError} label="Xác nhận mật khẩu:" type="password" id="confirmPassword" name="confirmPassword" placeholder="Mật khẩu" value={formData.confirmPassword} className="border-1.5 border-greenCF" />
                    <button onClick={handleSubmit} className="mt-6 bg-greenCF w-full text-lightCF px-2 py-3 ">
                        ĐĂNG KÝ
                    </button>

                    <p className="mt-2 text-left">
                        Bạn đã có tài khoản?
                        <span className="ml-1 underline cursor-pointer">
                            <Link to="/login">Đăng nhập ngay</Link>
                        </span>
                    </p>
                </div>
                <div className="w-[40% flex flex-col gap-8 justify-between">
                    <img src={regisImg1} alt="hình 1" className="h-72 object-cover border-2 border-darkCF shadow-xl rounded-sm" />
                    <img src={regisImg2} alt="hình 2" className="h-72 object-cover border-2 border-darkCF shadow-xl rounded-sm" />
                </div>
            </div>
        </div>
    );
}

export default Register;
