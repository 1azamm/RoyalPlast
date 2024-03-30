import { useContext } from "react";
import img from "../../LexanTovar/rezka.jpg";
import img2 from "../../LexanTovar/sverlenie.jpg";
import img3 from "../../LexanTovar/kreplenie.jpg";
import img4 from "../../LexanTovar/soediniteli.jpg";
import styled from "styled-components";
import { LocalizationApi } from "../../Context/Language";

const Article7 = () => {
  const { language } = useContext(LocalizationApi);

  const steps = [
    {
      img: img,
      text: "1. QALINLIGI 10 MM GACHA BO'LGAN PANELLARNI KESISH O'TKIR PICHOQ VA NOZIK TISHLI ARRA BILAN AMALGA OSHIRILADI.",
    },
    {
      img: img2,
      text: "2. BURG'ULASH KAMIDA 40 MM CHETIDAN MINIMAL MASOFAGA EGA MATKAP BILAN AMALGA OSHIRILADI.",
    },
    {
      img: img3,
      text: "3. PANELLAR MUHRLANGAN RONDELALAR BILAN O'Z-O'ZIDAN TEJAMKOR VINTLAR YORDAMIDA RAMKAGA BIRIKTIRILADI.",
    },
    {
      img: img4,
      text: "4. ALOHIDA VARAQLAR MAXSUS BIRIKTIRUVCHI ELEMENTLAR YORDAMIDA BIRLASHTIRILADI.",
    },
  ];

  const stepsRU = [
    {
      img: img,
      text: "1. РЕЗКА ПАНЕЛИ ТОЛЩИНОЙ ДО 10 ММ ВЫПОЛНЯЕТСЯ ОСТРЫМ НОЖОМ И ЗУБЧАТОЙ ПИЛОЙ.",
    },
    {
      img: img2,
      text: "2. СВЕРЛЕНИЕ ВЫПОЛНЯЕТСЯ СВЕРЛОМ С МИНИМАЛЬНЫМ РАССТОЯНИЕМ ОТ КРОМКИ НЕ МЕНЕЕ 40 ММ.",
    },
    {
      img: img3,
      text: "3. ПАНЕЛИ КРЕПЛЕНЫ К РАМКЕ С ПОМОЩЬЮ САМОРЕЗОВ С УПЛОТНЕННЫМИ ШАЙБАМИ.",
    },
    {
      img: img4,
      text: "4. ОТДЕЛЬНЫЕ ЛИСТЫ СОЕДИНЯЮТСЯ С ПОМОЩЬЮ СПЕЦИАЛЬНЫХ СОЕДИНИТЕЛЬНЫХ ЭЛЕМЕНТОВ.",
    },
  ];

  return (
    <div id="scroll7" className="pb-1">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        {language === "uz"
          ? "Uyali polikarbonatni o'rnatishda qiyinchilik"
          : "Сложности монтажа сотового поликарбоната"}
      </h1>
      <div>
        <p className="text-lg">
          {language === "uz"
            ? "Uyali polikarbonatni o'rnatish uni po'lat yoki alyuminiy profildan yasalgan ramkaga ulash orqali amalga oshiriladi. Qattiqlashtiruvchi qovurg'alar bo'ylab choyshablarni egish mumkin, bu xususiyat kanoplar va tomlarni ishlab chiqarishda keng qo'llaniladi. Panelning minimal egrilik radiusi uning qalinligiga teskari bog'liq. Qalinligi 25 mm bo'lgan uyali polikarbonatni burish mumkin emas."
            : "Монтаж сотового поликарбоната осуществляется путем соединения его с каркасом из стального или алюминиевого профиля. Листы можно сгибать по ребрам жесткости, эта особенность широко используется при производстве навесов и крыш. Минимальный радиус кривизны панели обратно пропорционален ее толщине. Сотовый поликарбонат толщиной 25 мм не скручивается."}
        </p>
        <p className="text-lg font-semibold py-5">
          {language === "uz"
            ? "O'rnatishni amalga oshirishda siz bir qator qoidalarga amal qilishingiz kerak:"
            : "При установке необходимо соблюдать ряд правил:"}
        </p>
        <div className="flex flex-wrap justify-between mb-5">
          {language === "uz"
            ? steps.map((step, index) => (
                <Steps
                  key={index}
                  className="flex items-center p-5 gap-x-5 border-[2px] border-gray-400 w-[49%] mb-5"
                >
                  <img src={step.img} alt={`Step ${index}`} />
                  <StepText className="text-[14px] font-medium">
                    {step.text}
                  </StepText>
                </Steps>
              ))
            : stepsRU.map((step, index) => (
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
