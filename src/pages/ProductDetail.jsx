import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductInfo, ProductTaste } from "../components";
import ProductDescription from "../components/ProductDescription";

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { sku } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${sku}`);
                console.log("Dữ liệu API:", response.data);
                if (response.data && response.data.image && response.data.name && response.data.price) {
                    setProduct(response.data);
                } else {
                    setError("Dữ liệu sản phẩm không hợp lệ");
                }
            } catch (error) {
                setError("Không thể tải sản phẩm: " + error.message);
                console.log("Lỗi API:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [sku]);

    if (loading) return <p>Đang tải sản phẩm...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Sản phẩm không tồn tại</p>;
    return (
        <div className="w-full font-gilroy text-base px-14 py-14 flex flex-col">
            <ProductInfo product={product} />
            <ProductTaste />
            <ProductDescription />
        </div>
    );
}
export default ProductDetail;
