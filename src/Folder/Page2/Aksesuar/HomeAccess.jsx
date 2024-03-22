import React, { useState, useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import { Link } from "react-router-dom";
import img from "../../../LexanTovar/access.jpg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";
import styled from "styled-components";

const PDF =
  "http://localhost:5173/cellular_polycarbonate/GCPru250213print1.pdf";

const HomeAccess = () => {
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

  const text = [
    "Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun tuzilishning mustahkamligi va estetik ko'rinishi uchun maxsus biriktiruvchi profillar va aksessuarlar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi.",
    "Polikarbonat profillari har xil turdagi qoplamalar uchun eng qulay va eng mosini tanlashingiz uchun maxsus ishlab chiqilgan. Masalan, varaqlarni bir-biriga burchak ostida mahkamlash uchun, tomning tizmasidagi choyshablarni ulash uchun, polikarbonat qoplamasining uchlarini bezash uchun.",
    "Tashqi tomondan barcha profillar ultrabinafsha nurlaridan himoyalangan va butun xizmat muddati davomida shakli va ko'rinishini saqlab qoladi.",
    "Profilni o'rnatishdan oldin, uyali polikarbonat varag'ining uchlarini muhr yoki teshilgan lenta bilan yopish tavsiya etiladi.",
    "Shaffof, bronza, ko'k, yashil, firuza, qizil, sariq, to'q sariq, kehribar, kumush, kulrang, oq, granat: Barcha profillar uyali polikarbonat choyshablarining ranglariga to'liq mos keladigan keng ranglarda mavjud.",
  ];

  const renderedText = text.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const advantages = [
    {
      title:
        language === "uz" ? "Dizaynlarning estetikasi" : "Уникальное согнутый",
    },
    {
      title:
        language === "uz"
          ? "Ushbu mahkamlash usuli bilan dizayn ancha bardoshli va samarali."
          : "UV-защита слоя -",
    },
    {
      title:
        language === "uz"
          ? "Har xil yopishtiruvchi va mastiklar ishlatilmaydi"
          : "Светопропускание",
    },
    {
      title:
        language === "uz"
          ? "Sizdirmazlik va gidroizolyatsiya ehtiyotkorlik bilan loyihalash orqali erishiladi"
          : "Критический температурный диапазон",
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
        <span className="text-blue-600">Aksessuarlar</span>
      </p>
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
            Aksessuarlar
          </h1>
          <P className="w-[80%] flex flex-col gap-y-5 text-lg mb-10">
            {renderedText}
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
        <IMG
          style={{
            backgroundImage: `url(${img})`,
            width: "100%",
            backgroundSize: "cover",
          }}
        ></IMG>
      </div>
      <h1 className="text-3xl mb-5 mt-10">
        Maxsus komponentlarning
        <span className="font-semibold"> afzalliklari:</span>
      </h1>
      <div className="flex justify-between flex-wrap">
        <ul className={`Advantage pt-3 `}>
          {advantages.slice(0, 2).map((advantage, index) => (
            <li key={index}>
              <div className="pb-3 w-[90%]">
                <span>{advantage.title} </span>
              </div>
            </li>
          ))}
        </ul>
        <ul className={`Advantage pt-3 `}>
          {advantages.slice(2, 4).map((advantage, index) => (
            <li key={index}>
              <div className="pb-3 w-[77%]">
                <span>{advantage.title} </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeAccess;

const IMG = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
