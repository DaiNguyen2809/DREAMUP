function ProductBanner({ src }) {
    return (
        <div className="w-[49%] rounded-sm">
            <img src={src} alt="Cà phê hòa tan" className="h-56 bg-cover" />
        </div>
    );
}
export default ProductBanner;
