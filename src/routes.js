import { Routes, Route } from "react-router-dom";
import { Home, About, Product, Blog, Quiz, Cart, ProductDetail, Payment, Register, Login, ForgotPassword } from "./pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/detail/:sku" element={<ProductDetail />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
    );
};

export default AppRoutes;
