import React from "react";
import Title from "../utils/Title";

import box from "../LexanTovar/icons8-box.svg";
import pay from "../LexanTovar/icons8-wallet-100.png";
import delivery from "../LexanTovar/payment-and-delivery.jpg";
import guarantee from "../LexanTovar/icons8-guarantee-100.png";
import styled from "styled-components";
// import { Fade } from "react-reveal";

const Page5 = () => {
  return (
    // <Fade>
    <CONTAINER className="px-10">
      <Title
        text={"YETKAZIB BERISH VA TO'LASH"}
        position={
          "text-center mb-10 pt-16 underline decoration-[#77b94c] underline-offset-[14px] leading-[55px]"
        }
      />
      <Container2 className="flex justify-between flex-wrap">
        <TextContainer className="flex flex-col gap-y-12 w-[38%]">
          <FirstH1 className="font-medium text-5xl ">
            Mintaqaning istalgan nuqtasiga
            <span className="text-[#5bb521]">
              {" "}
              24 soat ichida yetkazib berish
            </span>
          </FirstH1>
          <FirstP className="text-xl lg:text-lg">
            Zavoddan xavfsiz yetkazib berish kafolatlangan
          </FirstP>
        </TextContainer>
        <BoxContainer className="flex justify-between  flex-wrap w-[57%]">
          <Box
            style={{ backgroundColor: "rgb(91, 181, 34)" }}
            className="flex flex-col items-center justify-center gap-y-5 p-7 py-10 w-[45%] h-[260px]"
          >
            <BOXimg src={box} alt="" width="35%" />
            <p className="text-white text-lg text-center">
              Buyurtmangizni arizangizdan so'ng darhol jo'natamiz
            </p>
          </Box>

          <Box
            style={{ backgroundColor: "rgb(44, 103, 159)" }}
            className="flex flex-col items-center justify-center gap-y-5 p-7 py-12 w-[52%] h-[260px]"
          >
            <BOXimg src={pay} alt="" />
            <p className="text-white text-lg text-center pt-5">
              Buyurtmalar uchun qulay to'lov usullari
            </p>
          </Box>

          <VariableBox
            style={{ backgroundColor: "rgb(91, 181, 34)" }}
            className="flex flex-col items-center justify-center gap-y-5 p-7 py-12 w-[29.6%] h-[260px]"
          >
            <BOXimg src={guarantee} alt="" width="35%" />
            <p className="text-white text-lg text-center pt-5">
              Ishlab chiqaruvchining kafolati 15 yil
            </p>
          </VariableBox>
        </BoxContainer>
      </Container2>
      <BoxContainer className="flex justify-between mt-6">
        <Supplier
          className="p-5 flex items-center font-bold "
          style={{
            backgroundImage: `url(${delivery}) `,
            width: "68.6%",
            height: "260px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SupplierText className="text-3xl w-[50%] text-transparent bg-clip-text bg-gradient-to-t from-sky-100 to-white">
            Viloyatning istalgan nuqtasiga o'z vaqtida yetkazib beramiz !
          </SupplierText>
        </Supplier>

        <VariableBox2
          style={{ backgroundColor: "rgb(91, 181, 34)" }}
          className="flex flex-col items-center justify-center gap-y-5 p-7 py-12 w-[29.6%] h-[260px]"
        >
          <BOXimg src={guarantee} alt="" width="30%" />
          <p className="text-white text-lg text-center pt-5">
            Ishlab chiqaruvchining kafolati 15 yil
          </p>
        </VariableBox2>
      </BoxContainer>
    </CONTAINER>
    // </Fade>
  );
};

export default Page5;

const CONTAINER = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 10px;
  }
`;

const Container2 = styled.div`
  margin-top: 80px !important;
  @media only screen and (max-width: 800px) {
    margin-top: 50px !important;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 0px !important;
  }
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    text-align: center;
    row-gap: 15px;
  }
`;

const FirstH1 = styled.h1`
  @media only screen and (max-width: 1025px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1000px) {
    line-height: 50px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
  }
`;

const FirstP = styled.p`
  @media only screen and (max-width: 1070px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
    padding-bottom: 40px;
  }
`;

const BoxContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 15px;
  }
  @media only screen and (max-width: 550px) {
    row-gap: 14px;
  }
`;

const Box = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 32%;
  }
  @media only screen and (max-width: 800px) {
    width: 49%;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

const VariableBox = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: flex;
    width: 32%;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
  @media only screen and (max-width: 550px) {
    display: flex;
    width: 100%;
  }
`;

const VariableBox2 = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    width: 32%;
  }
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const Supplier = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
  }
  @media only screen and (max-width: 800px) {
    width: 66% !important;
    background-size: cover !important;
    background-position: center center;
  }
  @media only screen and (max-width: 550px) {
    width: 100% !important;
  }
`;

const SupplierText = styled.p`
  filter: drop-shadow(0 0 10px black);
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    text-align: center;
    color: rgb(98, 255, 0);
    filter: drop-shadow(0 0 10px black);
  }
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
    line-height: 22px;
    filter: drop-shadow(0 0 10px black);
  }
  @media only screen and (max-width: 550px) {
    color: white;
    filter: drop-shadow(0 0 10px black);
  }
`;

const BOXimg = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 40%;
  }
  @media only screen and (max-width: 800px) {
    width: 40%;
  }
  @media only screen and (max-width: 550px) {
    width: 30%;
  }
`;
