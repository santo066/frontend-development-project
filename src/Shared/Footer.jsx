import logo from "../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { SiTwitter } from "react-icons/si";



export default function Footer() {
    return (
        // <div className="w-full h-[110px] text-white bg-cover pt-7 bg_img">
        //     <div className="max-w-[1366px]  mx-auto pt-3">
        //         <div className="navbar ">
        //             <div className="navbar-start">
        //                 <a className="btn btn-ghost text-xl">
        //                     <img src={logo} className=" w-[202px] h-[39px]" alt="" />
        //                 </a>
        //                 <div className="dropdown">
        //                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                     </div>
        //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                         <li><a>Terms</a></li>
        //                         <li><a>Privacy</a></li>
        //                         <li><a>Cookies</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="navbar-center hidden lg:flex">
        //                 <ul className="menu menu-horizontal px-1">
        //                     <li><a>Terms</a></li>
        //                     <li><a>Privacy</a></li>
        //                     <li><a>Cookies</a></li>
        //                 </ul>
        //             </div>
        //             <div className="navbar-end">
        //                 <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
        //                     <FaLinkedinIn />
        //                 </div>
        //                 <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
        //                     <TiSocialFacebook className="" />
        //                 </div>

        //                 <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
        //                     <SiTwitter />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

            <div className="bg-cover bg_img ">
                <footer className=" p-10 sm:flex grid place-items-center justify-between max-w-[1366px] mx-auto ">
                    <nav>
                        <a href=""><img src={logo} className=" w-[202px] h-[39px]" alt="" /></a>

                    </nav>
                    <nav className="flex gap-8">
                        <a href=""><li className="sans text-white list-none">Terms</li></a>
                        <a href=""><li className="sans text-white list-none">Privacy</li></a>
                        <a href=""><li className="sans text-white list-none">Cookies</li></a>
                        
                    </nav>
                    <nav className="">
                        <div className="flex gap-2">
                            <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
                                <a href=""><FaLinkedinIn className="color"/></a>
                            </div>
                            <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
                                <a href=""><TiSocialFacebook className="color w-[20px]" /></a>
                            </div>
                            <div className="w-[35px] h-[35px] border rounded-full flex items-center  justify-center">
                                <a href=""><SiTwitter className="color"/></a>
                            </div>
                        </div>
                    </nav>
                </footer>
            </div>
    )
}