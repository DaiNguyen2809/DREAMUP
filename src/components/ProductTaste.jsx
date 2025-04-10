import choco from "../assets/images/chocolate.png";
import raisin from "../assets/images/raisins.png";
import nuts from "../assets/images/peanut.png";
function ProductTaste() {
    return (
        <div className="w-full flex mt-32">
            <div className="w-full flex justify-center items-center">
                <div className="w-[60%] flex flex-col items-start">
                    <p className="text-darkCF font-gilroy_bold_italic text-6xl mb-6">Thông tin hương vị</p>
                    <LinkButton path="/">
                        Cách pha chế
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </LinkButton>
                </div>

                <div className="w-[40%] flex flex-col justify-start text-brownCF">
                    <p className="mb-2 text-darkCF">GHI CHÚ HƯƠNG VỊ:</p>
                    <p className="mb-2">Holler Mountain delivers a burst of citrus and berry jam rounded out with notes of creamy caramel.</p>
                    <div className="flex justify-center gap-10 mt-3">
                        <div className="flex flex-col justify-center items-center mb-2">
                            <img src={choco} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                            <p>Sô-cô-la</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-2">
                            <img src={nuts} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                            <p>Hạt rang</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-2">
                            <img src={raisin} alt="choco" className="border-2 rounded-sm border-darkCF px-2 py-2 w-20 h-20 mb-3" />
                            <p>Nho khô</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTaste;
