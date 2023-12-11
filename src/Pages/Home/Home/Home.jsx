import { Link } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
// import Banner from "../Banner/Banner";
import ContackMe from "../ContactMe/ContackMe";
import GoodAt from "../GoodAt/GoodAt";



const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <AboutMe></AboutMe>
            <br />
            <GoodAt></GoodAt>
            <br />

            <div className=" text-center text-white">
                <Link to='/projects' className="btn btn-info btn-outline ">Some of my projects</Link>
            </div>

<br />

            <ContackMe></ContackMe>
        </div>
    );
};

export default Home;