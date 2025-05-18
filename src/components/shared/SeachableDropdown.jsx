import { useState, useEffect, useRef } from "react";

const SearchableDropdown = ({ label, options = [], onSelect, placeholder = "Chọn...", disabled = false }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedOption, setSelectedOption] = useState(null);
    const containerRef = useRef();

    useEffect(() => {
        setFilteredOptions(options.filter((opt) => opt.name.toLowerCase().includes(search.toLowerCase())));
    }, [search, options]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (opt) => {
        setSelectedOption(opt);
        onSelect(opt);
        setOpen(false);
        setSearch(""); // Reset tìm kiếm
    };

    return (
        <div className="w-full relative mt-2" ref={containerRef}>
            {label && <label className="block mb-1 text-sm font-medium">{label}</label>}

            <button type="button" className={`w-full h-full pl-3 pr-10 py-2 border ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer"} border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500`} onClick={() => !disabled && setOpen(!open)} disabled={disabled}>
                <span>{selectedOption ? selectedOption.name : placeholder}</span>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-4 border-t-gray-500"></div>
                </div>
            </button>

            {open && !disabled && (
                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none" placeholder="Tìm kiếm..." />
                    <ul className="max-h-60 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt) => (
                                <li key={opt.id} onClick={() => handleSelect(opt)} className="px-3 py-2 cursor-pointer hover:bg-gray-200">
                                    {opt.name}
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-gray-500 italic">Không tìm thấy</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default SearchableDropdown;
