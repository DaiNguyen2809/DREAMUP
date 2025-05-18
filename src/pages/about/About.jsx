import { Container } from "../../components/shared";
import images from "../../assets/js/images.js";
import { RectangleUnderline, ScrollFade } from "../../components";
const About = () => {
    return (
        <Container>
            {/* nhà sáng lập */}
            <ScrollFade className="w-[90%] h-fit flex justify-between mt-24">
                <div className="w-[70%]">
                    <h1 className="text-4xl font-gilroy_xbold text-greenCF">CÂU CHUYỆN CỦA NHÀ SÁNG LẬP</h1>
                    <RectangleUnderline className="bg-darkCF h-px" />
                    <p className="mt-3 text-xl font-gilroy_bold_italic text-yellowCF">ĐÀO DUY KHANG</p>
                    <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">
                        Sinh trưởng trong một gia đình có truyền thống kinh doanh cà phê từ năm 1975, từ rất sớm tôi đã được trải nghiệm hương vị cà phê từ khi mới 4 tuổi. Trong suốt hành trình lớn lên và trải nghiệm đa dạng văn hóa cà phê từ nhiều quốc gia trên thế giới. Tôi xem cà phê như cuộc sống của mình. Và giá trị đích thực của cà phê tại Việt Nam chưa được khai thác hết tiềm năng và có phần sai lệch trong định hướng, vì vậy tôi quyết tâm truyền tải nền tảng kiến thức cho cộng đồng và trả
                        lại giá trị đích thực vốn có của cà phê sạch.
                    </p>
                </div>
                <div className="w-[22%] bg-greenCF h-full">
                    <img src={images.founder} alt="ảnh founder" className="w-64" />
                </div>
            </ScrollFade>

            <ScrollFade className="w-[90%] h-fit mt-32">
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-gilroy_xbold text-greenCF">GIÁ TRỊ CỐT LÕI</h1>

                    <div className="w-full flex justify-center mt-8">
                        <div className="w-1/3 h-96 px-10 py-10">
                            <div className="w-48 h-48 rounded-full flex mx-auto bg-green-600">
                                <img src={images.quality} alt="chất lượng" className="w-48 h-48 rounded-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h1 className="text-center text-2xl font-gilroy_bold text-yellowCF">CHẤT LƯỢNG</h1>
                                <p className="text-center mt-1 leading-loose">Không ngừng nghiên cứu, phát triển và nâng cao chất lượng cà phê Việt Nam.</p>
                            </div>
                        </div>

                        <div className="w-1/3 h-96 px-10 py-10">
                            <div className="w-48 h-48 rounded-full flex mx-auto bg-green-600">
                                <img src={images.companion} alt="đồng hành" className="w-48 h-48 rounded-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h1 className="text-center text-2xl font-gilroy_bold text-yellowCF">ĐỒNG HÀNH</h1>
                                <p className="text-center mt-1 leading-loose">Đồng hành và hỗ trợ người nông dân canh tác và chế biến cà phê chất lượng cao.</p>
                            </div>
                        </div>

                        <div className="w-1/3 h-96 px-10 py-10">
                            <div className="w-48 h-48 rounded-full flex mx-auto bg-green-600">
                                <img src={images.trust} alt="tin cậy" className="w-48 h-48 rounded-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h1 className="text-center text-2xl font-gilroy_bold text-yellowCF">TIN CẬY</h1>
                                <p className="text-center mt-1 leading-loose">Trở thành sự lựa chọn hàng đầu và là đối tác tin cậy của khách hàng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFade>

            <ScrollFade className="w-[90%] h-fit mt-32">
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-gilroy_xbold text-greenCF">CHỨNG NHẬN</h1>
                    <p className="mx-auto mt-4 w-[55%] text-center text-lg">Chất lượng trong mọi quy trình luôn là một trong những ưu tiên hàng đầu của GOE, nhằm mang lại độ tin cậy cao nhất.</p>
                    <img src={images.certificates} alt="chứng nhận" className="mt-16" />
                    <div className="w-full flex justify-center mt-8"></div>
                </div>
            </ScrollFade>

            <ScrollFade>
                <img src={images.comunity} alt="Cộng đồng" className="mt-32" />
            </ScrollFade>

            <ScrollFade className="w-[90%] h-fit flex justify-between mt-24">
                <div className="w-[32%] h-full">
                    <img src={images.comunity2} alt="ảnh founder" className="w-full h-64 object-cover" />
                    <img src={images.comunity1} alt="ảnh founder" className="w-full h-96 object-cover mt-6" />
                </div>
                <div className="w-[60%]">
                    <h1 className="text-4xl font-gilroy_xbold text-greenCF">CÂU CHUYỆN CỘNG ĐỒNG</h1>
                    <RectangleUnderline className="bg-darkCF h-px" />
                    <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">"Gia đình nông dân nhỏ đóng vai trò quan trọng như những mắt xích đầu tiên trong chuỗi giá trị sản phẩm nông nghiệp. Tuy nhiên, họ thường phải đối mặt với thu nhập không ổn định.”</p>
                    <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">Bằng cách áp dụng kiến thức về nâng cao chất lượng cây cà phê và chế biến theo phương pháp bền vững, các nông dân sẽ được hưởng lợi ích từ hệ thống sản xuất đa dạng, từ đó mang lại sự cải thiện về mặt sinh kế và đồng thời bảo vệ môi trường tự nhiên.</p>
                    <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">Cuộc hành trình đầy cảm xúc của chúng tôi đến các vùng đất xa xôi, nơi mà nông nghiệp và cà phê chất lượng cao đang trở thành một ước mơ đầy thách thức. Tại đây, bà con nông dân đã gặp phải nhiều khó khăn, từ khí hậu khắc nghiệt đến việc chưa được trang bị nhiều kiến thức và kỹ thuật trong sản xuất cà phê.</p>
                    <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">Chúng tôi đã bắt đầu bằng việc tìm hiểu sâu hơn về nhu cầu và tiềm năng của bà con nông dân. Dành thời gian ngồi lại, thảo luận cùng họ và lắng nghe những chia sẻ về cuộc sống hàng ngày cũng như những thách thức mà họ đang đối mặt. Hành trình này không dễ dàng, nhưng những nỗ lực của bà con nông dân cùng với sự hỗ trợ từ chúng tôi đã dần đem lại những kết quả tích cực.</p>
                </div>
            </ScrollFade>

            <ScrollFade>
                <img src={images.farmers} alt="cộng đồng" className="scale-90" />
            </ScrollFade>

            <ScrollFade className="mb-16">
                <img src={images.endComunity} alt="cộng đồng" className="scale-90" />
                <p className="mx-auto mt-4 w-[80%] text-center text-lg">Cùng với các chuyên gia nông nghiệp và tổ chức địa phương, chúng tôi đã giúp bà con nông dân áp dụng các kỹ thuật mới, từ cách chăm sóc cây cà phê đến quy trình thu hoạch và xử lý hạt cà phê. Và kết quả là những trái cà phê ngon hơn, chất lượng cao hơn và giá trị thương hiệu đang dần tăng lên.</p>
            </ScrollFade>

            <ScrollFade className="w-full h-fit pb-20 pt-10 px-16">
                <h3 className="font-gilroy_xbold text-4xl text-greenCF">ĐỐI TÁC TIN DÙNG</h3>
                <RectangleUnderline className="h-0.5 w-[50%] bg-yellowCF"></RectangleUnderline>
                <div className="flex flex-col justify-center gap-10 ">
                    <div className="flex justify-center gap-16 mt-16">
                        <img src={images.vna} alt="" className="h-48 w-48" />
                        <img src={images.xp} alt="" className="h-48 w-48" />
                        <img src={images.sentry} alt="" className="h-48 w-48" />
                        <img src={images.owen} alt="" className="h-48 w-48" />
                    </div>
                    <div className="flex justify-center gap-16">
                        <img src={images.vnaMall} alt="" className="h-48 w-48" />

                        <img src={images.luminus} alt="" className="h-48 w-48" />
                    </div>
                </div>
            </ScrollFade>
        </Container>
    );
};

export default About;
