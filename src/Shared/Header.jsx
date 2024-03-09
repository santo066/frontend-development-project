import logo from "../assets/images/logo2.png";
import icon1 from "../assets/images/Admin.svg";
import icon2 from "../assets/images/Cart.svg";
export default function Header() {
    return (
        <div className="border-b">
            <div className="navbar bg-base-100 max-w-[1366px] mx-auto ">
                <div className="navbar-start contents sans font-semibold">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Menu</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li>
                                <details>
                                    <summary>Pages</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Menu</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Contact Us</a></li>
                            
                        </ul>
                    </div>

                </div>
                <div className="navbar-center">
                    <a href="">
                    <img src={logo} className="w-[202px] h-[39px]" alt="" />
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn hidden sm:contents  btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn hidden sm:contents btn-ghost btn-circle">
                        <div className="indicator ml-3">
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.62 28.8101C12.28 28.9301 11.72 28.9301 11.38 28.8101C8.48 27.8201 2 23.6901 2 16.6901C2 13.6001 4.49 11.1001 7.56 11.1001C9.38 11.1001 10.99 11.9801 12 13.3401C13.01 11.9801 14.63 11.1001 16.44 11.1001C19.51 11.1001 22 13.6001 22 16.6901C22 23.6901 15.52 27.8201 12.62 28.8101Z" stroke="#270A05" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="24" cy="9" r="9" fill="#270A05" />
                                <path d="M23.6523 13.168C23.2203 13.168 22.8563 13.136 22.5603 13.072C22.2723 13.008 21.9163 12.896 21.4923 12.736L21.1923 11.2H21.3243C22.0283 11.728 22.7803 11.992 23.5803 11.992C24.1243 11.992 24.5763 11.84 24.9363 11.536C25.2963 11.224 25.4763 10.78 25.4763 10.204C25.4763 9.636 25.3043 9.196 24.9603 8.884C24.6163 8.564 24.1723 8.404 23.6283 8.404C22.9723 8.404 22.2763 8.624 21.5403 9.064L21.2523 9.016L21.7803 4.6H26.4243V5.776H22.8123L22.5363 7.624C23.0083 7.424 23.4803 7.324 23.9523 7.324C24.8323 7.324 25.5283 7.576 26.0403 8.08C26.5523 8.584 26.8083 9.28 26.8083 10.168C26.8083 10.768 26.6683 11.296 26.3883 11.752C26.1163 12.2 25.7403 12.548 25.2603 12.796C24.7803 13.044 24.2443 13.168 23.6523 13.168Z" fill="white" />
                            </svg>
                        </div>
                    </button>
                    <button className="btn hidden sm:contents btn-ghost btn-circle md:mr-10">
                        <div className="indicator ml-3">
                            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66669 11.6667H3.11669C4.01669 11.6667 4.72502 12.4417 4.65002 13.3334L3.95835 21.6334C3.84169 22.9917 4.91668 24.1584 6.28335 24.1584H15.1584C16.3584 24.1584 17.4084 23.1751 17.5 21.9834L17.95 15.7334C18.05 14.3501 17 13.2251 15.6084 13.2251H4.85003" stroke="#270A05" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5417 28.3333C14.117 28.3333 14.5833 27.867 14.5833 27.2917C14.5833 26.7164 14.117 26.25 13.5417 26.25C12.9664 26.25 12.5 26.7164 12.5 27.2917C12.5 27.867 12.9664 28.3333 13.5417 28.3333Z" stroke="#270A05" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.87498 28.3333C7.45028 28.3333 7.91665 27.867 7.91665 27.2917C7.91665 26.7164 7.45028 26.25 6.87498 26.25C6.29968 26.25 5.83331 26.7164 5.83331 27.2917C5.83331 27.867 6.29968 28.3333 6.87498 28.3333Z" stroke="#270A05" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 16.6667H17.5" stroke="#270A05" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="20" cy="9" r="9" fill="#270A05" />
                                <path d="M20.6271 10.996H16.8351V10.336L21.6111 4.6H22.0191V9.82H22.9191V10.996H22.0191V13H20.6271V10.996ZM20.6271 9.82V7.372L18.6231 9.82H20.6271Z" fill="white" />
                            </svg>
                        </div>
                    </button>
                    <button className="btn hidden sm:contents btn-ghost btn-circle">
                        <div className="indicator ml-12 mr-4">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="#270A05" />
                                <path d="M15 15C17.0711 15 18.75 13.3211 18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5C12.9289 7.5 11.25 9.17893 11.25 11.25C11.25 13.3211 12.9289 15 15 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.4425 22.5C21.4425 19.5975 18.555 17.25 15 17.25C11.445 17.25 8.5575 19.5975 8.5575 22.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </button>
                    <div>
                        <a href="">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}