function Button({ children, name }) {
    return (
        <button name={name} className="border border-brownCF px-4 py-2 h-10 hover:bg-brownCF hover:text-lightCF transition-all duration-200 ease-in-out">
            {children}
        </button>
    );
}
export default Button;
