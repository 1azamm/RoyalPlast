import React from "react";
import Table2 from "../../LexanTovar/Table2.jpg";
import styled from "styled-components";
import { Image } from "antd";

const Article3 = () => {
  const paragraphs = [
    "Ko'plab chuqurchalar tuzilishi tufayli panellar sezilarli yuklarga bardosh bera oladi. Shu bilan birga, varaqning yuzasi qum kabi kichik zarralar bilan uzoq vaqt aloqa qilishda abraziv ta'sirga duchor bo'ladi. Etarli qattiqlikdagi qo'pol materiallar bilan aloqa qilganda chizish paydo bo'lishi mumkin.",
    "Polikarbonatning mexanik kuchi ko'p jihatdan materialning markasi va tuzilishiga bog'liq.",
    [
      <p className="font-semibold">
        Sinov jarayonida panellar quyidagi natijalarni ko'rsatdi:
      </p>,
    ],
  ];

  return (
    <div id="scroll3">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Uyali polikarbonatning mexanik kuchi
      </h1>
      <div className="flex justify-between flex-wrap items-center">
        <Text className="flex flex-col text-lg gap-y-5 w-[48%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Text>
        <IMG className="w-[50%]">
          <Image src={Table2} />
        </IMG>
      </div>
      <p className="pt-5 text-lg">
        Uyali polikarbonatning kuch ko'rsatkichlari uchun sinovi ISO 9001: 9002
        standartiga muvofiq amalga oshiriladi. Ishlab chiqaruvchi choyshablar
        to'g'ri o'rnatilgan va maxsus mahkamlagichlardan foydalanilgan holda
        kamida besh yil davomida ishlash ko'rsatkichlarining saqlanishini
        kafolatlaydi.
      </p>
    </div>
  );
};

export default Article3;

const IMG = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 20px;
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
