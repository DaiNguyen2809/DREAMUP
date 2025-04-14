import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/S&B250.png";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
function CartItem() {
    const unitPrice = 196000;
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (newValue) => {
        setQuantity(newValue);
        console.log("Số lượng mới trong giỏ hàng:", newValue);
        // Logic cập nhật giỏ hàng (ví dụ: gửi API, cập nhật state)
    };

    const totalPrice = unitPrice * quantity;

    return (
        <div className="mt-6 w-[90%] mx-auto bg-white rounded-sm p-5 border border-darkCF">
            <div className="flex items-center py-4 border-b">
                <div className="w-[55%] flex overflow-auto items-center">
                    <input type="checkbox" className="mr-6" />
                    <img src={img} alt="Product" className="w-24 h-auto mr-5" />
                    <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-800">GRACE ON EARTH JSC</h3>
                        <p className="text-sm text-gray-500">Cà phê rang xay DREAM UP Strong Bold rang mộc nguyên chất...</p>
                        <p className="text-sm text-gray-500">Hình thức: 1000gr</p>
                    </div>
                </div>
                <div className="text-lg text-center text-gray-800 w-[11%]">{Number(unitPrice).toLocaleString("en-US")}VNĐ</div>

                <QuantitySelector initialQuantity={4} minQuantity={1} maxQuantity={40} onChange={handleQuantityChange} />

                <div className="text-lg text-center text-red-500 w-[11%]">{Number(totalPrice).toLocaleString("en-US")}VNĐ</div>
                <button className="mx-auto text-red-500 hover:underline w-[11%]">Xóa</button>
            </div>

            {/* Shipping Info */}
            <div className="mt-5 text-gray-500 flex items-center">
                <FontAwesomeIcon icon={faTruckFast} className="mr-4" />
                Giao đ300.000 phí vận chuyển đơn tối thiểu đ0; Giao đ500.000 phí vận chuyển đơn tối thiểu đ500.000 <span className="font-gilroy_italic ml-2 text-yellowCF cursor-pointer">Tìm hiểu thêm</span>
            </div>
        </div>
    );
}

export default CartItem;
