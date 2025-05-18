import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const Product = lazy(() => import("./pages/product/Product"));
const Quiz = lazy(() => import("./pages/quiz/Quiz"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Payment = lazy(() => import("./pages/payment/Payment"));
const Event = lazy(() => import("./pages/event/Event"));
const About = lazy(() => import("./pages/about/About"));
const Login = lazy(() => import("./pages/account/Login"));
const Logout = lazy(() => import("./pages/account/Logout"));
const Register = lazy(() => import("./pages/account/Register"));
const ForgotPassword = lazy(() => import("./pages/account/ForgotPassword"));
const ProfileCustomer = lazy(() => import("./pages/profile/ProfileCustomer"));
const User = lazy(() => import("./pages/profile/user/User"));
const Purchase = lazy(() => import("./pages/profile/purchase/Purchase"));
const Notifications = lazy(() => import("./pages/profile/notification/Notifications"));
const ProductDetail = lazy(() => import("./pages/product/ProductDetail"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Đang tải trang...</div>}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/product/detail/:sku" element={<ProductDetail />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/event" element={<Event />}></Route>
                <Route path="/quiz" element={<Quiz />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                <Route path="/profile" element={<ProfileCustomer />}>
                    <Route index element={<User />} />
                    <Route path="user" element={<User />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="purchase" element={<Purchase />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
