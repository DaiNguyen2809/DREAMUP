import { CartHeader, CartItem } from "../../components";

function Cart() {
    return (
        <div className="w-full font-gilroy text-base px-14 py-14 flex flex-col">
            <CartHeader />
            <CartItem />
            <CartItem />
        </div>
    );
}

export default Cart;
