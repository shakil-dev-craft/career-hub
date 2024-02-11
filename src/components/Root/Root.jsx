import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            {/* navbar menu */}
            <Navbar />
            {/* children Outlet */}
            <div className='min-h-[calc(100vh-289px)]'>
                <Outlet />
            </div>
            {/* footer menu */}
            <Footer />
        </div>
    );
};

export default Root;