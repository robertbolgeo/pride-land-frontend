import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const Layout = ({ setCurrentLang }: any) => {

  return (
    <section>
        <Navbar setCurrentLang={setCurrentLang}/>
        <Outlet />
        <Footer/>
    </section>
  )
};

export default Layout;