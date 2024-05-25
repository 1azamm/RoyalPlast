import React, { useContext } from "react";
import footerLogo from "../assets/logotip/lexanLogo.png";
import telegram from "../assets/network/tg.png";
import instagram from "../assets/network/insta.png";
import facebook from "../assets/network/facebook.png";
import gmail from "../assets/network/gmail.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { LocalizationApi } from "../Context/Language";
import styled from "styled-components";

const Footer = () => {
  const { language } = useContext(LocalizationApi);

  const phoneNumbers = [
    { number: "+998 95 000 00 44", href: "tel:+998950000044" },
    { number: "+998 95 700 00 44", href: "tel:+998957000044" },
  ];

  const PhoneButton = ({ number, href }) => {
    const handleMouseOver = (e) => {
      e.currentTarget.style.filter = "drop-shadow(0 0 10px rgb(0, 170, 255))";
    };

    const handleMouseOut = (e) => {
      e.currentTarget.style.filter = "none";
    };

    return (
      <button
        className="text-xl hover:text-blue-700 pt-2"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => window.open(href)}
      >
        <a className="tel font-bold max-[1100px]:text-lg" href={href}>
          {number}
        </a>
      </button>
    );
  };

  const handleNetworkClick = (index) => {
    let url;
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
      window.location.href = url;
    }
  };

  const maps = () => {
    window.open("https://yandex.uz/maps/-/CDFufN~P", "_blank");
  };

  const renderNetworkIcons = () => {
    const networks = [
      { src: telegram, index: 0 },
      { src: instagram, index: 1 },
      { src: gmail, index: 2 },
      { src: facebook, index: 3 },
    ];

    return networks.map((network, index) => (
      <img
        key={index}
        className="net w-10 cursor-pointer transition-transform active:scale-[1.2] hover:scale-[1.2] max-[1100px]:w-[33px]"
        onMouseOver={(e) => {
          e.currentTarget.style.filter =
            "drop-shadow(0 0 10px rgba(0, 0, 0, 0.553))";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.filter = "none";
        }}
        src={network.src}
        onClick={() => handleNetworkClick(network.index)}
      />
    ));
  };
  const sections = [
    {
      title: (
        <>
          {window.location.pathname === "/" ? (
            <Link
              to="page2"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-bold"
            >
              <h1 className="max-[520px]:text-base">
                {language === "uz" ? "Mahsulotlar" : "Продукты"}
              </h1>
            </Link>
          ) : (
            <RouterLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              className="font-bold"
            >
              <h1 className="max-[520px]:text-base">
                {language === "uz" ? "Mahsulotlar" : "Продукты"}
              </h1>
            </RouterLink>
          )}
        </>
      ),
      links: [
        {
          label: (
            <>
              {language === "uz"
                ? "Uyali Polikarbonat"
                : "Сотовый поликарбонат"}
            </>
          ),
          to: "/cellular-polycarbonate/",
        },
        {
          label: (
            <>
              {language === "uz"
                ? "Profillangan polikarbonat"
                : "Профилированный поликарбонат"}
            </>
          ),
          to: "/profiled-polycarbonate",
        },
        {
          label: <>{language === "uz" ? "Aksessuarlar" : "Аксессуары"}</>,
          to: "/accessories/",
        },
        {
          label: (
            <h1 className="pt-7 max-[520px]:text-base">
              {language === "uz" ? "Manzil" : "Адрес"}
            </h1>
          ),
          onClick: maps,
        },
      ],
    },
    {
      title: (
        <>
          {window.location.pathname === "/" ? (
            <Link
              to="page3"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="font-bold"
            >
              <h1 className="max-[520px]:text-base">
                {language === "uz" ? "Turlar" : "Типы"}
              </h1>
            </Link>
          ) : (
            <RouterLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              className="font-bold"
            >
              <h1 className="max-[520px]:text-base">
                {language === "uz" ? "Turlar" : "Типы"}
              </h1>
            </RouterLink>
          )}
        </>
      ),
      links: [
        {
          label: <>{language === "uz" ? "Naveslar" : "Нефы"}</>,
          to: "/naveslar/",
        },
        {
          label: <>{language === "uz" ? "Issiqxonalar" : "Теплицы"}</>,
          to: "/issiqxonalar/",
        },
        {
          label: <>{language === "uz" ? "Gazebos" : "Беседки"}</>,
          to: "/gazebos/",
        },
        {
          label: <>{language === "uz" ? "To'siqlar" : "Препятствия"}</>,
          to: "/tosiqlar/",
        },
        {
          label: (
            <>
              {language === "uz" ? "Qishloq xo'jaligi" : "Сельское хозяйство"}
            </>
          ),
          to: "/qishloq-xojaligi/",
        },
      ],
    },
  ];

  const renderLinks = (links) => {
    return links.map((link, index) => {
      if (link.onClick) {
        return (
          <h1
            key={index}
            onClick={link.onClick}
            className="font-semibold text-lg cursor-pointer  text-blue-950 hover:text-blue-800"
          >
            {link.label}
          </h1>
        );
      } else {
        return (
          <RouterLink
            key={index}
            to={link.to}
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
          >
            <li
              style={{ listStyle: "circle" }}
              className="cursor-pointer list-outside text-blue-950 hover:text-blue-800  max-[520px]:text-sm "
            >
              {link.label}
            </li>
          </RouterLink>
        );
      }
    });
  };

  return (
    <>
      <Container
        className="mt-16 mx-10 py-14 pr-5 flex justify-between items-center rounded-t-xl border-t-2 border-gray-500 max-[860px]:flex-wrap max-[860px]:pl-5 max-[550px]:mx-5"
        style={{ backgroundColor: "rgb(242, 245, 250)" }}
      >
        <img
          className="w-[400px] max-[1100px]:w-[250px] max-[860px]:w-[100%] "
          src={footerLogo}
          alt=""
        />
        <div className="flex gap-x-20 w-[40%] max-[861px]:pl-5 max-[860px]:pt-7 max-[860px]:w-[65%] max-[725px]:w-[100%] max-[860px]:pl-5 max-[725px]:justify-center max-[550px]:justify-between">
          {sections.map((section, index) => (
            <ul key={index} className="flex flex-col gap-y-2">
              <RouterLink to="/">
                <h1 className="font-semibold text-lg cursor-pointer text-blue-950 hover:text-blue-800">
                  {section.title}
                </h1>
              </RouterLink>

              {renderLinks(section.links)}
            </ul>
          ))}
        </div>
        <div className="flex flex-col max-[725px]:pt-7 max-[725px]:justify-center max-[725px]:w-[100%]">
          {phoneNumbers.map((phoneNumber, index) => (
            <PhoneButton key={index} {...phoneNumber} />
          ))}
          <div className="flex justify-between pt-7 max-[725px]:justify-center max-[725px]:gap-x-3">
            {renderNetworkIcons()}
          </div>
        </div>
      </Container>
      <Container2 className=" bg-gray-100 mb-5 mx-10 rounded-b-lg max-[550px]:mx-5">
        <hr className=" border-[0.7px] border-gray-300 mx-20"></hr>
        <p className="copyright2 bg-gray-100 text-[13px] text-center py-2 rounded-b-xl border-b-2 border-gray-500 max-[550px]:text-[10px]">
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
      </Container2>
    </>
  );
};

export default Footer;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    margin: 80px 40px 0 40px;
  }
  @media only screen and (max-width: 900px) {
    margin: 80px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    margin: 80px 10px 0 10px;
  }
`;

const Container2 = styled.div`
  @media only screen and (max-width: 1200px) {
    margin: 0px 40px 20px 40px;
  }
  @media only screen and (max-width: 900px) {
    margin: 0px 20px 10px 20px;
  }
  @media only screen and (max-width: 430px) {
    margin: 0px 10px 10px 10px;
  }
`;
