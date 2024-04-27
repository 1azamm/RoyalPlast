import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import Roses from "../../../LexanTovar/roses.jpg";
import img from "../../../LexanTovar/footnote_sel.png";

const Part1 = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="lg:w-[48%] md:w-[100%] md:pb-5 sm:pb-5 max-[640px]:pb-5">
          <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[500px]:leading-[50px]">
            {language === "uz" ? "Qishloq xo'jaligi" : "Сельское хозяйство"}
          </h1>
          <p className="font-semibold pb-5">
            {language === "uz"
              ? "Royal Plast kompaniyasi o'z faoliyatining boshidanoq qishloq xo'jaligi ob'ektlarini qoplash sohasida o'z mahsulotlarini ishlatishga ixtisoslashgan. Polikarbonatni qabul qilish va ishlab chiqish issiqxona qoplamalarini ishlab chiqarish uchun amalga oshiriladi."
              : "Компания Роял Пласт с начала своей деятельности специализируется на использовании своей продукции в сфере покрытия сельскохозяйственных объектов. Осуществляется внедрение и разработка поликарбоната для производства тепличных покрытий."}
          </p>
          <p className="font-light">
            {language === "uz"
              ? "Uyali polikarbonat har qanday o'lchamdagi Qishloq xo'jaligi uchun eng yaxshi materialdir. U yengil, bosimga bardoshli, moslashuvchan, quyosh nurini mukammal o'tkazadi, issiqlikni saqlaydi, o'rnatish va saqlash oson."
              : "Сотовый поликарбонат – лучший материал для сельского хозяйства любого размера. Он легкий, устойчивый к давлению, гибкий, прекрасно пропускает солнечный свет, сохраняет тепло, прост в монтаже и обслуживании."}
          </p>
        </div>
        <img
          className="lg:w-[50%] md:w-[100%] lg:h-[380px] md:h-[500px]"
          src={Roses}
          alt=""
        />
      </div>
      <div className="flex items-center gap-x-5">
        <img className="max-[500px]:w-[100px]" src={img} alt="" />
        <p className="lg:text-base sm:text-sm max-[500px]:text-[12px]">
          {language === "uz"
            ? "Polikarbonat, akril yoki polistiroldan choyshablar ishlab chiqarishdan tashqari, kompaniya o'simliklar rivojlanishini rag'batlantiradigan qo'shimchalar, energiyani tejash vositalari, iqlim o'zgarishini nazorat qilish, qishloq xo'jaligi chiqindilarini kompostlash jarayonini tezlashtiradigan muhitni yaratish bo'yicha ishlanmalarni ishlab chiqmoqda va boshqalar."
            : "Помимо производства листов из поликарбоната, акрила или полистирола компания проводит разработки в создании добавок, стимулирующих развитие растений, средствах экономии энергии контроля перепадов климата, создании среды, ускоряющей процессы компостизации сельскохозяйственных отходов, и т.д."}
        </p>
      </div>
    </>
  );
};

export default Part1;
