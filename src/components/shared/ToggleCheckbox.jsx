import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const ToggleCheckBox = ({ title, items, show, setShow }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(!show)}>
                <h3 className="font-semibold mb-2">{title}</h3>
                <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} size="sm" />
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-1">
                    {items.map((item) => (
                        <label key={item} className="block">
                            <input type="checkbox" className="mr-2" />
                            {item}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ToggleCheckBox;
