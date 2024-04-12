import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import advantage from "../../../LexanTovar/afzallik.jpeg";
import styled from "styled-components";

const Part2 = () => {
  const { language } = useContext(LocalizationApi);

  const text = {
    uz: [
      "Kuchliligi - choyshablar sezilarli statik va dinamik yuklarga bardosh bera oladi.",
      "Kam vazn - bu tashish va o'rnatishni osonlashtiradi.",
      "Shaffoflik - panellarning rangi va turiga qarab, indikator 25% dan 92% gacha o'zgarishi mumkin.",
      "Barqarorlik - polimerning xususiyatlariga yog'ingarchilik, quyosh yoki havo kimyoviy moddalari ta'sir qilmaydi.",
      "O'rnatish va texnik xizmat ko'rsatish oson. O'rnatish uchun maxsus asboblar yoki uskunalar talab qilinmaydi. Polikarbonatning silliq yuzasi yomg'ir paytida o'zini tozalaydi. Yuvish uchun siz har qanday agressiv bo'lmagan tozalash vositalaridan foydalanishingiz mumkin.",
    ],
    ru: [
      "Прочность – листы выдерживают значительные статические и динамические нагрузки.",
      "Небольшой вес облегчает транспортировку и установку.",
      "Прозрачность – в зависимости от цвета и типа панелей показатель может варьироваться от 25% до 92%.",
      "Стабильность – на свойства полимера не влияют осадки, солнечные лучи и химикаты воздуха.",
      "Простота установки и обслуживания. Для установки не требуются специальные инструменты или оборудование. Гладкая поверхность поликарбоната самоочищается во время дождя. Для мытья можно использовать любые неагрессивные чистящие средства.",
    ],
  };

  return (
    <div className="flex justify-between flex-wrap">
      <img className="w-[50%]" src={advantage} alt="" />
      <div className="w-[48%]">
        <h1 className="text-4xl mb-8 font-medium">
          {language === "uz"
            ? "Polikarbonatning afzalliklari"
            : "Преимущества поликарбоната"}
        </h1>
        {text[language].map((item, index) => (
          <P key={index} className="text-base mb-4">
            {item}
          </P>
        ))}
      </div>
    </div>
  );
};

export default Part2;

const P = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    background-color: #179bd7;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 6px;
  }
`;
