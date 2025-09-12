import { FaLongArrowAltRight } from "react-icons/fa";
import { Herosection } from "../components/Ui/Herosection";
import About from "./About";
import Worldmap from "../components/Worldmap";

export const Home = () => {
    return (
        <>
       <Herosection/>
       <Worldmap></Worldmap>
       <About/>
       </>
    );

};


export default Home;