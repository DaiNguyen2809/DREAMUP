import logo from "../assets/images/logo_dream_up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="w-full h-fit px-16 py-16 bg-darkGreenCF font-gilroy text-lg text-white leading-loose flex flex-col justify-between">
                <div className="w-full flex justify-between">
                    <div className="w-[45%]">
                        <img src={logo} alt="logo" className="h-24 mb-2" />
                        <p className="font-gilroy_xbold">CÔNG TY CỔ PHẦN GRACE ON EARTH | GOE JSC</p>
                        <p className="font-gilroy_thin">Địa chỉ: 57/15, TX21, Thạnh Xuân, Quận 12, TP.HCM, Việt Nam</p>
                        <p className="font-gilroy_thin">
                            <span>
                                <FontAwesomeIcon icon={faPhone} className="mr-2" /> 0909 7087 24
                            </span>
                            <span className="ml-8">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> contact@dreamup.com
                            </span>
                        </p>
                        <p></p>
                    </div>

                    <div className="flex flex-col mt-4 font-gilroy_thin">
                        <h3 className="font-gilroy">Giới thiệu</h3>
                        <p className="cursor-pointer hover:underline">Về Dream Up</p>
                        <p className="cursor-pointer hover:underline">Hoạt động</p>
                        <p className="cursor-pointer hover:underline">Dự án</p>
                        <p className="cursor-pointer hover:underline">Cộng đồng</p>
                    </div>

                    <div className="flex flex-col mt-4 font-gilroy_thin">
                        <h3 className="font-gilroy">Sản phẩm</h3>
                        <p className="cursor-pointer hover:underline">Cà phê rang xay</p>
                        <p className="cursor-pointer hover:underline">Cà phê hòa tan</p>
                        <p className="cursor-pointer hover:underline">Nước cốt cà phê</p>
                        <p className="cursor-pointer hover:underline">Dụng cụ pha</p>
                    </div>

                    <div className="flex flex-col mt-4 font-gilroy_thin">
                        <h3 className="font-gilroy">Kiến thức</h3>
                        <p className="cursor-pointer hover:underline">Chọn loại cà phê nào</p>
                        <p className="cursor-pointer hover:underline">Bài viết</p>
                    </div>
                </div>
                <div className="w-full flex justify-between mt-20">
                    <div className="w-[55%] flex justify-between">
                        <span>
                            <FontAwesomeIcon icon={faCopyright} className="mr-2" /> GOE Coffee Roastery
                        </span>
                        <p className="cursor-pointer hover:underline">Điều khoản & điều kiện</p>
                        <p className="cursor-pointer hover:underline">Chính sách bảo mật</p>
                        <p className="cursor-pointer hover:underline">Liên hệ</p>
                    </div>
                    <div className="w-[16%] flex justify-between cursor-pointer ">
                        <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
                        <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
                        <FontAwesomeIcon icon={faPinterest} className="w-7 h-7" />
                        <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />
                        <FontAwesomeIcon icon={faYoutube} className="w-7 h-7" />
                    </div>
                </div>
            </div>
            <div className="w-full h-10 bg-yellowCF text-center text-darkCF py-2 font-gilroy_thin">2015 - Bản quyền trang web thuộc về Công ty TNHH Grace On Earth</div>
        </>
    );
}

export default Footer;
