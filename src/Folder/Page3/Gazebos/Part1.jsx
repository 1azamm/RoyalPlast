import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import gazebos from "../../../LexanTovar/Gazebo.jpeg";

const Part1 = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="lg:w-[48%] md:w-[100%] md:pb-5 sm:pb-5 max-[640px]:pb-5">
          <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[542px]:leading-[52px] max-[473px]:leading-[52px]">
            {language === "uz"
              ? "Gazebos uchun polikarbonat"
              : "Поликарбонат для Беседки"}
          </h1>
          <p className="font-semibold pb-5">
            {language === "uz"
              ? "Royal Plast kompaniyasida yuqori sifatli polikarbonatni arzon narxlarda xarid qilishingiz mumkin. Gazebos uchun Polygal Standard GOST va Titan Sky, Practical, Kolibri cellular, Kiwi uyali markalarining uyali polikarbonati ko'proq qo'llaniladi. Monolitik polimer Monogal, Monolithic Hummingbird, Monolithic Kiwi kabi turlar bilan ifodalanadi. Mahsulotlar zamonaviy texnologiyalardan foydalangan holda Evropa uskunalarida ishlab chiqariladi."
              : "В компании “Роял Пласт” можно приобрести качественный поликарбонат по доступным ценам. Для беседок чаще используется сотовый поликарбонат марок Полигаль Стандарт ГОСТ и Titan Sky, Практичный, Колибри сотовый, Киви сотовый. Монолитный полимер представлен такими видами как Моногаль, Колибри монолитный, Киви монолитный. Продукция производится на европейском оборудовании по современным технологиям."}
          </p>
          <p className="font-light">
            {language === "uz"
              ? "Mamlakat uchastkasidagi gazebos dam olish uchun qulay joy bo'lib, har qanday mavsumda toza havodan bahramand bo'lish imkonini beradi. Tomlar va devorlar uchun mashhur material polikarbonatdir. Bu jozibali, kuchli va bardoshlidir. Polimer gazebos ko'p yillar davomida sizga xizmat qiladi va jozibadorligini yo'qotmaydi."
              : "Сотовый поликарбонат — лучший материал для теплиц любого размера. Он легкий, износостойкий, гибкий, отлично пропускает солнечные лучи, сохраняет тепло, прост в монтаже и уходе."}
          </p>
        </div>
        <img
          className="lg:w-[50%] lg:h-[400px] md:w-[100%] md:h-[550px] sm:w-[100%] max-[550px]:h-[350px] max-[550px]:w-[100%] max-[430px]:h-[300px]"
          src={gazebos}
          alt=""
        />
      </div>
    </>
  );
};

export default Part1;
