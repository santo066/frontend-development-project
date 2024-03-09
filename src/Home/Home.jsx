import '../App.css'

import Address from "../Shared/Address";
import Banner from "../Shared/Banner";
import Carousel from '../Shared/Carousel';
import ChooseUs from "../Shared/ChooseUs";
import Footer from '../Shared/Footer';
import Header from "../Shared/Header";
import Menu from '../Shared/Menu';
import Showcase from '../Shared/Shoecase';

export default function Home() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mb-[850px] sm:mb-36">
                <Address></Address>
            </div>
            <div className="mb-[800px] sm:mb-10">
                <ChooseUs></ChooseUs>
            </div>
            <div >
                <Menu></Menu>
            </div>
            <div className='my-[100px] mb-[600px] sm:mb-10'>
                <Carousel></Carousel>
            </div>
            <div className='my-36'>
                <Showcase></Showcase>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}