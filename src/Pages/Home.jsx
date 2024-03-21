
import Nav from '../components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='h-16 mb-4'>
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;