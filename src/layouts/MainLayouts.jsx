import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../Pages/Footer";


const MainLayouts = () => {
    return (
        <div>
              <div className='h-16 mb-4'>
            <Nav></Nav>
            </div>
           <div className="min-h-[calc(100vh-150px)] ">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;