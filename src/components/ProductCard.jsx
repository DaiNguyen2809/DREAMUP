function ProductCard(product) {
    return (
        <div className=" w-80 flex flex-col justify-center items-center shadow-md rounded-md">
            <img src={product.img} alt="ảnh sản phẩm" className="w-72 h-72 rounded-md" />
            <div className="w-full h-fit px-4 py-4">
                <p className="text-xl font-gilroy_italic">{product.name}</p>
                <p className="text-sm font-gilroy_italic">{product.category}</p>
                <p className="text-right mt-2 text-3xl font-gilroy_bold">{product.price}</p>
            </div>
        </div>
    );
}
export default ProductCard;
