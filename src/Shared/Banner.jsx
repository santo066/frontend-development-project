import images from "../assets/images/banner.png";
import images1 from "../assets/images/Vector1.svg";
import images2 from "../assets/images/Vector4.svg";
import images3 from "../assets/images/vector2.svg";
import cof1 from "../assets/images/cof1.jpeg";
import cof2 from "../assets/images/cof2.jpeg";
import cof3 from "../assets/images/cof3.jpeg";


export default function Banner() {
    return (
        <div className=" md:h-[850px] w-full relative mx-auto">
            <img className="absolute md:bottom-0 md:right-0 opacity-10" src={images1} alt="" />
            <img className="absolute  md:left-0 md:top-10" src={images2} alt="" />
            <img className="absolute  md:left-40 md:bottom-0" src={images3} alt="" />
            <div className="grid md:grid-cols-1  lg:grid-cols-2  pt-24 w-full max-w-[1366px] mx-auto">
                <div className="mt-10 ">
                    <h4 className="bakilda text-[16px] font-bold mb-3">WELCOME TO OUR</h4>
                    <h1 className="bakilda  text-[50px] sm:text-[110px] ">Unlocklive</h1>
                    <h3 className="bakilda text-[44px] mb-6">Elevating Your Coffee Experience</h3>
                    <p className="sans font-normal text-[#7D6C69]">Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience  that transcends the ordinary.</p>
                    <div className="flex mt-12">
                        <div className="">
                            <button class="btn sans bg-[#86371C] text-[16px] font-normal text-white">EXPLORE OUR MENU</button>
                        </div>
                        <div className="sm:flex ml-11">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={cof2} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={cof3} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={cof1} />
                                    </div>
                                </div>

                            </div>
                            <div className="ml-6">
                                <h2 className="abril text-2xl">1200+</h2>
                                <p className="Sans text-[14px] text-[#7D6C69]">Tasty Variant Coffee</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-[10px] mt-16">
                        <div className="h-3 w-3 rounded-full bg-[#EAE7E6]" ></div>
                        <div className="h-3 w-3 rounded-full bg-[#EAE7E6]" ></div>
                        <div className="h-3 w-3 rounded-full bg-[#EAE7E6]" ></div>
                        <div className="h-3 w-3 rounded-full bg-[#86371C]" ></div>
                        <div className="h-3 w-3 rounded-full bg-[#EAE7E6]" ></div>

                    </div>
                </div>
                <div className=" lg:absolute sm:w-[350px] sm:h-[300px] right-14 md:w-[754px] md:h-[630px]">
                    <img src={images} alt="" />
                </div>
            </div>
        </div>
    )
}



