import { Link } from "react-router-dom";
import line1 from "../assets/images/Line1.svg";
import image from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";
import image5 from "../assets/images/5.jpeg";


export default function Showcase() {
    return (
        <div className="max-w-[1366px] mx-auto">
            <div className="w-full sm:w-[674px]  mx-auto">
                <h5 className="bakilda text-[24px] text-[#86371C] text-center">Showcase</h5>
                <img src={line1} className="mx-auto mt-2" alt="" />
                <h1 className="bakilda text-[44px] text-center">Our Chefs New Creations</h1>
                <p className=" text-center sans mt-6">Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation.</p>
            </div>



            <div className="list-none sans sm:flex space-x-6 mx-auto w-full sm:w-[900px] mt-6 justify-center">
                <div className="text-center  ">
                    <Link><li className="w-[77px] bg-[#86371C] bg-opacity-10 border-[#86371C] list-none h-[54px] border-2 p-3  rounded-full">All</li></Link>
                </div>
                <div className="sm:flex space-x-8 mt-3">
                    <Link><li>Burger</li></Link>
                    <Link><li>Drinks</li></Link>
                    <Link><li>Pizza</li></Link>
                    <Link><li>Dinner</li></Link>
                    <Link><li>Lunch</li></Link>
                    <Link><li>Cookies</li></Link>
                    <Link><li>Bakery</li></Link>
                </div>
            </div>

            <div className=" mt-12 sm:h-[348px] gap-2 sm:gap-6 flex">
                <div className="w-1/3">
                    <img src={image} className="sm:h-[348px] h-28 sm:rounded-3xl rounded bg-cover" alt="" />
                </div>
                <div className="w-2/3">
                    <img src={image5} className="sm:h-[348px] h-28 sm:rounded-3xl rounded w-full bg-cover" alt="" />
                </div>
            </div>
            <div className=" sm:gap-6 gap-2 flex mt-6">
                <div className="">
                    <img src={image4} className="sm:h-[348px] h-28 sm:rounded-3xl rounded w-full" alt="" />
                </div>
                <div className="w-1/2">
                    <img src={image3} className="sm:h-[348px] h-28 sm:rounded-3xl rounded w-full" alt="" />
                </div>
                <div className="w-1/2">
                    <img src={image2} className="sm:h-[348px]  h-28 sm:rounded-3xl  rounded w-full" alt="" />
                </div>
            </div>
        </div>

    )
}