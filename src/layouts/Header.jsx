import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_dream_up.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LinkButton } from "../components";

const Header = React.memo(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    const handleUpdateUser = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        else setUser(null);
    };

    useEffect(() => {
        handleUpdateUser();
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener("storage", handleUpdateUser());
        return () => {
            window.removeEventListener("storage", handleUpdateUser());
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <div className="w-full">
            <div className="bg-yellowCF w-full h-8 px-10 text-darkCF text-sm font-gilroy flex items-center justify-end">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <Link to="/profile/user" className="hover:underline">
                            Xin chào, {user.name}
                        </Link>
                        <span className="mr-3 ml-3">|</span>
                        <button onClick={handleLogout} className="hover:underline">
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className="hover:underline">
                            Đăng nhập
                        </Link>
                        <span className="mr-3 ml-3">|</span>
                        <Link to="/register" className="hover:underline">
                            Đăng ký
                        </Link>
                    </div>
                )}
            </div>
            <div className="bg-darkGreenCF text-lightCF w-full h-20 flex justify-center items-center px-10 py-4 shadow-lg font-gilroy text-base">
                <div className="w-[15%]">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-12" />
                    </Link>
                </div>
                <div className="ml-4 w-[45%] flex justify-center gap-12">
                    <Link to="/">Trang chủ</Link>
                    <Link to="/product">Sản phẩm</Link>
                    <Link to="/about">Về Dream Up</Link>
                    <Link to="/event">Tin tức & sự kiện</Link>
                </div>
                <div className="ml-8 w-[40%] flex gap-2 items-center justify-end">
                    <LinkButton path="/quiz" className="text-brownCF">
                        Coffee Quiz
                    </LinkButton>
                    <div className="relative w-[55%] ml-4 flex items-center text-sm">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-3 w-4 h-4 text-gray-500 cursor-pointer" />
                        <input type="text" placeholder="Nhập thông tin tìm kiếm" class="w-full h-10 pl-10 pr-4 py-2 text-darkCF border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} className=" ml-8 w-6 h-6 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
});

export default Header;
