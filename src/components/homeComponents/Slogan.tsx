import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../../i18n/locales/LanguageContext";
import i18n from "../../i18n";

export default function Slogan() {
const { t } = useTranslation(useContext(LanguageContext));

   return (
      <div className="bg-secondary">
   <div className="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:py-24">
      <h2 className="text-brown text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold">{t("main.sloganBR")} <span className="text-primary">Open Space </span>
         <br/>
         <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brown">Growing together: <span className="text-primary">Cultivating</span> Abilities, <br/><span className="text-primary">Nurturing</span> Relationships, <span className="text-primary">Harvesting</span> Community</span>
      </h2>
   </div>
</div>
   );
}