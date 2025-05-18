import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // 127.0.0.1:8000
const API_URL = `${BACKEND_URL}/api/products`;

const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.log("Lỗi ở hàm lấy toàn bộ sản phẩm: ", error);
        throw error;
    }
};

const fetchProductById = async (id) => {
    try {
        const response = await axios.get();
    } catch (error) {
        console.log("Lỗi ở hàm lấy sản phẩm theo id: ", error);
        throw error;
    }
};

export const productService = {
    fetchAllProducts,
};
