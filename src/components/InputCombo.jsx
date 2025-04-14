function InputCombo({ label, type, name, id, placeholder, value, onChange }) {
    return (
        <div className="w-full mt-4">
            <label htmlFor={id}>{label}</label>
            <input onChange={onChange} value={value} type={type} name={name} id={id} className="h-10 w-full px-4 border border-brownCF rounded-sm mt-2" placeholder={placeholder} />
        </div>
    );
}
export default InputCombo;
