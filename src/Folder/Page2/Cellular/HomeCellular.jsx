import React, { useState, useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import { Link } from "react-router-dom";
import img from "../../../LexanTovar/uyali.jpeg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";
import styled from "styled-components";

import PDF from "../../../assets/New_catalog_sota.pdf";

const HomeCellular = () => {
  const { language } = useContext(LocalizationApi);
  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };

  const advantages = [
    {
      title: language === "uz" ? "Xususiy hajmi" : "Частный размер",
      description: "1,19 g/sm³",
    },
    {
      title: language === "uz" ? "UV himoya qatlami" : "UV-защита слоя",
      description: language === "uz" ? "Mavjud" : "Есть",
    },
    {
      title:
        language === "uz" ? "Yoritish qobiliyati" : "Способность освещения",
      description: language === "uz" ? "100% gacha" : "до 100%",
    },
    {
      title:
        language === "uz"
          ? "Kritik harorat oralig'i"
          : "Критический температурный диапазон",
      description:
        language === "uz" ? "-40˚S dan +120˚S gacha" : "от -40˚С до +120˚С",
    },
    {
      title:
        language === "uz" ? "Zarar qabul qiluvchilik" : "Терпимость к потерям",
      description:
        language === "uz"
          ? "G3, (G1 - so'rov bo'yicha)"
          : "G3, (G1 - по запросу)",
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
      title: language === "uz" ? "Shaffoflik" : "Прозрачность",
      description: language === "uz" ? "82% gacha" : "до 82%",
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
          {language === "uz" ? "Uyali polikarbonat" : "Сотовый поликарбонат"}
        </span>
      </p>
      <div className="flex justify-between items-center mb-8">
        <div>
          <H1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            {language === "uz" ? "Uyali polikarbonat" : "Сотовый поликарбонат"}
          </H1>
          <P className="w-[77%] text-lg mb-10">
            {language === "uz"
              ? "Polimer materiallar turli maqsadlar uchun bino va inshootlarni qurishda keng qo'llaniladi. Uyali polikarbonat - bu ikki yoki uch qatlamli panel bo'lib, ular orasida uzunlamasina qattiqlashtiruvchilar joylashgan. Uyali struktura nisbatan past o'ziga xos tortishish bilan varaqning yuqori mexanik kuchini ta'minlaydi. Uyali polikarbonatning barcha texnik xususiyatlarini  tushunish va tushunish uchun uning xususiyatlarini va parametrlarini batafsil ko'rib chiqaylik."
              : "Полимерные материалы широко используются при строительстве зданий и сооружений различного назначения. Сотовый поликарбонат представляет собой двух- или трехслойную панель с продольными ребрами жесткости между ними. Ячеистая структура обеспечивает высокую механическую прочность листа при сравнительно невысоком удельном весе. Чтобы разобраться и разобраться во всех технических характеристиках сотового поликарбоната, давайте подробнее рассмотрим его особенности и параметры."}
          </P>
          <div className="flex gap-x-5">
            <a href={PDF} download="Uyali-polikarbonat">
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
        {language === "uz" ? "Uz" : "Сотового поликарбоната"}{" "}
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
              <div className="pb-3 ">
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
        position="max-[412px]:text-[24px]"
        text={
          language === "uz" ? "Distribyutorga aylaning" : "Стань дистрибьютором"
        }
        modal={toggle}
        setModal={setToogle}
      />
    </div>
  );
};

export default HomeCellular;

const IMG = styled.img`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 410px) {
    line-height: 55px;
  }
`;
