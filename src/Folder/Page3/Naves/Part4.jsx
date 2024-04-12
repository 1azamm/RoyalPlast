import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import color from "../../../LexanTovar/Rang.jpeg";
import styled from "styled-components";

const Part3 = () => {
  const { language } = useContext(LocalizationApi);

  return (
    <div className="flex justify-between items-start flex-wrap">
      <img className="w-[50%] h-[400px]" src={color} alt="" />
      <div className="w-[48%]">
        <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
          {language === "uz"
            ? "Rangni qanday tanlash mumkin?"
            : "Как сделать цветным?"}
        </h1>
        <div className="flex flex-col text-lg gap-y-5">
          <p>
            {language === "uz"
              ? "Polikarbonatning soyasi umumiy ansamblning rangiga, shuningdek, boshpana maqsadiga bog'liq bo'ladi."
              : "Оттенок поликарбоната будет зависеть от цвета общего ансамбля, а также от назначения укрытия."}
          </p>
          <p>
            {language === "uz"
              ? "Bejiviy, ko'k, yashil ranglar universaldir. Qizil, sariq va boshqa issiq soyalardan farqli o'laroq, ular ostidagi narsalarni deyarli buzmaydi."
              : "Универсальными являются бежевые, синие, зеленые цвета. Они почти не искажают предметы, находящиеся под ними, в отличие от красных, желтых и других теплых оттенков."}
          </p>
          <p>
            {language === "uz"
              ? "To'q rangli polimer panellar ochiq joylar va transport uchun talabga ega. Ular quyosh nurlarini sochadi va ob'ektlarning qizib ketishiga yo'l qo'ymaydi. Basseynlar va sport inshootlari uchun shaffof yoki ochiq rangli choyshablar mos keladi."
              : "Для открытых площадок, транспорта востребованы темные полимерные панели. Они рассеивают солнечные лучи и не дают предметам нагреваться. Для бассейнов и спортивных сооружений подойдут прозрачные или листы светлых оттенков."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part3;
