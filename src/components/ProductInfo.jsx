import { RectangleUnderline, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCoins, faHeart, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
function ProductInfo({ product }) {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[47%] 2xl:w-[35%] h-fit">
                <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt="ảnh sản phẩm" className="max-w-xl shadow-md" />
                <div className="max-w-xl flex justify-between mt-4">
                    <img src={`http://127.0.0.1:8000/storage/${product.image2}`} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                    <img src={`http://127.0.0.1:8000/storage/${product.image3}`} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                    <img src={`http://127.0.0.1:8000/storage/${product.image4}`} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                    <img src={`http://127.0.0.1:8000/storage/${product.image5}`} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                    <img src={`http://127.0.0.1:8000/storage/${product.image6}`} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                </div>
            </div>
            <div className="w-[53%] 2xl:w-[55%] leading-relaxed">
                <h2 className="text-6xl font-gilroy_bold text-darkCF">{product.name}</h2>
                <p className="mt-4 text-4xl font-gilroy_bold_italic text-yellowCF">{Number(product.price).toLocaleString("vi-VN")}</p>
                <RectangleUnderline />
                <div className="w-full flex items-center mt-8 text-brownCF">
                    <p className="mr-4 text-darkCF">Cỡ xay:</p>
                    <div className="flex gap-3">
                        <Button name="bean">Hạt (Bean)</Button>
                        <Button name="ground">Bột (Ground)</Button>
                    </div>
                </div>
                <div className="w-full flex items-center mt-8 text-brownCF">
                    <p className="mr-4 text-darkCF">Kích thước:</p>
                    <div className="flex gap-3">
                        <Button name="250gr">250gr</Button>
                        <Button name="500gr">500gr</Button>
                        <Button name="1000gr">1000gr</Button>
                    </div>
                </div>
                <div className="w-full flex items-center mt-8 text-brownCF">
                    <p className="mr-4 text-darkCF">Số lượng:</p>
                    <div className="relative">
                        <input type="number" className="border text-center border-brownCF px-2 py-2 w-32 h-10" value="1" />
                        <button className="absolute left-0 top-0 w-10 h-10 text-brownCF rounded-l hover:bg-opacity-80">-</button>
                        <button className="absolute right-0 top-0 w-10 h-10 text-brownCF rounded-r hover:bg-opacity-80">+</button>
                    </div>
                    <span className="ml-4 text-darkCF font-gilroy_italic">80890 sản phẩm có sẵn</span>
                </div>
                <div className="mt-8 w-full flex flex-col justify-end text-brownCF">
                    <p className="font-gilroy_bold text-lg text-darkCF">Giới thiệu bạn bè</p>
                    <div className="w-[20%]">
                        <Button name="affiliates">/detai/strong&bold/QuocDai2k3</Button>
                    </div>
                    <span className="text-amber-500 mt-2 font-gilroy_thin_italic">
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                        Xem chi tiết
                    </span>
                </div>

                <div className="w-full flex flex-col gap-3 mt-8 text-brownCF">
                    <div className="flex w-full gap-3">
                        <button className="border border-brownCF px-4 py-2 h-14 w-[10%] text-lg">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>

                        <button className="border border-brownCF px-4 py-2 h-14 w-full text-lg">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-4" />
                            Thêm vào giỏ hàng
                        </button>
                    </div>

                    <button className="border border-lightCF bg-brownCF text-lightCF px-4 py-2 h-14 w-full text-lg">
                        <FontAwesomeIcon icon={faCoins} className="mr-4" />
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;
