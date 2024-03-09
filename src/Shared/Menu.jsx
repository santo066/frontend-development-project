import cup1 from "../assets/images/cup1.jpeg";
import cup2 from "../assets/images/cup2.jpeg";
import cup3 from "../assets/images/cup3.jpeg";
import cup4 from "../assets/images/cof3.jpeg";
import png from "../assets/images/png.png";
import line from "../assets/images/Vector7.svg";

export default function Menu() {
    return (
        <div className=" max-w-[1366px] mx-auto">
            <div className="flex  w-72 mx-auto">
                <img src={line} className="rotate-180" alt="" />
                <h2 className="sans text-[#86371C]  font-semibold">Coffee Menu</h2>
                <img src={line} className="" alt="" />
            </div>
            <h1 className="bakilda text-[44px] text-center mt-4">Unlocklive Coffee Menu</h1>

            <div className="grid mt-20 grid-cols-1 md:grid-cols-2 gap-8">
                {/* card1 */}
                <div className="hero rounded-xl w-full h-auto  sm:w-[668px] sm:h-[144px] border-solid border-2">
                    <div className="flex items-center">
                        <div className="hero-content flex-row">
                            <div className=" w-[100px] h-[100px] bg-slate-200 rounded-full  border-dashed border-2 border-black ">
                                <img src={cup1} className="w-[84px] h-[84px] mt-[5.8px] ml-[3px] rounded-full  " />
                            </div>
                            <div>
                                <h1 className="abril text-2xl">Double Espresso x2</h1>
                                <p className="sans text-sm">There are many variations of passages Lorem Ipsum form</p>
                            </div>
                        </div>
                        <div>
                            <img src={png} className="pr-3" alt="" />
                        </div>
                        <div className="w-[70px] h-[65px] rounded-full border-dashed border-2  border-[#86371C]">
                            <div className="w-[60px] h-[60px]  rounded-full bg-[#86371C] mx-auto mt-[1px] pt-[2px]">
                                <h1 className="sans text-center mt-[17px] text-white">$10</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card2 */}
                <div className="hero rounded-xl w-full h-auto  sm:w-[668px] sm:h-[144px] border-solid border-2">
                    <div className="flex items-center">
                        <div className="hero-content flex-row">
                            <div className=" w-[100px] h-[100px] bg-slate-200 rounded-full  border-dashed border-2 border-black ">
                                <img src={cup2} className="w-[84px] h-[84px] mt-[5.8px] ml-[3px] rounded-full  " />
                            </div>
                            <div>
                                <h1 className="abril text-2xl">Hazelnut Heaven Latte</h1>
                                <p className="sans text-sm">There are many variations of passages Lorem Ipsum form</p>
                            </div>
                        </div>
                        <div>
                            <img src={png} className="pr-3" alt="" />
                        </div>
                        <div className="w-[70px] h-[65px] rounded-full border-dashed border-2  border-[#86371C]">
                            <div className="w-[60px] h-[60px]  rounded-full bg-[#86371C] mx-auto mt-[1px] pt-[2px]">
                                <h1 className="sans text-center mt-[17px] text-white">$10</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="hero rounded-xl w-full h-auto  sm:w-[668px] sm:h-[144px] border-solid border-2">
                    <div className="flex items-center">
                        <div className="hero-content flex-row">
                            <div className=" w-[100px] h-[100px] bg-slate-200 rounded-full  border-dashed border-2 border-black ">
                                <img src={cup3} className="w-[84px] h-[84px] mt-[5.8px] ml-[3px] rounded-full  " />
                            </div>
                            <div>
                                <h1 className="abril text-2xl">Salted Caramel Cold Brew</h1>
                                <p className="sans text-sm">There are many variations of passages Lorem Ipsum form</p>
                            </div>
                        </div>
                        <div>
                            <img src={png} className="pr-3" alt="" />
                        </div>
                        <div className="w-[70px] h-[65px] rounded-full border-dashed border-2  border-[#86371C]">
                            <div className="w-[60px] h-[60px]  rounded-full bg-[#86371C] mx-auto mt-[1px] pt-[2px]">
                                <h1 className="sans text-center mt-[17px] text-white">$10</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card4 */}
                <div className="hero rounded-xl w-full h-auto  sm:w-[668px] sm:h-[144px] border-solid border-2">
                    <div className="flex items-center">
                        <div className="hero-content flex-row">
                            <div className=" w-[100px] h-[100px] bg-slate-200 rounded-full  border-dashed border-2 border-black ">
                                <img src={cup4} className="w-[84px] h-[84px] mt-[5.8px] ml-[3px] rounded-full  " />
                            </div>
                            <div>
                                <h1 className="abril text-2xl">Coconut Cream Delight (Summer)</h1>
                                <p className="sans text-sm ">There are many variations of passages Lorem Ipsum form</p>
                            </div>
                        </div>
                        <div>
                            <img src={png} className="pr-3" alt="" />
                        </div>
                        <div className="w-[70px] h-[65px] rounded-full border-dashed border-2  border-[#86371C]">
                            <div className="w-[60px] h-[60px]  rounded-full bg-[#86371C] mx-auto mt-[1px] pt-[2px]">
                                <h1 className="sans text-center mt-[17px] text-white">$10</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[60px] text-center">
                <button className="border-solid mt-10 border-2 text-[#86371C] border-[#86371C] w-44 h-10 rounded-xl hover:bg-[#e9dfdc]">View All Menu</button>
            </div>
        </div>

    )
} 