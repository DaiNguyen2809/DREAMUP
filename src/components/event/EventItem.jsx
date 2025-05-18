import RectangleUnderline from "../RectangleUnderline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const EventItem = () => {
    return (
        <div className="bg-white w-1/3 h-fit">
            <div className="bg-yellow-500 h-48 w-full"></div>
            <h1 className="mt-2 text-justify">KATINAT CHÍNH THỨC RA MẮT DÒNG SẢN PHẨM MATCHA – DẤU ẤN ĐỘC ĐÁO TRÊN HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI </h1>
            <p className="text-sm mt-2">On: 01/04/2025</p>
            <p className="overflow-hidden mt-2 h-5">Lấy cảm hứng từ Iki (粋) – phong thái thẩm mỹ giản dị nhưng đầy chiều sâu của Nhật Bản, KATINAT mang đến hai phiên bản Matcha, mở ra hành trình khám phá hương vị mộc mạc nhưng tinh tế, với:</p>
            <RectangleUnderline className="w-full bg-yellowCF h-px" />
            <p className="mt-2 mr-2 mb-2 cursor-pointer text-right">
                Xem thêm
                <span className="ml-2">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </p>
        </div>
    );
};

export default EventItem;
