import React, { useState, useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import { Link } from "react-router-dom";
import img from "../../../LexanTovar/profiled.jpg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";
import styled from "styled-components";

const PDF =
  "http://localhost:5173/cellular_polycarbonate/Greko-rabochiy-A4.pdf";

const HomeProfiled = () => {
  const { language } = useContext(LocalizationApi);
  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };

  const downloadFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  const advantages = [
    {
      title:
        language === "uz"
          ? "Eng yuqori zarba qarshiligi"
          : "Уникальное согнутый",
      description: "uni buzish mumkin emas",
    },
    {
      title: language === "uz" ? "UV himoya qatlami" : "UV-защита слоя -",
      description: "Mavjud",
    },
    {
      title:
        language === "uz"
          ? "Yonuvchanlik - sekin yonish qobiliyati."
          : "Светопропускание",
      description: "yonuvchanlik guruhi G1 bilan",
    },
    {
      title:
        language === "uz"
          ? "Haddan tashqari haroratga bardosh beradi"
          : "Критический температурный диапазон",
      description: "-40˚S dan +120˚S gacha",
    },
    {
      title:
        language === "uz"
          ? "Silikat oynaga nisbatan past o'ziga xos tortishish"
          : "Устойчивость к удару",
      description: "1,19 g/sm³",
    },
    {
      title:
        language === "uz"
          ? "Yuqori issiqlik izolyatsiyasi"
          : "Высокая теплоизоляционные характеристики",
      description: "Isitish xarajatlarini ikki baravar kamaytiradi",
    },
    {
      title:
        language === "uz"
          ? "Organik oynaga mos keladigan shaffoflik -"
          : "Прозрачность",
      description: "90% gacha",
    },
    {
      title: language === "uz" ? "Kafolat:" : "Гарантия:",
      description: "10 va 15 yil",
    },
  ];
  return (
    <div>
      <p className="py-3 text-sm">
        <Link to="/">
          <span className=" hover:text-blue-600 cursor-pointer">
            Bosh sahifa
          </span>
        </Link>
        <span className="text-gray-400"> / </span>
        <span className="text-blue-600">Profillangan polikarbonat</span>
      </p>
      <div className="flex justify-between  mb-8">
        <div>
          <H1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            Profillangan polikarbonat
          </H1>
          <P className="w-[77%] text-lg mb-10">
            Profillangan (gofrirovka qilingan) varaq yuqori yorug'lik
            o'tkazuvchanligiga va keng ish haroratiga ega, bu uni issiqxonalarni
            qoplash va tomlarni oynalash uchun ideal echimga aylantiradi. Bunday
            choyshablar konstruksiyalarning korroziyaga chidamli qoplamasi va
            binolarning qoplamasi (qoplama) uchun foydalanadigan mutaxassislar
            tomonidan baholanadi. Plitalar o'z-o'zini qurish uchun ham
            ishlatilishi mumkin. Profillangan polikarbonat qatlami zararli
            ultrabinafsha nurlanishini o'tkazmaydi va to'liq himoya qiladi. Bu
            barg sarg'aymaydi va yillar davomida o'z xususiyatlarini saqlab
            qoladi.
          </P>
          <div className="flex gap-x-5">
            <Button
              id={"btn"}
              onClick={() => {
                downloadFile(PDF);
              }}
              text={
                language === "uz" ? "Yuklab olish katalogi" : "Скачать каталог"
              }
              position={
                "bg-[#5bb521] text-[16px] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_23rem_0_0_0] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
              }
            />
            <Button
              id={"btn"}
              onClick={handleClick}
              text={"Distribyutorga aylaning"}
              position="text-[16px] bg-transparent rounded-none hover:text-white"
            />
            <Write
              text={"Distribyutorga aylaning"}
              modal={toggle}
              setModal={setToogle}
            />
          </div>
        </div>
        <IMG src={img} width="33%" alt="" />
      </div>
      <h1 className="text-3xl mb-5">
        Profillangan polikarbonatning{" "}
        <span className="font-semibold">afzalliklari:</span>
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
  }
`;

const P = styled.p`
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
