function ProductCard({ product }) {
    return (
        <div className="w-72 flex flex-col justify-center items-center shadow-lg rounded-sm cursor-pointer">
            <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt="ảnh sản phẩm" className="w-72 h-72 rounded-md" />
            <div className="w-full h-fit px-4 py-4">
                <p className="text-xl font-gilroy_italic">{product.name}</p>
                <p className="text-sm font-gilroy_italic">{product.category}</p>
                <p className="text-right mt-2 text-3xl font-gilroy_bold">{Number(product.price).toLocaleString("en-US")}VNĐ</p>
            </div>
        </div>
    );
}
export default ProductCard;
