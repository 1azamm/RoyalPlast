import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import Turkuaz from "../../../LexanTovar/prof1.jpg";
import Blue from "../../../LexanTovar/prof2.jpg";
import Bronza from "../../../LexanTovar/prof3.jpg";
import Gray from "../../../LexanTovar/download.jpg";
import Transparent from "../../../LexanTovar/download-1.jpg";
import SkyBlue from "../../../LexanTovar/download-2.jpg";
import styled from "styled-components";

const profiledColor = [
  { name: "Turkuaz", nameRU: "Бирюзовый", image: Turkuaz },
  { name: "Ko'k", nameRU: "Голубой", image: Blue },
  { name: "Bronza", nameRU: "Бронза", image: Bronza },
  { name: "Kulrang", nameRU: "Серый", image: Gray },
  { name: "Shaffof", nameRU: "Прозрачный", image: Transparent },
  { name: "Moviy", nameRU: "Синий", image: SkyBlue },
];

const ColorProfiled = () => {
  const { language } = useContext(LocalizationApi);
  const renderColorItems = (colors) => {
    return colors.map((color, index) => (
      <Container key={index} className="flex flex-col items-center gap-y-3 ">
        <Img
          className="w-36 h-36 rounded-2xl"
          src={color.image}
          alt={color.name}
        />
        <Span className="text-lg">
          {language === "uz" ? color.name : color.nameRU}
        </Span>
      </Container>
    ));
  };

  return (
    <Main className="mt-20">
      <H1 className="text-3xl mb-20 font-semibold underline decoration-[#77b94c] underline-offset-[14px]">
        {language === "uz"
          ? "PROFILLANGAN POLIKARBONATNING RANGLARI"
          : "ЦВЕТА ПРОФИЛИРОВАННОГО ПОЛИКАРБОНАТА"}
      </H1>
      <Color className="text-center flex flex-wrap gap-x-8 gap-y-10">
        {renderColorItems(profiledColor)}
      </Color>
    </Main>
  );
};

export default ColorProfiled;

const Img = styled.img`
  @media only screen and (max-width: 860px) {
    width: 140px;
    height: 140px;
  }
  @media only screen and (max-width: 550px) {
    width: 100px;
    height: 100px;
  }
`;

const Span = styled.span`
  @media only screen and (max-width: 860px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 560px) {
    font-size: 15px;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 660px) {
    font-size: 25px;
    text-align: center;
  }
  @media only screen and (max-width: 560px) {
    line-height: 50px;
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  @media only screen and (max-width: 440px) {
    row-gap: 0;
  }
`;

const Main = styled.div`
  @media only screen and (max-width: 430px) {
    margin-top: 40px;
  }
`;

const Color = styled.div`
  @media only screen and (max-width: 550px) {
    justify-content: center;
    gap: 15px;
  }
`;
