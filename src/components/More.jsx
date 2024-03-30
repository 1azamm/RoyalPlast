import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "../Styles/More.css";
import Articles from "./Articles/Articles";
import { LocalizationApi } from "../Context/Language";

import Article1 from "./Articles/Article1";
import Article2 from "./Articles/Article2";
import Article3 from "./Articles/Article3";
import Article4 from "./Articles/Article4";
import Article5 from "./Articles/Article5";
import Article6 from "./Articles/Article6";
import Article7 from "./Articles/Article7";
import styled from "styled-components";

const More = () => {
  const { language } = useContext(LocalizationApi);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY >= 700);
    };

    const handleScroll = () => {
      setFixed();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container id="scroll" className="pt-[100px] px-20">
        <p className="py-3 text-sm">
          <Link to="/">
            <span className=" hover:text-blue-600 cursor-pointer">
              {language === "uz" ? "Bosh sahifa" : "Главный"}
            </span>
          </Link>
          <span className="text-gray-400"> / </span>
          <span className="text-blue-600">
            {language === "uz" ? "Batafsil" : "Более"}
          </span>
        </p>

        <div className="flex flex-col gap-y-7">
          <h1 className="text-4xl font-semibold">
            {language === "uz"
              ? "Uyali polikarbonatning texnik xususiyatlari"
              : "Технические характеристики сотового поликарбоната"}
          </h1>
          <Articles />
        </div>
      </Container>

      <Container2 className="bg-gray-100 px-20 mt-20">
        <Article1 />

        <Article2 />

        <Article3 />

        <Article4 />

        <Article5 />

        <Article6 />

        <Article7 />
      </Container2>
      <div className={fix ? "flex justify-end p-2" : "hidden"}>
        <Scroll
          to="scroll"
          spy={true}
          smooth={true}
          offset={-105}
          duration={500}
          className="fixed z-0 bottom-20"
        >
          <p className="bg-[#179bd7] w-[47px] cursor-pointer transition-all border-[1px] border-[#179bd7] hover:bg-white hover:text-[#179bd7] flex justify-center items-center rounded-[100%] p-1 text-3xl text-white -rotate-90">
            ➤
          </p>
        </Scroll>
      </div>
    </>
  );
};

export default More;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    padding: 100px 40px 0 40px;
  }
  @media only screen and (max-width: 550px) {
    padding: 100px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    padding: 100px 10px 0 10px;
  }
`;

const Container2 = styled.div`
  @media only screen and (max-width: 1200px) {
    padding: 40px 40px 0 40px;
  }
  @media only screen and (max-width: 550px) {
    padding: 30px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    padding: 30px 10px 0 10px;
  }
`;
