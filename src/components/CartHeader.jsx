function CartHeader() {
    return (
        <div className="w-[90%] mx-auto bg-white px-5 pt-5 pb-2 rounded-sm border border-darkCF">
            <div className="flex items-center border-b pb-3 mb-5">
                <label className="flex items-center font-semibold w-[55%]">
                    <input type="checkbox" className="mr-6" />
                    Sản Phẩm
                </label>
                <span className="text-center text-gray-500 w-[11%]">Đơn Giá</span>
                <span className="text-center text-gray-500 w-[11%]">Số Lượng</span>
                <span className="text-center text-gray-500 w-[11%]">Số Tiền</span>
                <span className="text-center text-gray-500 w-[11%]">Thao Tác</span>
            </div>
        </div>
    );
}
export default CartHeader;
