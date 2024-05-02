import React, { useEffect, useContext, useState } from "react";
import { LocalizationApi } from "../Context/Language";
import { Link } from "react-scroll";
import telegram from "../assets/network/tg.png";
import instagram from "../assets/network/insta.png";
import facebook from "../assets/network/facebook.png";
import gmail from "../assets/network/gmail.png";
import "../Styles/Popupmenu.css";

const PopupMenu = ({ modal, setModal }) => {
  const { language, setLanguage } = useContext(LocalizationApi);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

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
      window.open(url);
    }
  };

  return (
    <div>
      {modal && (
        <div className="modal2 z-[555]">
          <div className="overlay2" onClick={() => setModal(false)}></div>
          <div className={`popup-menu ${modal ? "activee" : "nonActivee"}`}>
            <div className="text2">
              <Link
                to="page1"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className={`btn1 prgrf font-bold`}
              >
                {language === "uz" ? "BOSH SAHIFA" : "ГЛАВНАЯ"}
              </Link>
              <Link
                to="page2"
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                className={`btn1 prgrf font-bold`}
              >
                {language === "uz" ? "MAHSULOTLAR" : "ТОВАРЫ"}
              </Link>
              <Link
                to="page4"
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                className={`btn1 prgrf font-bold`}
              >
                {language === "uz" ? "ALOQA" : "КОНТАКТЫ"}
              </Link>
              <select
                className="language"
                onChange={handleLanguageChange}
                value={language}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
              <div className="flex-network">
                <img
                  src={telegram}
                  onClick={() => handleNetworkClick(0)}
                  alt=""
                />
                <img
                  src={instagram}
                  onClick={() => handleNetworkClick(1)}
                  alt=""
                />
                <img src={gmail} onClick={() => handleNetworkClick(2)} alt="" />
                <img
                  src={facebook}
                  onClick={() => handleNetworkClick(3)}
                  alt=""
                />
              </div>
            </div>

            <div className="h-[200px] flex items-center">
              <div className="animation3">
                <button className="nomer3" onClick={handlePhoneNumberClick}>
                  <a href="tel:+998950000044">+998 95 000-00-44</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
