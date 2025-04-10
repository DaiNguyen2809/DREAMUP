import { useEffect, useState } from "react";
import { Button, LinkButton, ProductCard } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://127.0.0.1:8000/api/products");
                setProducts(response.data);
            } catch (error) {
                setError("Không thể load sản phẩm: " + error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="font-gilroy text-base px-5 py-14">
            <h1 className="font-gilroy_xbold_italic text-stone-700 text-5xl ml-14 mb-2">SẢN PHẨM</h1>
            <div className="ml-14 w-[80%] flex justify-start gap-4 mb-6">
                <Button>Cà phê rang xay</Button>
                <Button>Cà phê hòa tan</Button>
                <Button>Cốt cà phê</Button>
                <Button>Dụng cụ pha</Button>
                <LinkButton path="/payment">test</LinkButton>
            </div>

            <div className="w-full flex flex-col gap-8 mt-12">
                <div className="w-[90%] flex justify-start mx-auto flex-wrap px-10 gap-8">
                    {loading ? (
                        <p>Đang tải sản phẩm...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        products.map((product) => (
                            <Link key={product.SKU} to={`/product/detail/${product.SKU}`}>
                                <ProductCard key={product.SKU} product={product} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
