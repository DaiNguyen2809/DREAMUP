function InputCombo({ label, type, name, id, placeholder, value, onChange, message, className }) {
    return (
        <div className="w-full mt-4">
            <label htmlFor={id}>{label}</label>
            <span className="text-red-600 ml-4 text-sm">{message}</span>
            <input onChange={onChange} value={value} type={type} name={name} id={id} className={`${className} h-10 w-full px-4 border border-brownCF rounded-sm mt-2`} placeholder={placeholder} />
        </div>
    );
}
export default InputCombo;
