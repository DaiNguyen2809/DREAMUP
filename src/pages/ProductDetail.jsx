import { Button, LinkButton, RectangleUnderline } from "../components";
import img from "../assets/images/S&B250.png";
import choco from "../assets/images/chocolate.png";
import raisin from "../assets/images/raisins.png";
import nuts from "../assets/images/peanut.png";
import { faShoppingCart, faCoins, faHeart, faCircleInfo, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductDetail() {
    return (
        <div className="w-full font-gilroy text-base px-14 py-14 flex flex-col">
            <div className="w-full flex items-center">
                <div className="w-[47%] h-fit">
                    <img src={img} alt="ảnh sản phẩm" className="max-w-xl shadow-md" />
                    <div className="max-w-xl flex justify-between mt-4">
                        <img src={img} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                        <img src={img} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                        <img src={img} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                        <img src={img} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                        <img src={img} alt="ảnh sản phẩm" className="w-[19%] bg-red-100 shadow-sm" />
                    </div>
                </div>
                <div className="w-[53%] leading-relaxed">
                    <h2 className="text-6xl font-gilroy_bold text-darkCF">AROMATIC HARMONY</h2>
                    <p className="mt-4 text-4xl font-gilroy_bold_italic text-yellowCF">120,000VNĐ</p>
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

            <div className="w-full flex mt-32">
                <div className="w-full flex justify-center items-center">
                    <div className="w-[60%] flex flex-col items-start">
                        <p className="text-darkCF font-gilroy_bold_italic text-6xl mb-6">Thông tin hương vị</p>
                        <LinkButton path="/">
                            Cách pha chế
                            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                        </LinkButton>
                    </div>

                    <div className="w-[40%] flex flex-col justify-start text-brownCF">
                        <p className="mb-2 text-darkCF">GHI CHÚ HƯƠNG VỊ:</p>
                        <p className="mb-2">Holler Mountain delivers a burst of citrus and berry jam rounded out with notes of creamy caramel.</p>
                        <div className="flex justify-center gap-10 mt-3">
                            <div className="flex flex-col justify-center items-center mb-2">
                                <img src={choco} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                                <p>Sô-cô-la</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-2">
                                <img src={nuts} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                                <p>Hạt rang</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-2">
                                <img src={raisin} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                                <p>Nho khô</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 w-full  h-fit px-8 py-8 text-justify text-darkCF shadow-lg">
                <h2 className="text-xl font-gilroy_bold">MÔ TẢ SẢN PHẨM</h2>
                <div className="mt-2 mb-2 w-full h-0.5 bg-brownCF"></div>
                <p>• Cà phê Robusta mang vị đắng đậm hương thơm ngất ngây để lại hậu vị sau khi uống làm say lòng những người thưởng thức khó tính nhất. Thích hợp người gu cà phê mạnh. Dùng pha máy Espresso hoặc pha phin đều được.</p>
                <p>• 100% cà phê Robusta chín cây, được tuyển chọn kỹ càng, hạt to, chín đỏ mọng, phơi vòm. Quy trình chế biến được kiểm soát chặt chẽ, rang xay mộc nguyên chất theo phương pháp truyền thống.</p>
                <p>• Cà phê Robusta Lâm Đồng được trồng từ vùng nguyên liệu Di Linh - Lâm Đồng chất lượng.</p>
                <h2 className="mt-4 text-darkCF font-gilroy_bold">THÔNG TIN CHI TIẾT SẢN PHẨM: </h2>
                <p>Thành phần: 100% cà phê Robusta.</p>
                <p>Hướng dẫn sử dụng: tráng nhẹ phin, cho lượng cà phê khoảng 10-15gr, thêm vào 20ml nước sôi và chờ 20-25 giây. Rót nhẹ nhàng thêm nước vào phin đến khi lượng nước đạt vừa sở thích. Lấy phin ra, có thể thêm đường / sữa và đá tuỳ thích.</p>
                <p>Thông tin cảnh báo an toàn vệ sinh: không sử dụng khi sản phẩm có hiện tượng nấm mốc, mùi lạ.</p>
                <p>Quy cách đóng gói: cà phê đựng trong bao thiếc chuyên dụng, hộp thiếc ngoài giúp bảo quản cà phê cách tốt hơn, hiện đại, sang trọng, món quà sức khoẻ cho người thân.</p>
                <p>Ngày sản xuất: xem trên bao bì.</p>
                <p>Hạn sử dụng: 12 tháng kể từ ngày sản xuất. </p>
                <p>Nguồn gốc: sản phẩm GOE JSC - Việt Nam.</p>
            </div>
            <div className="mt-16 w-full flex justify-center flex-wrap px-10 gap-8">
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
    );
}
export default ProductDetail;
