import React, { useContext, useState } from "react";
import Button from "../utils/Button";
import styled from "styled-components";
import { LocalizationApi } from "../Context/Language";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";

import "../Styles/Page1.css";
import "../Styles/modal.scss";

import img1 from "../LexanTovar/RoyalPlast.png";
import icon from "../assets/imgs/true.png";
import play from "../assets/imgs/play.png";

import Write from "../utils/Write";

const Page1 = () => {
  const { language } = useContext(LocalizationApi);
  const [isOpen, setOpen] = useState(false);

  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };

  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  const text = {
    h1UZ: [
      <div className=" leading-[55px]">
        <span className="text-[#179bd7]">ROYAL </span>
        <span className="text-[#77b94c]">PLAST </span>
        <P2 className="text-blue-900">LEXAN POLIKARBONATI NIMA? </P2>
      </div>,
    ],
    h1RU: [
      <div className=" leading-[55px]">
        <P2 className="text-blue-900">
          ЧТО ТАКОЕ ПОЛИКАРБОНАТ <span className="text-[#179bd7]">ROYAL </span>{" "}
          <span className="text-[#77b94c]">PLAST </span> LEXAN?{" "}
        </P2>
      </div>,
    ],
    pUZ: "Lexan Polikarbonat shaffof, bardoshli va zarbaga chidamli material bo'lib, turli xil ilovalar, jumladan, muhandislik, qurilish va tibbiy asboblarda keng qo'llaniladi.",
    pRU: "Поликарбонат Lexan — это прозрачный, прочный и ударопрочный материал, широко используемый в различных областях, включая машиностроение, строительство и изготовление медицинских устройств.",
  };

  const InfoItem = ({ text }) => (
    <div className="flex items-start gap-x-2 ">
      <img className="w-7 h-7" src={icon} alt="" />
      <P>{text}</P>
    </div>
  );
  const infoData = [
    {
      icon: "icon1.png",
      text: "20 yillik xizmat muddati kafolati",
      textRU: "20-летняя гарантия",
    },
    {
      icon: "icon2.png",
      text: "Zavod kafolati - 15 yil",
      textRU: "Заводская гарантия - 15 лет.",
    },
    {
      icon: "icon3.png",
      text: "Polikarbonat, akril, polistirol va butlovchi qismlarning ulgurji savdosi",
      textRU:
        "Оптовая продажа поликарбоната, акрила, полистирола и комплектующих.",
    },
    {
      icon: "icon4.png",
      text: "50 yillik tarixga ega polimer ishlab chiqaruvchisi",
      textRU: "Производитель полимеров с 50-летней историей",
    },
  ];

  return (
    <>
      <Container id="page1" className="flex bg">
        <div className="text w-[50%] pl-5 pr-5">
          <FirstText className="flex items-center gap-x-10 ">
            <RoyalPlast className="text-3xl font-bold">
              <span className="text-[#179bd7]">Royal </span>
              <span className="text-[#77b94c]">Plast </span>
            </RoyalPlast>
            <FirstP className="text-gray-700 text-sm">
              {language === "uz"
                ? "Eng yirik polikarbonat ishlab chiqarish zavodi"
                : "Крупнейший завод по производству поликарбоната"}
            </FirstP>
          </FirstText>
          <H1 className="text-5xl font-semibold mt-32">
            {language === "uz" ? text.h1UZ : text.h1RU}
          </H1>
          <P3 className="text-gray-700 font-light pt-5">
            {language === "uz" ? text.pUZ : text.pRU}
          </P3>
          <ButtonContainer className="flex gap-x-6 pt-20">
            <Link to="/more-info/">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                text={language === "uz" ? "Batafsil" : "Более"}
                position={
                  "bg-[#5bb521] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_23rem_0_0_0] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
                }
              />
            </Link>
            <Button
              text={"Murojaat"}
              position="bg-transparent rounded-none hover:text-white"
              onClick={handleClick}
            />
            <Write text={"Murojaat"} modal={toggle} setModal={setToogle} />
          </ButtonContainer>

          <InfoContainer className="Info flex justify-between flex-wrap gap-y-5 pt-10">
            {infoData.map((item, index) => (
              <INFO key={index} className="flex flex-col gap-y-5 w-[47%]">
                <InfoItem
                  icon={item.icon}
                  text={language === "uz" ? item.text : item.textRU}
                />
              </INFO>
            ))}
          </InfoContainer>

          <PlayContainer>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="as5eYfiIq_0"
              onClose={() => setOpen(false)}
            />
            <Play src={play} onClick={() => setOpen(true)}></Play>
          </PlayContainer>
        </div>
        <IMG src={img1} alt="" className="w-[50%]" />
      </Container>
    </>
  );
};

export default Page1;

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    position: relative;
    top: -10px;
  }
  @media only screen and (max-width: 550px) {
    top: -17px;
  }
  @media only screen and (max-width: 430px) {
    top: -8px;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const FirstText = styled.div`
  @media only screen and (max-width: 1000px) {
    padding-top: 10px;
    column-gap: 10px;
  }
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FirstP = styled.p`
  @media only screen and (max-width: 1000px) {
    color: white !important;
    font-weight: 400 !important;
  }
`;

const RoyalPlast = styled.h1`
  @media only screen and (max-width: 1050px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1050px) {
    font-size: 22px;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 1200px) {
    font-size: 40px;
    font-weight: 800;
    margin-top: 70px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 35px;
    margin-top: 20px;
  }
`;
const P2 = styled.p`
  @media only screen and (max-width: 1000px) {
    color: white !important;
  }
  @media only screen and (max-width: 555px) {
    font-size: 25px;
    line-height: 27px;
  }
  @media only screen and (max-width: 430px) {
    line-height: 32px;
  }
`;
const P3 = styled.p`
  @media only screen and (max-width: 1000px) {
    padding-top: 0;
    color: #b2b2b2 !important;
    font-weight: 300 !important;
    font-size: 15px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 1200px) {
    padding-top: 50px;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 10px;
  }
  @media only screen and (max-width: 550px) {
    position: relative;
    left: 15px;
  }
  @media only screen and (max-width: 430px) {
    left: 13px;
  }
`;

const InfoContainer = styled.div`
  @media only screen and (max-width: 1200px) {
    padding-top: 0px;
    width: 100%;
  }
  @media only screen and (max-width: 555px) {
    margin-top: 15px;
  }
`;

const INFO = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
    gap: 10px !important;
  }
`;

const P = styled.p`
  text-align: start;
  @media only screen and (max-width: 1200px) {
    font-size: 15px !important;
  }
  @media only screen and (max-width: 1000px) {
    color: #ffffffd9 !important;
    font-weight: 400 !important;
  }
`;

const PlayContainer = styled.div`
  margin-top: 40px;
  display: none;
  border: 1.5px dashed white;
  border-radius: 50%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 555px) {
    margin-top: 25px;
  }
`;

const Play = styled.img`
  background-color: #77b94c;
  width: 90px;
  padding: 25px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #179bd7;
    transition-timing-function: linear;
    transition: all 0.2s linear;
  }
  @media only screen and (max-width: 550px) {
    width: 60px;
    padding: 15px;
  }
`;
