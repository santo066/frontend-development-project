import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import line from "../assets/images/Vector7.svg";
import { IoArrowBackCircleOutline, } from "react-icons/io5";


export default function Carousel() {
    return (
        <div className="w-full h-[673px] bg-[#FFFAF2]">
            <div className="pt-28 grid-cols-1 mx-auto max-w-[1466px] gap-16 grid sm:grid-cols-3 ">
                <div className="sm:col-span-1">
                    <div className="flex ">
                        <img className="rotate-180" src={line} alt="" />
                        <h3 className="bakilda text-[#86371C]">New Recipes</h3>
                    </div>
                    <h2 className="bakilda text-[44px]">Taste Our New Recipe</h2>
                    <p className="sans text-[16px]">Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. </p>
                    <p className="sans mt-5 text-[16px]">There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.</p>
                    <div className="flex mt-10">
                        <button><IoArrowBackCircleOutline className="w-[50px] h-[50px] mr-5" /></button>
                        <button><IoArrowBackCircleOutline className="w-[50px] h-[50px] rotate-180" /></button>

                    </div>
                </div>
                <div className="sm:col-span-2 ">
                    <div className="carousel carousel-center rounded-box">
                        <div className="carousel-item h-[470px] mr-6 ">
                            <img src={img1} alt="Pizza" className="w-[375px] rounded-2xl" />
                        </div>
                        <div className="carousel-item h-[470px] mr-6 ">
                            <img src={img2} alt="Pizza" className="w-[375px] rounded-2xl" />
                        </div>
                        <div className="carousel-item h-[470px] ">
                            <img src={img3} alt="Pizza" className="w-[375px] rounded-2xl" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}