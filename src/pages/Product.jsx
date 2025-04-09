import img from "../assets/images/S&B250.png";
import { Button, LinkButton } from "../components";
function Product() {
    return (
        <div className="font-gilroy text-base px-5 py-14">
            <h1 className="font-gilroy_xbold_italic text-stone-700 text-5xl ml-14 mb-2">SẢN PHẨM</h1>
            <div className="ml-14 w-[80%] flex justify-start gap-4 mb-6">
                <Button>Cà phê rang xay</Button>
                <Button>Cà phê hòa tan</Button>
                <Button>Cốt cà phê</Button>
                <Button>Dụng cụ pha</Button>
                <LinkButton path="/payment">test</LinkButton>
            </div>

            <div className="w-full flex flex-col gap-8 mt-12">
                <div className="w-full flex justify-center flex-wrap px-10 gap-8">
                    <div className="w-72 flex flex-col justify-center items-center shadow-lg rounded-sm">
                        <img src={img} alt="ảnh sản phẩm" className="w-64 h-64 rounded-sm" />
                        <div className="w-full h-fit px-4 py-4">
                            <p className="text-xl font-gilroy_italic">STRONG & BOLD</p>
                            <p className="text-sm font-gilroy_italic">Cà phê rang xay</p>
                            <p className="text-right mt-2 text-3xl font-gilroy_bold">125,000VNĐ</p>
                        </div>
                    </div>
                    <div className="w-72 flex flex-col justify-center items-center shadow-lg rounded-sm">
                        <img src={img} alt="ảnh sản phẩm" className="w-64 h-64 rounded-sm" />
                        <div className="w-full h-fit px-4 py-4">
                            <p className="text-xl font-gilroy_italic">STRONG & BOLD</p>
                            <p className="text-sm font-gilroy_italic">Cà phê rang xay</p>
                            <p className="text-right mt-2 text-3xl font-gilroy_bold">125,000VNĐ</p>
                        </div>
                    </div>
                    <div className="w-72 flex flex-col justify-center items-center shadow-lg rounded-sm">
                        <img src={img} alt="ảnh sản phẩm" className="w-64 h-64 rounded-sm" />
                        <div className="w-full h-fit px-4 py-4">
                            <p className="text-xl font-gilroy_italic">STRONG & BOLD</p>
                            <p className="text-sm font-gilroy_italic">Cà phê rang xay</p>
                            <p className="text-right mt-2 text-3xl font-gilroy_bold">125,000VNĐ</p>
                        </div>
                    </div>
                    <div className="w-72 flex flex-col justify-center items-center shadow-lg rounded-sm">
                        <img src={img} alt="ảnh sản phẩm" className="w-64 h-64 rounded-sm" />
                        <div className="w-full h-fit px-4 py-4">
                            <p className="text-xl font-gilroy_italic">STRONG & BOLD</p>
                            <p className="text-sm font-gilroy_italic">Cà phê rang xay</p>
                            <p className="text-right mt-2 text-3xl font-gilroy_bold">125,000VNĐ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
