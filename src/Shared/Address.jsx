import arro from "../assets/images/arro.png"


export default function Address() {
    return (
        <div>
            <div className="bg-[#FFFAF2]  h-[246px]  w-full">
                <div className="max-w-[1366px] mx-auto md:flex">
                    <div className="bg-[#86371C] w-[319px] h-[326px] rounded-b-2xl abril text-2xl text-white">
                        <img src={arro} className="mx-auto pt-8" alt="" />
                        <button className="flex items-center mx-auto bg-[#86371C]">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="29.25" stroke="#F2EFDF" stroke-width="1.5" />
                                <path d="M40 30L25 38.6603L25 21.3397L40 30Z" fill="#F2EFDF" />
                            </svg>
                            Play Intro Video
                        </button>
                    </div>
                    <div className="pt-16 text-start bg-[#FFFAF2]  h-[246px] pl-28 w-[350px]">
                        <h3 className="abril text-2xl  mb-6">Our Opening Hours</h3>
                        <p className="sans mb-2">Mon - Sat: 07:00 - 18:00</p>
                        <p className="sans">Only Sun: 09:00 - 14:00</p>
                    </div>
                    
                    <div className="border small h-[120px]  my-20 ml-10"></div>

                    <div className="pt-16 pl-32  bg-[#FFFAF2] w-[348px] h-[246px]  text-center">
                        <h3 className="abril text-2xl mb-6 ">Our Live Location</h3>
                        <p className="sans mb-2">848 A 28TH ST, Brooklyn New York, UK</p>
                    </div>
                    <div className="border small h-[120px] my-20 ml-10"></div>
                    <div className="pt-16 pl-32 bg-[#FFFAF2] w-[348px] h-[246px] text-end">
                        <h3 className="abril text-2xl mb-6">Book A Table Now</h3>
                        <p className="sans mb-2">+1 318-254-6849</p>
                        <p className="sans">+1 452-754-6579</p>
                    </div>

                </div>
            </div>
        </div>
    )
}