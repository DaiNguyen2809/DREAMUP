import { Link } from "react-router-dom";

function LinkButton({ path, children }) {
    return (
        <Link to={path} className="border border-yellowCF px-4 py-2 h-10 hover:bg-yellowCF hover:text-brownCF transition-all duration-200 ease-in-out">
            {children}
        </Link>
    );
}
export default LinkButton;
