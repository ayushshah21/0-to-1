import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';

const NavbarWrapper = () => {
    const location = useLocation();
    const authRoutes = ['/signin', '/signup'];
    if(authRoutes.includes(location.pathname)) return null;
    return <Navbar />
}

export default NavbarWrapper