import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Layout = () => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "jp" ? "en" : "jp";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
      };


  return (
    <section>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </section>
  )
};

export default Layout;