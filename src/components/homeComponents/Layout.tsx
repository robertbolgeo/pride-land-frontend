import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <section>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </section>
  )
};

export default Layout;