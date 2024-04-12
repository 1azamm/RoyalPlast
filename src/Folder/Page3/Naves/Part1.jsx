import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import naves from "../../../LexanTovar/naves.jpeg";

const Par1 = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="w-[48%]">
          <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            {language === "uz"
              ? "Naveslar uchun polikarbonat"
              : "Поликарбонат для навесов"}
          </h1>
          <p className="font-semibold pb-5">
            {language === "uz"
              ? "Royal Plast kompaniyasida yuqori sifatli polikarbonatni arzon narxlarda xarid qilishingiz mumkin. Kanoplar uchun Polygal Standard GOST, Titan Sky, Practical, Kolibri cellular, Kiwi cellular markalarining uyali polikarbonatidan foydalanish mumkin. Monolitik polikarbonat Monogal, Monolithic Hummingbird, Monolithic Kiwi kabi turlar bilan ifodalanadi. Mahsulotlar zamonaviy texnologiyalardan foydalangan holda Evropa uskunalarida ishlab chiqariladi."
              : "Купить качественный поликарбонат по низким ценам вы можете в компании Royal Plast. Для навесов можно использовать сотовый поликарбонат Полигал Стандарт ГОСТ, Титан Скай, Практичный, Колибри сотовый, сотовый сотовый Киви. Монолитный поликарбонат представлен такими видами, как Моногал, Монолитный Колибри, Монолитный Киви. Продукция производится на европейском оборудовании с использованием современных технологий."}
          </p>
          <p className="font-light">
            {language === "uz"
              ? "Polikarbonat kanopiler eng keng tarqalgan dizaynlardan biridir. Ular yomg'ir, qor, shamol, quyoshdan himoya qiladi. Avtoturargohlarda, turar-joy va sanoat binolarida o'rnatiladi. Moslashuvchanlik, ranglarning xilma-xilligi va polimer plitalarning turlari tufayli turli xil dizayn yechimlari amalga oshiriladi."
              : "Навесы из поликарбоната – одна из самых распространенных конструкций. Они защищают от дождя, снега, ветра, солнца. Устанавливается на парковках, в жилых и промышленных зданиях. Благодаря гибкости, разнообразию цветов и типов полимерных плит реализуются различные дизайнерские решения."}
          </p>
        </div>
        <img className="w-[50%]" src={naves} alt="" />
      </div>
    </>
  );
};

export default Par1;
