import React, { useContext, useState } from "react";
import { LocalizationApi } from "../Context/Language";
import Title from "../utils/Title";
import styled from "styled-components";
// import Slide from "react-reveal/Slide";

import img1 from "../LexanTovar/stalpro_230615_fto_full.jpg";
import img2 from "../LexanTovar/razmery-teplits-iz-polikarbonata-optimalnaya-shirina-dlinna-vysota-forma-osobennosti-materiala-foto--5.webp";
import img3 from "../LexanTovar/s_applications_img_item3.png";
import img4 from "../LexanTovar/339_original.jpg";
import img5 from "../LexanTovar/issiqxona.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    src: img1,
    alt: "Naveslar",
    altRU: "Нефы",
    width: "724px",
    height: "350px",
    link: "/naveslar/",
  },
  {
    src: img2,
    alt: "Issiqxonalar",
    altRU: "Теплицы",
    width: "333px",
    height: "350px",
    link: "/issiqxonalar/",
  },
  {
    src: img3,
    alt: "Gazebos",
    altRU: "Беседки",
    width: "333px",
    height: "350px",
    link: "/gazebos/",
  },
  {
    src: img4,
    alt: "To'siqlar",
    altRU: "Препятствия",
    width: "724px",
    height: "400px",
    link: "/tosiqlar/",
  },
  {
    src: img5,
    alt: "Qishloq xo'jaligi",
    altRU: "Cельское хозяйство",
    width: "695px",
    height: "400px",
    link: "/qishloq-xojaligi/",
  },
];

const Page3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language } = useContext(LocalizationApi);

  return (
    // <Slide bottom>
    <CONTAINER className="px-8 py-10 bg-gradient-to-t from-sky-100 to-rgb(237, 244, 247)">
      <Title
        position={
          "text-center mb-20 pt-16 underline decoration-[#77b94c] underline-offset-[14px] leading-[50px]"
        }
        text={
          language === "uz"
            ? "BARCHA TURDAGI ILOVALAR UCHUN"
            : "ДЛЯ ВСЕХ ВИДОВ ПРИЛОЖЕНИЙ"
        }
      />
      <div className="Content1 flex justify-between flex-wrap xl:pb-7 lg:pb-2">
        {images.slice(0, 3).map((image, index) => (
          <div className="overflow-hidden flex" key={index}>
            <Link className="overflow-hidden flex" to={image.link} key={index}>
              <ImageContainer1
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                key={index}
                url={image.src}
                width={image.width}
                height={image.height}
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
                hovered={hoveredIndex === index + 1}
              >
                <OverlayText hovered={hoveredIndex === index + 1}>
                  {language === "uz" ? image.alt : image.altRU}
                </OverlayText>
              </ImageContainer1>
            </Link>
          </div>
        ))}
      </div>
      <div className="Content2 flex justify-between flex-wrap">
        {images.slice(3, 4).map((image, index) => (
          <div className="overflow-hidden flex flex-wrap" key={index}>
            <Link className="overflow-hidden flex" to={image.link} key={index}>
              <ImageContainer
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                key={index}
                url={image.src}
                width={image.width}
                height={image.height}
                onMouseEnter={() => setHoveredIndex(index + 4)}
                onMouseLeave={() => setHoveredIndex(null)}
                hovered={hoveredIndex === index + 4}
              >
                <OverlayText hovered={hoveredIndex === index + 4}>
                  {language === "uz" ? image.alt : image.altRU}
                </OverlayText>
              </ImageContainer>
            </Link>
          </div>
        ))}

        {images.slice(4, 5).map((image, index) => (
          <div className="overflow-hidden flex flex-wrap" key={index}>
            <Link className="overflow-hidden flex" to={image.link} key={index}>
              <ImageContainer
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                key={index}
                url={image.src}
                width={image.width}
                height={image.height}
                onMouseEnter={() => setHoveredIndex(index + 5)}
                onMouseLeave={() => setHoveredIndex(null)}
                hovered={hoveredIndex === index + 5}
              >
                <OverlayText hovered={hoveredIndex === index + 5}>
                  {language === "uz" ? image.alt : image.altRU}
                </OverlayText>
              </ImageContainer>
            </Link>
          </div>
        ))}
      </div>
    </CONTAINER>
    // </Slide>
  );
};
const CONTAINER = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 0 20px !important;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 10px !important;
  }
`;

const ImageContainer1 = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 350px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${(props) => (props.hovered ? "scale(1.1)" : "scale(1)")};

  @media (max-width: 1250px) {
    width: 380px;
    max-width: 100%;
    max-height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media (max-width: 1200px) {
    width: 370px;
    max-width: 100%;
    max-height: 330px !important;
  }
  @media (max-width: 1100px) {
    width: 335px;
    max-width: 100%;
    max-height: 300px !important;
  }
  @media (max-width: 1050px) {
    width: 320px !important;
    flex-wrap: nowrap;
    max-width: 100%;
    max-height: 300px !important;
  }
  @media (max-width: 1050px) {
    width: 305px;
    max-width: 100%;
    max-height: 300px !important;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 310px !important;
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    width: 980px !important;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 350px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${(props) => (props.hovered ? "scale(1.1)" : "scale(1)")};

  @media (max-width: 1250px) {
    width: 380px;
    max-width: 100%;
    max-height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media (max-width: 1200px) {
    width: 360px;
    max-width: 100%;
    max-height: 330px !important;
  }
  @media (max-width: 1100px) {
    width: 335px;
    max-width: 100%;
    max-height: 300px !important;
  }
  @media (max-width: 1050px) {
    width: 320px !important;
    max-width: 100%;
    max-height: 300px !important;
  }
  @media (max-width: 1024px) {
    width: 470px !important;
    max-width: 100%;
    max-height: 300px !important;
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    width: 980px !important;
    margin-bottom: 20px;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  width: 100% !important;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.hovered ? "#b3ff81" : "white")};
  font-size: 24px;
  font-weight: bold;
  ${(props) =>
    props.hovered ? "filter: drop-shadow(5px 5px 30px black);" : ""};
`;

export default Page3;
