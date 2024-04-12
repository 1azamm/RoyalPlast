import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import issiqxona from "../../../LexanTovar/teplitsa-iz-polikarbonata.jpg";
import img from "../../../LexanTovar/footnote_sel.png";

const Par1 = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="w-[48%]">
          <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            {language === "uz"
              ? "Issiqxonalar uchun polikarbonat"
              : "Поликарбонат для теплиц"}
          </h1>
          <p className="font-semibold pb-5">
            {language === "uz"
              ? "Royal Plast kompaniyasi issiqxonalar va issiqxonalar uchun polikarbonatni taklif qiladi. 50 yildan ortiq vaqt davomida biz yuqori sifatli polimerlarni ishlab chiqaramiz, ularning sifati xalqaro standartlar va Rossiya GOST sertifikatlari bilan tasdiqlangan. Standart va yuqori sifatli materiallar, turli o'lcham va ranglarda mavjud."
              : "Компания Роял Пласт предлагает поликарбонат для теплиц и теплиц. Более 50 лет мы производим высококачественные полимеры, качество которых подтверждено международными стандартами и российскими сертификатами ГОСТ. Доступны в стандартных и премиальных материалах, различных размерах и цветах."}
          </p>
          <p className="font-light">
            {language === "uz"
              ? "Uyali polikarbonat har qanday o'lchamdagi issiqxonalar uchun eng yaxshi materialdir. U yengil, bosimga bardoshli, moslashuvchan, quyosh nurini mukammal o'tkazadi, issiqlikni saqlaydi, o'rnatish va saqlash oson."
              : "Сотовый поликарбонат — лучший материал для теплиц любого размера. Он легкий, износостойкий, гибкий, отлично пропускает солнечные лучи, сохраняет тепло, прост в монтаже и уходе."}
          </p>
        </div>
        <img className="w-[50%] h-[380px]" src={issiqxona} alt="" />
      </div>
      <div className="flex items-center gap-x-5">
        <img src={img} alt="" />
        <p>
          {language === "uz"
            ? "Polikarbonat, akril yoki polistiroldan choyshablar ishlab chiqarishdan tashqari, kompaniya o'simliklar rivojlanishini rag'batlantiradigan qo'shimchalar, energiyani tejash vositalari, iqlim o'zgarishini nazorat qilish, qishloq xo'jaligi chiqindilarini kompostlash jarayonini tezlashtiradigan muhitni yaratish bo'yicha ishlanmalarni ishlab chiqmoqda. va boshqalar."
            : "Помимо производства листов из поликарбоната, акрила или полистирола компания проводит разработки в создании добавок, стимулирующих развитие растений, средствах экономии энергии контроля перепадов климата, создании среды, ускоряющей процессы компостизации сельскохозяйственных отходов, и т.д."}
        </p>
      </div>
    </>
  );
};

export default Par1;
