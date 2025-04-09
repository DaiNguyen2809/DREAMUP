function PaymentItem(img) {
    return (
        <div className="flex items-center justify-between py-4 px-6 mb-6">
            <div className="w-[60%] flex overflow-x-scroll items-center">
                <img src={img} alt="Product" className="w-24 h-auto mr-3" />
                <div className="flex-1">
                    <h3 className="text-base text-gray-800">Cà phê rang xay DREAM UP Strong Bold rang mộc nguyên chất... hahahahahahahahahahahahhaha</h3>
                    <p className="text-sm text-gray-500">Hình thức: 1000gr</p>
                </div>
            </div>
            <div className="w-[30%] h-24 flex flex-col justify-end">
                <p className="text-right font-gilroy_italic">SL: 1</p>
                <p className="text-xl text-right font-gilroy_bold_italic">196,000 VNĐ</p>
            </div>
        </div>
    );
}

export default PaymentItem;
