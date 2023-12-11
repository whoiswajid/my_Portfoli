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
            
            <ContackMe></ContackMe>
        </div>
    );
};

export default Home;