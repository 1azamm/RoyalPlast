import React, { useEffect, useState, useContext } from "react";
import { LocalizationApi } from "../Context/Language";
import "./Header.css";
import icon from "../assets/logotip/s_header__logo.svg";
import sun from "../assets/dark-mode/sun.png";
import moon from "../assets/dark-mode/moon.png";

import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import PopupMenu from "../utils/PopupMenu";

const Header = () => {
  // Fixed
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY >= 5);
    };

    const handleScroll = () => {
      setFixed();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Language-mode
  const { language, setLanguage } = useContext(LocalizationApi);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Dark-mode
  const toggleDarkMode = () => {
    const body = document.querySelector(".body");
    const darkModeImages = document.querySelectorAll(".dark-mode img");

    body.classList.toggle("darkmode");

    darkModeImages.forEach((img) => {
      img.classList.toggle("hidden");
    });
  };

  // Network-href
  const handlePhoneNumberClick = () => {
    window.location.href = "tel:+998950000044";
  };

  // Popup Menu
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div
        className={"Background z-[999] " + (fix ? "fixedColor" : "Background")}
      >
        <Link to="page1" spy={true} smooth={true} offset={-130} duration={500}>
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
              className="btn1 font-bold"
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
              className="btn1 font-bold"
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
              className="btn1 font-bold"
            >
              <RouterLink to="/">
                {language === "uz" ? "ALOQA" : "КОНТАКТЫ"}
              </RouterLink>
            </Link>
          </div>

          <div className="containerNomer2 w-[225px]">
            <div className="animation2">
              <button className="nomer2" onClick={handlePhoneNumberClick}>
                <a href="tel:+998950000044">+998 95 000-00-44</a>
              </button>
            </div>
          </div>

          <select
            className="language"
            onChange={handleLanguageChange}
            value={language}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
          <div className="dark-mode" onClick={toggleDarkMode}>
            <img src={sun} alt="" />
            <img src={moon} alt="" />
          </div>
          <div className="menu">
            <Button className="btn" type="primary" onClick={handleClick}>
              {collapsed ? <AlignLeftOutlined /> : <AlignRightOutlined />}
            </Button>
          </div>
          <div className="containerNomer1 w-[225px] h-[60px] flex items-center justify-center">
            <div className="animation1">
              <button className="nomer1" onClick={handlePhoneNumberClick}>
                <a href="tel:+998950000044">+998 95 000-00-44</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupMenu modal={collapsed} setModal={setCollapsed} />
    </>
  );
};

export default Header;
