import AboutUs from "../../components/AboutUs";
import Banner from "../../components/Banner";
import Reviews from "../../components/Reviews";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div><Brands></Brands></div>
            <div><Reviews></Reviews></div>
            <div><AboutUs></AboutUs></div>
        </div>
    );
};

export default Home;