import { useTranslation } from 'react-i18next';
export default function MissionStatement() {

   const { t } = useTranslation();
   
   return (
<div>
   <div className="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:py-24">
      <h4 className="text-brown text-lg lg:text-xl xl:text-2xl max-w-[1200px] mx-auto w-full text-center font-semibold">{t("main.vision")}</h4>
      <br/>
      <h4 className="text-brown text-md lg:text-lg xl:text-xl max-w-[1200px] mx-auto w-full text-center font-semibold">{t("main.category")} </h4>
      <ul className="text-brown text-lg lg:text-xl xl:text-2xl max-w-[1200px] mx-auto w-full text-center font-semibold">
         <li>{t("main.list1")}</li>
         <li>{t("main.list2")}</li>
         <li>{t("main.list3")}</li>
         </ul>
   </div>
</div>
   );
}