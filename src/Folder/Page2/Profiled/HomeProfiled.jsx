import React, { useState, useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import { Link } from "react-router-dom";
import img from "../../../LexanTovar/profiled.jpg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";
import styled from "styled-components";
import PDF from "../../../assets/Greko-rabochiy-A4.pdf";

const HomeProfiled = () => {
  const { language } = useContext(LocalizationApi);
  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };

  const advantages = [
    {
      title:
        language === "uz"
          ? "Eng yuqori zarba qarshiligi"
          : "Высочайшая ударопрочность",
      description:
        language === "uz" ? "uni buzish mumkin emas" : "его нельзя сломать",
    },
    {
      title: language === "uz" ? "UV himoya qatlami" : "UV-защита слоя",
      description: language === "uz" ? "Mavjud" : "Есть",
    },
    {
      title:
        language === "uz"
          ? "Yonuvchanlik - sekin yonish qobiliyati"
          : "Горючесть – способность медленно гореть",
      description: "yonuvchanlik guruhi G1 bilan",
    },
    {
      title:
        language === "uz"
          ? "Haddan tashqari haroratga bardosh beradi"
          : "Выдерживает экстремальные температуры",
      description:
        language === "uz" ? "-40˚S dan +120˚S gacha" : "от -40˚С до +120˚С",
    },
    {
      title:
        language === "uz"
          ? "Silikat oynaga nisbatan past o'ziga xos tortishish"
          : "Низкий удельный вес по сравнению с силикатным стеклом",
      description: "1,19 g/sm³",
    },
    {
      title:
        language === "uz"
          ? "Yuqori issiqlik izolyatsiyasi"
          : "Высокая теплоизоляция",
      description:
        language === "uz"
          ? "Isitish xarajatlarini ikki baravar kamaytiradi"
          : "Снижает расходы на отопление вдвое",
    },
    {
      title:
        language === "uz"
          ? "Organik oynaga mos keladigan shaffoflik"
          : "Прозрачность",
      description: language === "uz" ? "90% gacha" : "до 90%",
    },
    {
      title: language === "uz" ? "Kafolat:" : "Гарантия:",
      description: language === "uz" ? "10 va 15 yil" : "10 и 15 лет",
    },
  ];
  return (
    <div>
      <p className="py-3 text-sm">
        <Link to="/">
          <span className=" hover:text-blue-600 cursor-pointer">
            {language === "uz" ? "Bosh sahifa" : "Главный"}
          </span>
        </Link>
        <span className="text-gray-400"> / </span>
        <span className="text-blue-600">
          {language === "uz"
            ? "Profillangan polikarbonat"
            : "Профилированный поликарбонат"}
        </span>
      </p>
      <div className="flex justify-between  mb-8">
        <div>
          <H1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            {language === "uz"
              ? "Profillangan polikarbonat"
              : "Профилированный поликарбонат"}
          </H1>
          <P className="w-[77%] text-lg mb-10">
            {language === "uz"
              ? "Profillangan (gofrirovka qilingan) varaq yuqori yorug'lik o'tkazuvchanligiga va keng ish haroratiga ega, bu uni issiqxonalarni qoplash va tomlarni oynalash uchun ideal echimga aylantiradi. Bunday choyshablar konstruksiyalarning korroziyaga chidamli qoplamasi va binolarning qoplamasi (qoplama) uchun foydalanadigan mutaxassislar tomonidan baholanadi. Plitalar o'z-o'zini qurish uchun ham ishlatilishi mumkin. Profillangan polikarbonat qatlami zararli ultrabinafsha nurlanishini o'tkazmaydi va to'liq himoya qiladi. Bu barg sarg'aymaydi va yillar davomida o'z xususiyatlarini saqlab qoladi."
              : "Профилированный (гофрированный) лист имеет высокую светопроницаемость и широкий диапазон рабочих температур, что делает его идеальным решением для покрытия теплиц и остекления крыш. Такие листы оцениваются специалистами, которые используют их для антикоррозийного покрытия конструкций и покрытия (обмазки) зданий. Плиты также можно использовать для самостоятельного строительства. Профилированный слой поликарбоната не пропускает вредное ультрафиолетовое излучение и обеспечивает полную защиту. Этот лист не желтеет и сохраняет свои свойства годами."}
          </P>
          <div className="flex gap-x-5">
            <a href={PDF} download="Profillangan-polikarbonat">
              <Button
                id={"btn"}
                text={
                  language === "uz"
                    ? "Yuklab olish katalogi"
                    : "Скачать каталог"
                }
                position={
                  "bg-[#5bb521] text-[16px] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_23rem_0_0_0] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
                }
              />
            </a>
            <Button
              id={"btn"}
              onClick={handleClick}
              text={
                language === "uz"
                  ? "Distribyutorga aylaning"
                  : "Стань дистрибьютором"
              }
              position="text-[16px] bg-transparent rounded-none hover:text-white"
            />
          </div>
        </div>
        <IMG src={img} width="33%" alt="" />
      </div>
      <h1 className="text-3xl mb-5">
        {language === "uz"
          ? "Profillangan polikarbonatning"
          : "Профилированный поликарбоната"}{" "}
        <span className="font-semibold">
          {language === "uz" ? "afzalliklari:" : "преимущества:"}
        </span>
      </h1>
      <div className="flex justify-between flex-wrap">
        <ul className={`Advantage pt-3 `}>
          {advantages.slice(0, 4).map((advantage, index) => (
            <li key={index}>
              <div className="pb-3">
                <span>{advantage.title} </span>
                <span className=" bg-[#5cbe1b] text-white p-[2px] leading-8">
                  {advantage.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <ul className={`Advantage pt-3 `}>
          {advantages.slice(4, 8).map((advantage, index) => (
            <li key={index}>
              <div className="pb-3">
                <span>{advantage.title} </span>
                <span className=" bg-[#5cbe1b] text-white p-[2px] leading-8">
                  {advantage.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Write
        text={
          language === "uz" ? "Distribyutorga aylaning" : "Стань дистрибьютором"
        }
        modal={toggle}
        setModal={setToogle}
      />
    </div>
  );
};

export default HomeProfiled;

const IMG = styled.img`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 450px) {
    font-size: 32px;
    line-height: 55px;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
