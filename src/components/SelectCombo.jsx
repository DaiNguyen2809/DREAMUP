function SelectCombo({ label, name, id, content }) {
    return (
        <div className="w-full mt-4">
            <label htmlFor={id}>{label}:</label>
            <select name={name} id={id} className="h-10 w-full px-4 border border-brownCF rounded-sm mt-2">
                <option value="" disabled selected>
                    {content}
                </option>
            </select>
        </div>
    );
}

export default SelectCombo;
