import { Routes, Route } from "react-router-dom";
import { Home, About, Product, Blog, Quiz, Cart, ProductDetail, Payment } from "./pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/detail" element={<ProductDetail />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
        </Routes>
    );
};

export default AppRoutes;
