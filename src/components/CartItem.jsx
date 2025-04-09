import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/S&B250.png";
function CartItem() {
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
                <div className="text-lg text-center text-gray-800 w-[11%]">đ196.000</div>
                <div className="flex items-center justify-center w-[11%] ">
                    <button className="w-8 h-8 border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200">-</button>
                    <input type="text" value="1" className="w-12 h-8 text-center border-t border-b border-gray-300 outline-none" />
                    <button className="w-8 h-8 border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200">+</button>
                </div>
                <div className="text-lg text-center text-red-500 w-[11%]">đ{196000 * 1}</div>
                <button className="mx-auto text-red-500 hover:underline w-[11%]">Xóa</button>
            </div>

            {/* Shipping Info */}
            <div className="mt-5 text-gray-500 flex items-center">
                <FontAwesomeIcon icon={faTruckFast} className="mr-4" />
                Giao đ300.000 phí vận chuyển đơn tối thiểu đ0; Giao đ500.000 phí vận chuyển đơn tối thiểu đ500.000 <span className="font-gilroy_italic ml-2 text-yellowCF">Tìm hiểu thêm</span>
            </div>
        </div>
    );
}

export default CartItem;
