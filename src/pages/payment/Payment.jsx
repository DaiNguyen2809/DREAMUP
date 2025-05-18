import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo_dream_up_black.png";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RectangleUnderline, InputCombo, SelectCombo, PaymentItem } from "../../components";
import img from "../../assets/images/S&B250.png";
function Payment() {
    return (
        <div className="w-full bg-white font-gilroy text-base text-darkCF">
            <div className="w-[85%] flex py-10 mx-auto">
                <div className="w-[55%] h-fit pb-6">
                    <div className="w-full flex justify-between px-6 py-6 items-center">
                        <Link to="/">
                            <img src={logo} alt="" className="w-[40%]" />
                        </Link>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingBag} className="text-2xl" />
                        </Link>
                    </div>

                    <div className="w-full px-6">
                        <h3 className="font-gilroy_bold text-brownCF">THÔNG TIN GIAO HÀNG</h3>
                        <RectangleUnderline />
                        <InputCombo label="Họ và tên" type="text" placeholder="Nhập họ và tên" name="name" id="id" />
                        <div className="w-full flex justify-between">
                            <div className="w-[49%]">
                                <InputCombo label="Số điện thoại" type="text" placeholder="Nhập số điện thoại" name="phone" id="phone" />
                            </div>
                            <div className="w-[49%]">
                                <InputCombo label="Email" type="text" placeholder="Nhập email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="w-[49%]">
                                <SelectCombo label="Khu vực" name="area" id="area" content="Chọn khu vực" />
                            </div>
                            <div className="w-[49%]">
                                <SelectCombo label="Phường/Xã" name="ward" id="ward" content="Chọn phường/xã" />
                            </div>
                        </div>
                        <InputCombo label="Địa chỉ cụ thể" name="address" id="address" type="text" placeholder="Nhập địa chỉ" />

                        <h3 className="mt-6 font-gilroy_bold text-brownCF">PHƯƠNG THỨC THANH TOÁN</h3>
                        <RectangleUnderline />
                        <div class="mt-4 flex items-center ps-4 border border-brownCF rounded-sm cursor-pointer">
                            <input id="bordered-radio-1" type="radio" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="bordered-radio-1" class="w-full py-3 ms-2 text-darkCF">
                                Thanh toán khi nhận hàng (COD)
                            </label>
                        </div>

                        <div class="mt-4 flex items-center ps-4 border border-brownCF rounded-sm cursor-pointer">
                            <input id="bordered-radio-2" type="radio" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="bordered-radio-2" class="w-full py-3 ms-2 text-darkCF">
                                Thanh toán bằng thẻ ngân hàng
                            </label>
                        </div>

                        <div class="mt-4 flex items-center ps-4 border border-brownCF rounded-sm cursor-pointer">
                            <input id="bordered-radio-2" type="radio" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="bordered-radio-2" class="w-full py-3 ms-2 text-darkCF">
                                Thanh toán bằng ví MoMo
                            </label>
                        </div>

                        <div class="mt-4 flex items-center ps-4 border border-brownCF rounded-sm cursor-pointer">
                            <input id="bordered-radio-2" type="radio" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="bordered-radio-2" class="w-full py-3 ms-2 text-darkCF">
                                Thanh toán bằng điểm thành viên (Loyalty)
                            </label>
                        </div>

                        <button className="mt-6 w-full px-4 py-4 bg-darkCF text-lightCF text-xl font-gilroy_bold">ĐẶT HÀNG</button>
                    </div>
                </div>

                <div className="w-[45%] h-fit">
                    <PaymentItem img={img} />
                    <PaymentItem img={img} />
                    <PaymentItem img={img} />
                    <div className="w-full flex flex-col px-5 mt-6">
                        <div className="w-full flex justify-between">
                            <p>Tổng tiền hàng:</p>
                            <p>150,000 VNĐ</p>
                        </div>
                        <div className="w-full flex justify-between mt-3">
                            <p>Phí giao hàng:</p>
                            <p>50,000 VNĐ</p>
                        </div>
                        <div className="w-full flex justify-between mt-4">
                            <p className="text-2xl font-gilroy_bold">TỔNG TIỀN:</p>
                            <p className="text-2xl font-gilroy_bold">200,000 VNĐ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;
