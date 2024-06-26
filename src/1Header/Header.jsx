import React, { useEffect, useState, useContext } from "react";
import { LocalizationApi } from "../Context/Language";
import "./Header.css";
import icon from "../assets/logotip/s_header__logo.svg";

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

  // Network-href
  const handlePhoneNumberClick = () => {
    window.location.href = "tel:+998950000044";
  };

  // Popup Menu
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  //Visible Menu
  const [submenuActive, setSubmenuActive] = useState(false);

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
                <li
                  className="list-none"
                  onClick={() =>
                    window.scrollTo(
                      window.location.pathname === "/"
                        ? { top: 0, behavior: "smooth" }
                        : { top: 0, behavior: "auto" }
                    )
                  }
                >
                  {language === "uz" ? "BOSH SAHIFA" : "ГЛАВНАЯ"}
                </li>
              </RouterLink>
            </Link>
            <Link
              to="page2"
              spy={true}
              smooth={true}
              offset={-105}
              duration={500}
              className="btn1 font-bold"
              onMouseEnter={() => setSubmenuActive(true)}
            >
              <RouterLink to="/">
                {language === "uz" ? "MAHSULOTLAR" : "ТОВАРЫ"}
              </RouterLink>
            </Link>
            <ul
              onMouseLeave={() => setSubmenuActive(false)}
              className={`left-[95px] font-medium flex flex-col rounded-sm z-10  ${
                submenuActive ? "active" : ""
              }`}
              id="submenu"
            >
              <RouterLink to="/cellular-polycarbonate/">
                <li
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                >
                  {language === "uz"
                    ? "Uyali Polikarbonat"
                    : "Сотовый поликарбонат"}
                </li>
              </RouterLink>
              <hr className="border-1 border-purple-700" />
              <RouterLink to="/profiled-polycarbonate">
                <li
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                >
                  {language === "uz"
                    ? "Profillangan polikarbonat"
                    : "Профилированный поликарбонат"}
                </li>
              </RouterLink>
              <hr className="border-1 border-purple-700" />
              <RouterLink to="/accessories/">
                <li
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                >
                  {language === "uz" ? "Aksessuarlar" : "Аксессуары"}
                </li>
              </RouterLink>
            </ul>
            <Link
              to="page4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="btn1 font-bold"
            >
              <RouterLink to="/contact">
                <li
                  className="list-none"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                >
                  {language === "uz" ? "ALOQA" : "КОНТАКТЫ"}
                </li>
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
