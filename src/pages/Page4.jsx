import { useContext, useState } from "react";
import Title from "../utils/Title";
import Button from "../utils/Button";
import styled from "styled-components";
// import { Fade } from "react-reveal";
import Write from "../utils/Write";
import { LocalizationApi } from "../Context/Language";

import img1 from "../LexanTovar/s_type_karb_img_item1.png";
import img2 from "../LexanTovar/s_type_karb_img_item2.png";

import { cellularColors, monolitColors } from "../utils/Tovar";

const Page4 = () => {
  const { language } = useContext(LocalizationApi);

  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };
  const renderColorItems = (colors) => {
    return colors.map((color, index) => (
      <UL
        key={index}
        className="flex flex-col justify-center items-center gap-y-2"
      >
        <IMG className="w-20 rounded-xl border" src={color.image} alt="" />
        <li>{language === "uz" ? color.name : color.nameRU}</li>
      </UL>
    ));
  };

  return (
    <CONTAINER className="px-8">
      <Title
        text={
          language === "uz"
            ? "UYALI VA MONOLITIK POLIKARBONAT"
            : "ПОЛИКАРБОНАТ СОТОВЫЙ И МОНОЛИТНЫЙ"
        }
        position={
          "text-center mb-20 pt-16 underline decoration-[#77b94c] underline-offset-[14px] leading-[55px]"
        }
      />
      <div className="flex justify-between flex-wrap">
        <Content className="w-[49%]">
          {/* <Fade left> */}
          <DIV className="flex flex-col gap-y-10 border border-black p-10">
            <h1 className="text-center text-[#2c679f] text-2xl font-semibold">
              {language === "uz" ? "Uyali" : "Сотовая"}
            </h1>
            <hr className="border-1 border-black" />
            <div className="flex justify-center ">
              <img src={img1} alt="" width="100%" />
            </div>
            <ImgContainer className="text-center flex justify-center flex-wrap gap-6 pt-5 px-4">
              {renderColorItems(cellularColors)}
            </ImgContainer>
            <div className="flex justify-center pt-5">
              <Button
                onClick={handleClick}
                text={language === "uz" ? "Iqtibos oling" : "Получить расчет"}
                position={
                  "bg-[#5bb521] rounded-none border-none text-white text-[14px]"
                }
              />
            </div>
          </DIV>
          {/* </Fade> */}
        </Content>
        <Content2 className="w-[49%]">
          {/* <Fade right> */}
          <DIV className="flex flex-col gap-y-10 border border-black p-10 ">
            <h1 className="text-center text-[#2c679f] text-2xl font-semibold">
              {language === "uz" ? "Monolit" : "Монолит"}
            </h1>
            <hr className="border-1 border-black" />
            <div className="flex justify-center">
              <img src={img2} alt="" width="100%" />
            </div>
            <ImgContainer2 className="text-center flex justify-center flex-wrap gap-6 pt-5 px-4">
              {renderColorItems(monolitColors)}
            </ImgContainer2>
            <div className="flex justify-center pt-5">
              <Button
                onClick={handleClick}
                text={language === "uz" ? "Iqtibos oling" : "Получить расчет"}
                position={
                  "bg-[#5bb521] rounded-none border-none text-white text-[14px]"
                }
              />
            </div>
          </DIV>
          {/* </Fade> */}
        </Content2>
      </div>
      <Write
        text={language === "uz" ? "Iqtibos oling" : "Получить расчет"}
        modal={toggle}
        setModal={setToogle}
      />
    </CONTAINER>
  );
};

export default Page4;

const CONTAINER = styled.div`
  @media only screen and (max-width: 550px) {
    padding: 0 10px !important;
  }
`;

const Content = styled.div`
  @media only screen and (max-width: 800px) {
    width: 750px;
    margin-bottom: 30px;
  }
`;

const Content2 = styled.div`
  @media only screen and (max-width: 800px) {
    width: 750px;
  }
`;

const ImgContainer = styled.div`
  @media only screen and (max-width: 550px) {
    gap: 20px 15px;
  }
  @media only screen and (max-width: 410px) {
    gap: 20px 10px;
  }
`;

const ImgContainer2 = styled.div`
  @media only screen and (max-width: 550px) {
    gap: 20px 15px;
  }
  @media only screen and (max-width: 410px) {
    gap: 20px 10px;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 412px) {
    width: 70px;
  }
`;

const DIV = styled.div`
  @media only screen and (max-width: 390px) {
    padding: 20px;
  }
`;

const UL = styled.ul`
  width: 82px;
`;
