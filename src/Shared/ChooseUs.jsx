
import bin from "../assets/images/bin.jpeg";
import cup from "../assets/images/Vector5.svg";


export default function ChooseUs() {
    return (

        <div className="w-full h-[850px] relative">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center pt-32  max-w-[1366px] mx-auto sm:gap-96">
                <img className="absolute top-0 right-0" src={cup} alt="" />
                <div className="w-[200px] sm:w-[700px]">
                    <div className="flex ">
                        <div className="mt-3">
                            <svg width="51" height="2" viewBox="0 0 51 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 1.5C50.2761 1.5 50.5 1.27614 50.5 1C50.5 0.723858 50.2761 0.500001 50 0.500001L50 1.5ZM-5.96244e-09 1.5L50 1.5L50 0.500001L5.96244e-09 0.5L-5.96244e-09 1.5Z" fill="url(#paint0_linear_0_4301)" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_4301" x1="5.96244e-09" y1="0.5" x2="50" y2="0.500001" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#86371C" stop-opacity="0" />
                                        <stop offset="1" stop-color="#86371C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h4 className="bakilda text-[#86371C] text-[16px] font-bold mb-3">Why Choose Us</h4>
                    </div>
                   
                        <h3 className="bakilda text-[44px] mb-6">Choosing Unlocklive, A Taste of Perfection</h3>
                        <p className="sans font-normal  text-[#7D6C69]">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
                            <div className="text-center  w-52 h-32 rounded-2xl border">
                                <div className="text-center hover:rotate-6 w-52 h-32 rounded-2xl border">
                                    <h1 className="bakilda text-[44px]">20+</h1>
                                    <h4 className="abrill">Years Experience</h4>
                                </div>
                            </div>
                            <div className="text-center w-52 h-32  rounded-2xl border">
                                <div className="text-center w-52 rotate-6  h-32 rounded-2xl border">
                                    <h1 className="bakilda text-[44px]">100+</h1>
                                    <h4 className="abrill">Master Chefs</h4>
                                </div>
                            </div>
                            <div className="text-center w-52 h-32 rounded-2xl border">
                                <div className="text-center w-52 hover:rotate-6 h-32 rounded-2xl border">
                                    <h1 className="bakilda text-[44px]">30+</h1>
                                    <h4 className="abrill">Achievements</h4>
                                </div>
                            </div>
                        
                    </div>
                    <p className="sans font-normal mt-8  text-[#7D6C69]">Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.</p>
                    <button className="border-solid mt-10 border-2 border-[#86371C] text-[#86371C] w-44 h-10 rounded-xl hover:bg-[#e9dfdc]">Explore Our Menus</button>
                </div>

                {/* image */}
                <div className="sm:w-[500px] w-[290px] h-[300px] relative sm:h-[525px] border-solid border-2 rounded-t-[50%] rounded-b-3xl">
                    <div className="sm:w-[464px] absolute w-[250px] h-[300px] left-4  sm:h-[528px]">
                        <img src={bin} alt="" className="rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}