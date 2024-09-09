import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import Langs from '../../interfaces/LayoutType';



const Layout = ({ setCurrentLang, currentLang }: Langs) => {

  return (
    <section>
       <Navbar />
        <Outlet />
        <Footer/>
    </section>
  )
};

export default Layout;