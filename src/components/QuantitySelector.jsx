import { useState } from "react";

function QuantitySelector({ initialQuantity = 1, minQuantity = 1, maxQuantity = Infinity, onChange, disabled = false }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleChange = (e) => {
        const newQuantity = e.target.value;
        if (isNaN(newQuantity)) return; //skip
        if (newQuantity >= minQuantity && newQuantity <= maxQuantity) {
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    const increaseQuantity = () => {
        if (quantity < maxQuantity) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > minQuantity) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    return (
        <div className="flex items-center justify-center w-[11%] ">
            <button onClick={decreaseQuantity} disabled={disabled || quantity <= minQuantity} className="w-8 h-8 border border-darkCF text-darkCF">
                -
            </button>
            <input type="text" value={quantity} onChange={handleChange} min={minQuantity} max={maxQuantity} disabled={disabled} className="w-12 h-8 text-center border-t border-b border-darkCF outline-none" />
            <button onClick={increaseQuantity} disabled={disabled || quantity >= maxQuantity} className="w-8 h-8 border border-darkCF text-darkCF">
                +
            </button>
        </div>
    );
}
export default QuantitySelector;
