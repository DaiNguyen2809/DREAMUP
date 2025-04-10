import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_dream_up.png";
import { Link } from "react-router-dom";
import { LinkButton } from "../components";

function Header() {
    return (
        <div className="bg-darkCF text-lightCF w-full h-20 flex justify-center items-center px-10 py-4 shadow-lg font-gilroy text-base">
            <div className="w-[15%]">
                <img src={logo} alt="logo" className="h-12" />
            </div>
            <div className="ml-4 w-[45%] flex justify-center gap-12">
                <Link to="/">Trang chủ</Link>
                <Link to="/product">Sản phẩm</Link>
                <Link to="/about">Về Dream Up</Link>
                <Link to="/blog">Bài viết</Link>
            </div>
            <div className="ml-8 w-[40%] flex gap-2 items-center justify-end">
                <LinkButton path="/quiz" className="text-brownCF">
                    Coffee Quiz
                </LinkButton>
                <div className="relative w-[40%] ml-4 flex items-center text-sm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-3 w-4 h-4 text-gray-500 cursor-pointer" />
                    <input type="text" placeholder="Nhập thông tin tìm kiếm" class="w-full h-10 pl-10 pr-4 py-2 text-darkCF border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <Link to="/login">
                    <FontAwesomeIcon icon={faUser} className="ml-8 w-6 h-6 cursor-pointer" />
                </Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} className=" ml-8 w-6 h-6 cursor-pointer" />
                </Link>
            </div>
        </div>
    );
}

export default Header;
