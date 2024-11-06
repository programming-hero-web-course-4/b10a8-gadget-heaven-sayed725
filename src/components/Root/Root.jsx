import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Root = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;