import { RectangleUnderline } from "../../components";
import { Container, Title } from "../../components/shared";
import { EventItem } from "../../components/event";
const Event = () => {
    return (
        <Container>
            <div className="w-[90%] h-fit flex justify-between gap-8 mt-24 mb-24">
                <div className="w-[75%] h-fit flex flex-col">
                    <Title>TIN TỨC & SỰ KIỆN</Title>
                    <RectangleUnderline className="h-px w-full bg-darkCF" />
                    <div className="mt-8 w-full h-fit flex justify-center gap-8">
                        <EventItem />
                        <EventItem />
                        <EventItem />
                    </div>

                    <div className="mt-8 w-full h-fit flex justify-center gap-8">
                        <EventItem />
                        <EventItem />
                        <EventItem />
                    </div>
                </div>
                <div className="w-[25%] h-fit">
                    <Title>BÀI VIẾT MỚI</Title>
                    <RectangleUnderline className="h-px w-full bg-darkCF mb-8" />
                    <li className="leading-loose text-sm">KATINAT CHÍNH THỨC RA MẮT DÒNG SẢN PHẨM MATCHA – DẤU ẤN ĐỘC ĐÁO TRÊN HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI</li>
                    <li className="leading-loose text-sm">KATINAT CHÍNH THỨC RA MẮT DÒNG SẢN PHẨM MATCHA – DẤU ẤN ĐỘC ĐÁO TRÊN HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI</li>
                    <li className="leading-loose text-sm">KATINAT CHÍNH THỨC RA MẮT DÒNG SẢN PHẨM MATCHA – DẤU ẤN ĐỘC ĐÁO TRÊN HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI</li>
                    <li className="leading-loose text-sm">KATINAT CHÍNH THỨC RA MẮT DÒNG SẢN PHẨM MATCHA – DẤU ẤN ĐỘC ĐÁO TRÊN HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI</li>
                </div>
            </div>
        </Container>
    );
};
export default Event;
