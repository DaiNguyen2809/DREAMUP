import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";
import cat1 from "../assets/images/Artboard 5.png";
import cat2 from "../assets/images/Artboard 6.png";
import cat3 from "../assets/images/Artboard 7.png";
import cat4 from "../assets/images/Artboard 8.png";
import { RectangleUnderline } from "../components";
function Home() {
    return (
        <div className="w-full h-fit">
            <div id="banner" className="w-full relative">
                <img src={banner} alt="banner" className="" />
                <Link to="/product" className="font-gilroy_bold_italic text-white text-4xl px-8 py-3 rounded-sm text-center align-middle bg-greenCF absolute top-[30rem] left-56 shadow-2xl/30 border-4 border-yellowCF">
                    MUA NGAY
                </Link>
            </div>
            <div id="product" className="w-full h-fit py-20 px-16">
                <h3 className="font-gilroy_xbold text-4xl text-center text-greenCF">BẠN CẦN SỰ TỈNH TÁO? CÀ PHÊ THÔI</h3>
                <RectangleUnderline className="h-0.5 w-[50%] mx-auto bg-yellowCF"></RectangleUnderline>
                <div className="mt-8 w-[90%] flex justify-between mx-auto">
                    <div className="w-[49%] h-56 rounded-sm">
                        <Link to="/product">
                            <img src={cat1} alt="Cà phê rang xay" className="h-56 bg-cover" />
                        </Link>
                    </div>
                    <div className="w-[49%] rounded-sm">
                        <img src={cat2} alt="Cà phê hòa tan" className="h-56 bg-cover" />
                    </div>
                </div>
                <div className="mt-8 w-[90%] flex justify-between mx-auto">
                    <div className="w-[49%] h-56 rounded-sm">
                        <img src={cat3} alt="Cà phê rang xay" className="h-56 bg-cover" />
                    </div>
                    <div className="w-[49%] rounded-sm">
                        <img src={cat4} alt="Cà phê hòa tan" className="h-56 bg-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
