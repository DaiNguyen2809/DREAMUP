import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const ToggleSelect = ({ title, items, show, setShow }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(!show)}>
                <h3 className="font-semibold mb-2">{title}</h3>
                <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} size="sm" />
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-1">
                    <span className="mr-4">Tối thiểu:</span>
                    <select className="border border-darkCF px-2 py-1 h-8 w-full">
                        <option value="0">Không</option>
                        <option value="1">50,000đ</option>
                        <option value="2">100,000đ</option>
                        <option value="3">200,000đ</option>
                    </select>
                </div>
                <div className="space-y-1 mt-4">
                    <span className="mr-4">Tối đa:</span>
                    <select className="border border-darkCF px-2 py-1 h-8 w-full">
                        <option value="0">Không</option>
                        <option value="1">300,000 VNĐ</option>
                        <option value="2">500,000 VNĐ</option>
                        <option value="3">1,000,000 VNĐ</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default ToggleSelect;
