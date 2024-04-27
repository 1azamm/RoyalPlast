import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import zagon from "../../../LexanTovar/zagon.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Part3 = () => {
  const { language } = useContext(LocalizationApi);
  const text = {
    uz: [
      <>
        <Link to="/cellular-polycarbonate/">
          <span
            className="text-purple-900 hover:text-blue-600 underline mr-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
          >
            Uyali Polikarbonat
          </span>
        </Link>
        «Royal Plast» chorvachilik fermalari va baliq fermalarini qurish va
        rekonstruksiya qilishda mukammal qo'llaniladi.
      </>,
      "Xonaga termal infraqizil nurlanishni o'tkazadigan shaffof choyshablar, ko'rinadigan yorug'likning katta miqdori 80%, tirik organizmlar uchun yashash joylarini yaratish uchun maqbuldir. Havo bo'shlig'i issiqlik izolatsiyasini yaratadi, bu esa xonalarni isitish vaqtida sezilarli energiya tejashga yordam beradi.",
      "Bizning materialimizdan foydalanishning ba'zi usullarini bilish, agar siz chorvachilik bilan shug'ullansangiz, daromadingizni sezilarli darajada oshirishi mumkin.",
      "Masalan, organik chiqindilarning parchalanishini tezlashtirish uchun polikarbonat issiqxonasini qurish orqali siz dalalar va bog'larni o'g'itlash uchun kompost ishlab chiqarish orqali omborning daromadini oshirishingiz mumkin.",
    ],
    ru: [
      <>
        <Link to="/cellular-polycarbonate/">
          <span className="text-purple-900 hover:text-blue-600 underline mr-2">
            Сотовый поликарбонат
          </span>
        </Link>
        «Роял Пласт» прекрасно используется при строительстве и реконструкции
        животноводческих комплексов и рыбных хозяйств."
      </>,
      "Прозрачные листы, пропускающие тепловое инфракрасное излучение внутрь помещения, большое количество видимого света 80%, являются оптимальными для создания сред обитания живых организмов. Воздушная прослойка создает теплоизоляцию, способствующую значительной экономии энергии при обогреве помещений.",
      "Знание некоторых приемов применения нашего материала можно значительно увеличить свои доходы, если вы занимаете животноводством.",
      "Например, путем постройки теплицы из поликарбоната для ускоренного разложения органических отходов можно увеличить доходы коровника также за счет производства компоста для удобрения полей и садов.",
    ],
  };

  return (
    <div className="flex justify-between lg:flex-row md:flex-col-reverse sm:flex-col-reverse max-[640px]:flex-col-reverse flex-wrap">
      <img
        className="lg:w-[50%] md:w-[100%] pt-5 lg:h-[500px] "
        src={zagon}
        alt=""
      />
      <div className="lg:w-[48%] md:w-[100%]">
        <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
          {language === "uz"
            ? "Chorvachilik fermalari"
            : "Животноводческие хозяйства"}
        </h1>
        <div className="flex flex-col text-lg gap-y-5">
          {text[language].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part3;
