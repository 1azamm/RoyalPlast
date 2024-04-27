import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import choose from "../../../LexanTovar/devor2.jpeg";

const Part2 = () => {
  const { language } = useContext(LocalizationApi);

  const p = {
    uz: [
      "— bardoshli, zarbalarga va kuchli shamol yuklariga bardosh beradi,",
      "— namlik ta'sirida yomonlashmaydi, mog'orlanmaydi,",
      "— yong'inga chidamli, yonmaydi,",
      "— manzarali o'simliklar uchun foydali bo'lgan yorug'likni o'tkazadi,",
      "— chiroyli ko'rinadi, siz har qanday jabhaga mos soya va xilma-xillikni tanlashingiz mumkin,",
      "— tozalash oson, suv va erigan detarjen bilan namlangan yumshoq shimgichni tozalash kifoya.",
    ],
    ru: [
      "— прочный, выдерживает удары и сильные ветровые нагрузки,",
      "— не портится под воздействием влаги, не покрывается плесенью,",
      "— огнеустойчив, не горит,",
      "— пропускает свет, что полезно для декоративных растений,",
      "— выглядит красиво, можно подобрать оттенок и разновидность к любому фасаду,",
      "— прост в уходе, достаточно очищать мягкой губкой, смоченной в воде с растворенным моющим средством.",
    ],
  };

  const p2 = {
    uz: [
      "— qoziqlar va arqon yordamida o'ralgan maydonni belgilash,",
      "— qo'llab-quvvatlash ustunlarini o'rnatish,",
      "— gorizontal loglarni o'rnatish,",
      "— kerak bo'lganda ramkani bo'yash,",
      "— polimer plitalar bilan qoplash.",
    ],
    ru: [
      "— разметка ограждаемого участка с помощью колышков и веревки,",
      "— установка опорных столбов,",
      "— монтаж горизонтальных лаг,",
      "— окрашивание каркаса при необходимости,",
      "— обшивка полимерными листами.",
    ],
  };

  return (
    <div className="flex justify-between flex-wrap">
      <img
        className="lg:w-[50%] lg:h-[460px] lg:-top-0 md:w-[100%] md:relative md:-top-7 sm:relative sm:-top-5 max-[600px]:h-[300px]"
        src={choose}
        alt=""
      />
      <div className="lg:w-[48%] md:w-[100%] lg:pt-0 max-[450px]:pt-2">
        <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[615px]:leading-[52px] max-[500px]:text-3xl max-[500px]:font-semibold max-[500px]:leading-[55px] ">
          {language === "uz"
            ? "Devor uchun polikarbonatning afzalliklari"
            : "Преимущества поликарбоната для забора"}
        </h1>
        <div className="flex flex-col gap-y-2 text-[15px] pb-5">
          {p[language].map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <h1 className="font-semibold text-lg">
          {language === "uz" ? "O'rnatish bosqichlari:" : "Этапы установки:"}
        </h1>
        <div className="flex flex-col gap-y-2 pt-2">
          {p2[language].map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part2;
