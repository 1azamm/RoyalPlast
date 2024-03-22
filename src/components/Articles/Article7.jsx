import React from "react";
import img from "../../LexanTovar/rezka.jpg";
import img2 from "../../LexanTovar/sverlenie.jpg";
import img3 from "../../LexanTovar/kreplenie.jpg";
import img4 from "../../LexanTovar/soediniteli.jpg";
import styled from "styled-components";

const Article7 = () => {
  const steps = [
    {
      img: img,
      text: "1. QALINLIGI 10 MM GACHA BO'LGAN PANELLARNI KESISH O'TKIR PICHOQ VA NOZIK TISHLI ARRA BILAN AMALGA OSHIRILADI.",
    },
    {
      img: img2,
      text: "2. BURG'ULASH KAMIDA 40 MM CHETIDAN MINIMAL MASOFAGA EGA MATKAP BILAN AMALGA OSHIRILADI",
    },
    {
      img: img3,
      text: "3. PANELLAR MUHRLANGAN RONDELALAR BILAN O'Z-O'ZIDAN TEJAMKOR VINTLAR YORDAMIDA RAMKAGA BIRIKTIRILADI",
    },
    {
      img: img4,
      text: "4. ALOHIDA VARAQLAR MAXSUS BIRIKTIRUVCHI ELEMENTLAR YORDAMIDA BIRLASHTIRILADI",
    },
  ];

  return (
    <div id="scroll7" className="pb-1">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Uyali polikarbonatni o'rnatishda qiyinchilik
      </h1>
      <div>
        <p className="text-lg">
          Uyali polikarbonatni o'rnatish uni po'lat yoki alyuminiy profildan
          yasalgan ramkaga ulash orqali amalga oshiriladi. Qattiqlashtiruvchi
          qovurg'alar bo'ylab choyshablarni egish mumkin, bu xususiyat kanoplar
          va tomlarni ishlab chiqarishda keng qo'llaniladi. Panelning minimal
          egrilik radiusi uning qalinligiga teskari bog'liq. Qalinligi 25 mm
          bo'lgan uyali polikarbonatni burish mumkin emas.
        </p>
        <p className="text-lg font-semibold py-5">
          O'rnatishni amalga oshirishda siz bir qator qoidalarga amal
          qilishingiz kerak:
        </p>
        <div className="flex flex-wrap justify-between mb-5">
          {steps.map((step, index) => (
            <Steps
              key={index}
              className="flex items-center p-5 gap-x-5 border-[2px] border-gray-400 w-[49%] mb-5"
            >
              <img src={step.img} alt={`Step ${index}`} />
              <StepText className="text-[14px] font-medium">
                {step.text}
              </StepText>
            </Steps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article7;

const Steps = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    row-gap: 20px;
  }
`;

const StepText = styled.p`
  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
