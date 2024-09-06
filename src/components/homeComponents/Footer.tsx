import { FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Footer() {
   const { t } = useTranslation();

 return ( 
  <footer className="w-full px-4 py-16 sm:py-20 md:px-8 md:py-24 bg-primary text-secondary">
   <div className="max-w[1200px] mx-auto grid w-full grid-cols-1 gap-8 text-base sm:grid-cols-2 md:grid-cols-5">
    <div className="flex flex-col gap-4 md:col-span-2">
     <h1 className="font-semibold text-secondary">{t("footer.tm-header")}</h1>
     <p>{t("footer.trademark")}</p>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">{t("footer.support")}</p>
     <a
      href="/contactus"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-tertiary">
      {t("footer.contact")}
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">{t("footer.about")}</p>
     <a
      href="/aboutus"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-tertiary">
      {t("footer.mission")}
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">{t("footer.follow")}</p>
     <a
      href="https://www.facebook.com/prideland4u"
      className="cursor-pointer duration-150 hover:text-tertiary">
      <FaFacebookF />
      {t("footer.facebook")}
     </a>
     <a
      href="https://github.com/pride-land"
      className="cursor-pointer duration-150 hover:text-tertiary">
      <FaGithub />
      {t("footer.github")}
     </a>
     <a
      href="https://www.youtube.com/channel/UCInYpCvSPY0ezO-gDb7R75Q"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      <FaYoutube />
      {t("footer.Youtube")}
     </a>
    </div>
   </div>
  </footer>
 );
}
