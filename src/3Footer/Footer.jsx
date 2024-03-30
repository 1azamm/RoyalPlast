import React, { useContext } from "react";
import footerLogo from "../assets/logotip/lexanLogo.png";
import telegram from "../assets/network/tg.png";
import instagram from "../assets/network/insta.png";
import facebook from "../assets/network/facebook.png";
import gmail from "../assets/network/gmail.png";

import { LocalizationApi } from "../Context/Language";
import styled from "styled-components";
import "./Footer.css";

const Footer = () => {
  //Language
  const { language } = useContext(LocalizationApi);
  //Language

  //Network-href
  const handlePhoneNumberClick = (i) => {
    let url = "";
    switch (i) {
      case 0:
        url = "tel:+998950000044";
        break;
      case 1:
        url = "tel:+998957000044";
        break;
      default:
        break;
    }
  };

  const handleNetworkClick = (index) => {
    let url = "";
    switch (index) {
      case 0:
        url = "https://t.me/leksan_nomer1";
        break;
      case 1:
        url = "https://instagram.com/rossiyskiy_leksan.uz?utm_medium=copy_link";
        break;
      case 2:
        url = "mailto:royalplast1977@gmail.com";
        break;
      case 3:
        url = "#facebook";
        break;
      default:
        break;
    }

    if (url) {
      window.open(url);
    }
  };
  const maps = () => {
    window.open("https://yandex.uz/maps/-/CDFufN~P", "_blank");
  };
  //Network-href
  return (
    <>
      <DIV
        className="display flex items-center justify-between px-10 mx-5 rounded-t-xl  py-10 mt-20 bg-gray-100"
        style={{ background: "" }}
      >
        <IMG className=" w-80 cursor-pointer" src={footerLogo} alt="" />
        <div className="mainText flex justify-center">
          <H3
            onClick={maps}
            className="country relative -left-10 text-blue-700 text-2xl w-[65%] text-center cursor-pointer hover:text-blue-900"
          >
            {language === "uz"
              ? "Toshkent shahar, Olmazor tumani, Qorasaroy ko'chasi, 326"
              : "Город Ташкент, Алмазарский район, улица Карасарой, 326"}
          </H3>
        </div>
        <div className="rightText flex flex-col items-center justify-center">
          <div className="call flex flex-col pt-8">
            <button
              className="text-xl hover:text-blue-700"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgb(0, 170, 255))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              onClick={() => handlePhoneNumberClick(0)}
            >
              <A className="tel font-bold" href="tel:+998909893111">
                +998 95 000 00 44
              </A>
            </button>
            <button
              className="text-xl hover:text-blue-700 pt-2"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgb(0, 170, 255))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              onClick={() => handlePhoneNumberClick(1)}
            >
              <A className="tel font-bold" href="tel:+998889943111">
                +998 95 700 00 44
              </A>
            </button>
          </div>
          <FlexImg className="flex-network flex  gap-x-2 pt-7">
            <Img
              className="net w-10 cursor-pointer transition-transform active:scale-[1.2] hover:scale-[1.2]"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgba(0, 0, 0, 0.553))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              src={telegram}
              onClick={() => handleNetworkClick(0)}
              alt=""
            />

            <Img
              className="net w-10 cursor-pointer transition-transform active:scale-[1.2] hover:scale-[1.2]"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgba(0, 0, 0, 0.553))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              src={instagram}
              onClick={() => handleNetworkClick(1)}
              alt=""
            />
            <Img
              className="net w-10 cursor-pointer transition-transform active:scale-[1.2] hover:scale-[1.2]"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgba(0, 0, 0, 0.553))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              src={gmail}
              onClick={() => handleNetworkClick(2)}
              alt=""
            />
            <Img
              className="net w-10 cursor-pointer transition-transform active:scale-[1.2] hover:scale-[1.2]"
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgba(0, 0, 0, 0.553))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
              src={facebook}
              onClick={() => handleNetworkClick(3)}
              alt=""
            />
          </FlexImg>
        </div>
      </DIV>
      <div className="copyright bg-gray-100 mb-5 mx-5 rounded-b-lg ">
        <HR className=" border-[0.7px] border-gray-300 mx-48"></HR>
        <p className="copyright2 bg-gray-100 text-[13px] text-center py-2 rounded-b-lg">
          {language === "uz" ? (
            <>
              © 2024 uzLexan.uz
              <a
                className="text-blue-500 underline px-1"
                href="https://t.me/AzamDevs"
              >
                Polygal Vostok
              </a>
              Tomonidan Ishlab Chiqilgan
            </>
          ) : (
            <>
              © 2024 uzLexan.uz Разработано
              <a
                className="text-blue-500 underline px-1"
                href="https://t.me/AzamDevs"
              >
                Полигаль Восток
              </a>
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Footer;

const DIV = styled.div`
  @media only screen and (max-width: 650px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 1100px) {
    width: 25%;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 650px) {
    width: 65%;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
  }
`;

const H3 = styled.h3`
  @media only screen and (max-width: 1150px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 22px;
    width: 100%;
    position: relative;
    left: 0;
  }
  @media only screen and (max-width: 430px) {
    font-size: 21px;
    width: 100%;
    position: relative;
    left: 0;
  }
`;

const A = styled.a`
  @media only screen and (max-width: 1250px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

const FlexImg = styled.div`
  @media only screen and (max-width: 1150px) {
    position: relative;
    right: 30px;
  }
  @media only screen and (max-width: 850px) {
    position: relative;
    right: 40px;
  }
  @media only screen and (max-width: 750px) {
    position: relative;
    right: 60px;
  }
  @media only screen and (max-width: 650px) {
    position: relative;
    left: 0;
  }
  @media only screen and (max-width: 430px) {
    position: relative;
    left: 0;
  }
`;

const Img = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 35px !important;
  }
`;

const HR = styled.p`
  @media only screen and (max-width: 650px) {
    width: 80%;
    margin: 0 auto;
  }
`;
