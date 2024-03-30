import React, { useContext, useState } from "react";
// import Slide from "react-reveal/Slide";
import { LocalizationApi } from "../Context/Language";
import Title from "../utils/Title";
import styled from "styled-components";
import "../Styles/Page2.css";
import { Link } from "react-router-dom";

import img1 from "../LexanTovar/polikar.png";
import img2 from "../LexanTovar/profillangan.png";
import img3 from "../LexanTovar/aksesuar.png";

const Page2 = () => {
  const { language } = useContext(LocalizationApi);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    {
      img: img1,
      index: 1,
      h1: (
        <h1 className="w-[30%] text-[#2c679f]">
          {language === "uz" ? "Uyali Polikarbonat" : "Сотовый поликарбонат"}
        </h1>
      ),
      hoverText: (
        <div className="ImgContent flex flex-col gap-y-5 p-10 bg-blue-900 opacity-0 h-[320px] hover:opacity-70 transition ">
          <HoverH1 className="font-semibold text-[22px] w-[30%] text-white opacity-100">
            {language === "uz" ? "Uyali Polikarbonat" : "Сотовый поликарбонат"}
          </HoverH1>
          <HoverP className="text-white opacity-100 text-sm font-light">
            {language === "uz"
              ? " Paxta kabi yengil, uyali polikarbonat panellari turli xil soyalarda va shaffoflik darajasida mavjud bo'lib, pollar, qoplamalar va oynalar tizimlarini qurishda keng qo'llaniladi."
              : "Легкие панели сотового поликарбоната доступны в различных оттенках и степенях прозрачности и широко используются при строительстве полов, облицовки и систем остекления."}
          </HoverP>
        </div>
      ),
      link: "/cellular-polycarbonate/",
    },
    {
      img: img2,
      index: 2,
      h1: (
        <h1 className="w-[30%] text-[#2c679f]">
          {language === "uz"
            ? "Profillangan polikarbonat"
            : "Профилированный поликарбонат"}
        </h1>
      ),
      hoverText: (
        <div className="ImgContent flex flex-col gap-y-5 p-10 bg-blue-900 opacity-0 h-[320px] hover:opacity-70 transition ">
          <HoverH1 className="font-semibold text-[22px] text-white opacity-100">
            {language === "uz"
              ? "Profillangan polikarbonat"
              : "Профилированный поликарбонат"}
          </HoverH1>
          <HoverP className="text-white opacity-100 text-sm font-light">
            {language === "uz"
              ? "Yupqa, shaffof, moslashuvchan va bardoshli profilli monolit polikarbonat plitalari shishaning yarmiga teng va an'anaviy alternativlarga nisbatan bir qator afzalliklarga ega: 20 baravar yuqori zarba qarshiligi, eng yuqori yorug'lik o'tkazuvchanligi, eng past sarg'ish indeksi, eng yuqori yuk ko'tarish qobiliyati va shamol tomonidan ko'tarilish uchun eng yuqori qarshilik."
              : "Тонкие, прозрачные, гибкие и прочные листы профилированного монолитного поликарбоната весят вдвое меньше стекла, обладают рядом преимуществ по сравнению с традиционными альтернативами: до 20 раз большая ударопрочность, самая высокая светопроницаемость, самый низкий индекс пожелтения, самая высокая предельная нагрузка и самая высокая устойчивость к поднятию ветром."}
          </HoverP>
        </div>
      ),
      link: "/profiled-polycarbonate/",
    },
    {
      img: img3,
      index: 3,
      h1: (
        <h1 className="w-[30%] text-[#2c679f]">
          {language === "uz" ? "Aksessuarlar" : "Аксессуары"}
        </h1>
      ),
      hoverText: (
        <div className="ImgContent flex flex-col gap-y-5 p-10 bg-blue-900 opacity-0 h-[320px] hover:opacity-70 transition ">
          <HoverH1 className="font-semibold text-[22px] w-[30%] text-white opacity-100">
            {language === "uz" ? "Aksessuarlar" : "Аксессуары"}
          </HoverH1>
          <HoverP className="text-white opacity-100 text-sm font-light">
            {language === "uz"
              ? "Plitalarni bir-biriga ulash, siqish va muhrlash uchun komponentlar, shuningdek uyali va monolit polikarbonat plitalari bilan ishlash uchun moslashtirilgan maxsus maqsadlar uchun qo'shimcha aksessuarlar."
              : "Компоненты для соединения, зажима и герметизации плит, а также дополнительные аксессуары специального назначения, приспособленные для работы с плитами сотового и монолитного поликарбоната."}
          </HoverP>
        </div>
      ),
      link: "/accessories/",
    },
  ];

  return (
    <Section className="w-full flex flex-col gap-10 justify-center m-auto py-28">
      <Title
        position={
          "text-center mb-2 underline decoration-[#77b94c] underline-offset-[14px]"
        }
        text={language === "uz" ? "BIZNING MAHSULOTLAR" : "Наши продукты"}
      />

      <DIV className="flex flex-row gap-5 flex-wrap xl:flex-nowrap justify-center">
        {images.map((item, i) => (
          // <Slide bottom key={i}>
          <Link to={item.link}>
            <ImgContainer
              onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <BackgroundDiv
                style={{
                  backgroundImage: `url(${item.img}) `,
                  width: "470px",
                  height: "320px",
                }}
              >
                <ContentContainer>
                  <ImgTextContainer
                    className={hoveredIndex === i ? "hovered" : ""}
                  >
                    {item.h1}
                  </ImgTextContainer>
                  <ImgHoverText
                    className={hoveredIndex === i ? "visible" : "hidden"}
                  >
                    {item.hoverText}
                  </ImgHoverText>
                </ContentContainer>
              </BackgroundDiv>
            </ImgContainer>
          </Link>
          // </Slide>
        ))}
      </DIV>
    </Section>
  );
};

export default Page2;

const Section = styled.section`
  padding: 60px 0;
`;

const DIV = styled.div`
  @media only screen and (max-width: 550px) {
    row-gap: 20px !important;
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  display: inline-block;
  filter: drop-shadow(0 0 5px #3434344f);
`;

const BackgroundDiv = styled.div`
  background-size: cover;
  position: relative;

  &:hover {
    cursor: pointer;
    transition: all 1s;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 500px) {
    width: 420px !important;
    height: 280px !important;
  }
  @media only screen and (max-width: 430px) {
    width: 410px !important;
    height: 270px !important;
  }
  @media only screen and (max-width: 412px) {
    width: 390px !important;
  }
  @media only screen and (max-width: 390px) {
    width: 370px !important;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ImgTextContainer = styled.h1`
  padding: 20px;
  display: flex;
  align-items: end;
  transition: 0.2s;
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  width: 470px;
  height: 320px;
  &:hover {
    opacity: 0;
  }

  &.hovered {
    opacity: 0;
  }
`;

const ImgHoverText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;

  &.visible {
    opacity: 1;
  }
  @media only screen and (max-width: 500px) {
    top: 20px;
  }
  @media only screen and (max-width: 430px) {
    top: 0px;
  }
`;

const HoverH1 = styled.h1`
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const HoverP = styled.p`
  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`;
