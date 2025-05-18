import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductCard({ product }) {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    return (
        <div className="w-56 flex flex-col justify-center items-center shadow-lg rounded-sm cursor-pointer">
            <img src={`${backendUrl}/storage/${product.image}`} alt="ảnh sản phẩm" className="w-56 h-56 rounded-md" />
            <div className="w-full h-40 px-4 py-2 flex flex-col justify-between">
                <div className="w-full">
                    <p className="mt-2 text-xl font-gilroy_bold">{Number(product.price).toLocaleString("en-US")}VNĐ</p>
                    <p className="text-sm mt-1">{product.name} - CÀ PHÊ RANG MỘC ĐẬM CHẤT VIỆT</p>
                </div>
                <div className="text-xs font-gilroy_italic mt-4">
                    <span>
                        <FontAwesomeIcon icon={faStar} /> 5.0
                    </span>{" "}
                    <span className="float-right">576 đã bán</span>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
