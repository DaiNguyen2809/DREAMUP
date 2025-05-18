import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import cat1 from "../../assets/images/Artboard 5.png";
import cat2 from "../../assets/images/Artboard 6.png";
import cat3 from "../../assets/images/Artboard 7.png";
import cat4 from "../../assets/images/Artboard 8.png";
import { DialogFlowChart, RectangleUnderline } from "../../components";
import GOEimg from "../../assets/images/regis1.png";
import vnaMall from "../../assets/images/vna_mall.png";
import sentry from "../../assets/images/sentry.png";
import xp from "../../assets/images/xp.png";
import owen from "../../assets/images/owen.png";
import vna from "../../assets/images/vna.png";
import luminus from "../../assets/images/luminus.png";

const Home = () => {
    return (
        <div className="w-full h-fit bg-lightCF">
            <div id="banner" className="w-full relative">
                <img src={banner} alt="banner" className="" />
                <Link to="/product" className="font-gilroy_bold_italic text-white text-4xl px-8 py-3 rounded-sm text-center align-middle bg-greenCF absolute top-[30rem] left-56 shadow-2xl/30 border-4 border-yellowCF">
                    MUA NGAY
                </Link>
            </div>

            <div id="aboutDU" className="w-full h-fit py-20 px-16 flex justify-center gap-8">
                <div className="font-gilroy w-[58%] leading-loose text-justify">
                    <h1 className="text-6xl font-gilroy_xbold text-greenCF">VỀ DREAM UP</h1>
                    <p className="mt-3 text-xl font-gilroy_bold_italic text-yellowCF">DREAM UP – HÀNH TRÌNH LAN TỎA HẠT CÀ PHÊ SẠCH TỪ BÀ CON VÙNG CAO.</p>
                    <p className="mt-3 mb-6 text-lg leading-loose text-darkGreenCF">Dream Up tập trung nghiên cứu và phát triển các giải pháp nông nghiệp, đặc biệt là hợp tác với nông hộ nhỏ trong vùng trồng cà phê để xây dựng cộng đồng nông thôn. Mục tiêu của Dream Up là nâng cao chất lượng cuộc sống và thúc đẩy phát triển bền vững cho nông dân.</p>
                    <Link to="/about" className="text-2xl px-8 py-3 border-2 rounded-sm border-greenCF text-darkGreenCF font-gilroy_bold  transition-all duration-300 ease-in-out hover:bg-greenCF hover:text-white">
                        XEM THÊM
                    </Link>
                </div>
                <div className="w-[40%]">
                    <img src={GOEimg} alt="hình cộng đồng" className="rounded-md shadow-lg border-4 border-greenCF" />
                </div>
            </div>

            <DialogFlowChart />
            <div id="product" className="w-full h-fit pb-20 pt-10 px-16">
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

            <div id="product" className="w-full h-fit pb-20 pt-10 px-16">
                <h3 className="font-gilroy_xbold text-4xl text-greenCF">ĐỐI TÁC TIN DÙNG</h3>
                <RectangleUnderline className="h-0.5 w-[50%] bg-yellowCF"></RectangleUnderline>
                <div className="flex flex-col justify-center gap-10 ">
                    <div className="flex justify-center gap-16 mt-16">
                        <img src={vna} alt="" className="h-48 w-48" />
                        <img src={xp} alt="" className="h-48 w-48" />
                        <img src={sentry} alt="" className="h-48 w-48" />
                        <img src={owen} alt="" className="h-48 w-48" />
                    </div>
                    <div className="flex justify-center gap-16">
                        <img src={vnaMall} alt="" className="h-48 w-48" />

                        <img src={luminus} alt="" className="h-48 w-48" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
