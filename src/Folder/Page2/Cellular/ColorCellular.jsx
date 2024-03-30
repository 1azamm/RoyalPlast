import { useContext } from "react";
import { cellularColors } from "../../../utils/Tovar";
import styled from "styled-components";
import { LocalizationApi } from "../../../Context/Language";

const ColorCellular = () => {
  const { language } = useContext(LocalizationApi);
  const renderColorItems = (colors) => {
    return colors.map((color, index) => (
      <Container key={index} className="flex flex-col items-center gap-y-3">
        <Img
          className=" w-36 rounded-3xl "
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
    <div className="mt-20">
      <H1 className="text-3xl mb-20 font-semibold underline decoration-[#77b94c] underline-offset-[14px]">
        {language === "uz"
          ? "UYALI POLIKARBONAT - RANG VARIANTLARI"
          : "СОТОВЫЙ ПОЛИКАРБОНАТ – ЦВЕТОВЫЕ ВАРИАНТЫ"}
      </H1>
      <Color className="text-center flex flex-wrap gap-6 gap-y-10">
        {renderColorItems(cellularColors)}
      </Color>
    </div>
  );
};

export default ColorCellular;

const Img = styled.img`
  @media only screen and (max-width: 860px) {
    width: 100px;
  }
  @media only screen and (max-width: 510px) {
    width: 80px;
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
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  @media only screen and (max-width: 440px) {
    row-gap: 0;
  }
`;

const Color = styled.div`
  @media only screen and (max-width: 440px) {
    justify-content: center;
    gap: 15px;
  }
`;
