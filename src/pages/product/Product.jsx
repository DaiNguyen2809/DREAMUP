import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { Container, ToggleCheckBox, ToggleSelect } from "../../components/shared";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faSort } from "@fortawesome/free-solid-svg-icons";
import { productService } from "../../services/product";
function Product() {
    const categories = ["Living", "Auto", "Gadget", "Fashion", "Electrics"];
    const weights = ["250g", "500g", "1kg", "200ml", "1l"];
    const [showCategories, setShowCategories] = useState(true);
    const [showPrices, setShowPrices] = useState(true);
    const [showWeights, setShowWeights] = useState(true);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await productService.fetchAllProducts();
                setProducts(response);
            } catch (error) {
                setError("Không thể load sản phẩm: " + error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <Container>
            <div className="w-[90%] flex justify-center mt-24 mb-24">
                <div className="bg-lightCF w-[20%] pt-8 pr-8 h-full">
                    <div className="w-full h-8 flex justify-start items-center mb-8">
                        <h1 className="text-2xl font-gilroy_bold">
                            <span className="mr-4">
                                <FontAwesomeIcon icon={faSliders} />
                            </span>
                            BỘ LỌC
                        </h1>
                    </div>
                    <ToggleCheckBox title="Loại sản phẩm" items={categories} show={showCategories} setShow={setShowCategories} />
                    <ToggleSelect title="Giá" items={categories} show={showPrices} setShow={setShowPrices} />
                    <ToggleSelect title="Khối lượng" items={weights} show={showWeights} setShow={setShowWeights} />
                </div>
                <div className="bg-lightCF w-[80%] h-fit border-l-[1px] border-darkCF pt-8 pl-8">
                    <div className="w-full h-8 flex justify-end items-center mb-4">
                        <span className="mr-4">
                            <FontAwesomeIcon icon={faSort} className="mr-2" />
                            Tìm kiếm bởi:
                        </span>
                        <select className="border border-darkCF px-4 py-2 h-10">
                            <option value="newest">Không</option>
                            <option value="newest">Sản phẩm mới nhất</option>
                            <option value="co_brand">Sản phẩm đồng thương hiệu</option>
                            <option value="most_buy">Lượt mua nhiều nhất</option>
                        </select>
                    </div>
                    <div className=" w-full h-fit">
                        <div className="w-full flex mt-8">
                            <div className="w-full 2xl:w-[90%] flex justify-between flex-wrap gap-8">
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
                </div>
            </div>
        </Container>
    );
}

export default Product;
