import React, { useEffect, useState, useContext } from "react";
import { LocalizationApi } from "../Context/Language";
import "./Header.css";
import icon from "../assets/logotip/s_header__logo.svg";
import sun from "../assets/dark-mode/sun.png";
import moon from "../assets/dark-mode/moon.png";
import telegram from "../assets/network/tg.png";
import instagram from "../assets/network/insta.png";
import facebook from "../assets/network/facebook.png";
import gmail from "../assets/network/gmail.png";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  // Fixed

  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY >= 20);
    };

    const handleScroll = () => {
      setFixed();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fixed

  // PopUp-menu

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    const popupMenu = document.querySelector(".popup-menu");

    if (popupMenu) {
      popupMenu.classList.toggle("active");
    }
  };

  // PopUp-menu

  //Language-mode

  const { language, setLanguage } = useContext(LocalizationApi); // Default language is Uzbek (uz)

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  //Language-mode

  //Dark-mode

  const toggleDarkMode = () => {
    const body = document.querySelector(".body");
    const darkModeImages = document.querySelectorAll(".dark-mode img");

    body.classList.toggle("darkmode");

    darkModeImages.forEach((img) => {
      img.classList.toggle("hidden");
    });
  };

  //Dark-mode

  //Network-href

  const handlePhoneNumberClick = () => {
    window.location.href = "tel:+998950000044";
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
      window.open(url, "_blank");
    }
  };

  //Network-href

  //Btn-active

  const [activeButton] = useState("");

  //Btn-active

  return (
    <>
      <div className="fixedColor z-50">
        <div className={fix ? "head fixed" : "head"}>
          <Link
            to="page1"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            <RouterLink to="/">
              <img className="icon cursor-pointer" src={icon} alt="" />
            </RouterLink>
          </Link>

          <div className="flexItem">
            <div className="headText">
              <Link
                to="page1"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className={`btn1 ${
                  activeButton === 0 ? "active" : ""
                } font-bold`}
              >
                <RouterLink to="/">
                  {language === "uz" ? "BOSH SAHIFA" : "ГЛАВНАЯ"}
                </RouterLink>
              </Link>
              <Link
                to="page2"
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                className={`btn1 ${
                  activeButton === 1 ? "active" : ""
                } font-bold`}
              >
                <RouterLink to="/">
                  {language === "uz" ? "MAHSULOTLAR" : "ТОВАРЫ"}
                </RouterLink>
              </Link>
              <Link
                to="page4"
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                className={`btn1 ${
                  activeButton === 2 ? "active" : ""
                } font-bold`}
              >
                <RouterLink to="/">
                  {language === "uz" ? "ALOQA" : "КОНТАКТЫ"}
                </RouterLink>
              </Link>
            </div>
            <select
              className="language"
              onChange={handleLanguageChange}
              value={language}
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
            <div className="dark-mode" onClick={toggleDarkMode}>
              <img src={sun} alt="" />
              <img src={moon} alt="" />
            </div>
            <div className="menu">
              <Button className="btn" type="primary" onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </div>

            <div className="animation">
              <button className="nomer" onClick={handlePhoneNumberClick}>
                <a href="tel:+998950000044">+998 95 000-00-44</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-menu z-50">
        <div className="text">
          <Link
            to="page1"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            className={`btn1 prgrf ${
              activeButton === 0 ? "active" : ""
            } font-bold`}
          >
            {language === "uz" ? "BOSH SAHIFA" : "ГЛАВНАЯ"}
          </Link>
          <Link
            to="page2"
            spy={true}
            smooth={true}
            offset={-105}
            duration={500}
            className={`btn1 prgrf ${
              activeButton === 1 ? "active" : ""
            } font-bold`}
          >
            {language === "uz" ? "MAHSULOTLAR" : "ТОВАРЫ"}
          </Link>
          <Link
            to="page4"
            spy={true}
            smooth={true}
            offset={-105}
            duration={500}
            className={`btn1 prgrf ${
              activeButton === 2 ? "active" : ""
            } font-bold`}
          >
            {language === "uz" ? "ALOQA" : "КОНТАКТЫ"}
          </Link>
          <select
            className="language"
            onChange={handleLanguageChange}
            value={language}
          >
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
          <div className="flex-network">
            <img src={telegram} onClick={() => handleNetworkClick(0)} alt="" />
            <img src={instagram} onClick={() => handleNetworkClick(1)} alt="" />
            <img src={gmail} onClick={() => handleNetworkClick(2)} alt="" />
            <img src={facebook} onClick={() => handleNetworkClick(3)} alt="" />
          </div>
        </div>

        <div style={{ height: "150px" }}>
          <div className="animation2">
            <button className="nomer" onClick={handlePhoneNumberClick}>
              <a href="tel:+998909893111">+998 95 000-00-44</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
