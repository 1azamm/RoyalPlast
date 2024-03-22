import React from "react";
import { Image, Carousel } from "antd";
import styled from "styled-components";
import img from "../assets/imgs/royalplast.jpg";
import img2 from "../assets/imgs/sunnex.jpg";
import img3 from "../assets/imgs/polynex.jpg";
import Title from "../utils/Title";
import "../Styles/Page6.css";

const stil = {
  position: "relative",
  top: "300px",
  color: "black",
};

const Page6 = () => {
  return (
    <CONTAINER className="px-10 pt-10 ">
      <TITLE className="mb-16 pt-16">
        <Title
          text={"Sertifikatlar"}
          position={
            "text-center underline decoration-[#77b94c] underline-offset-[14px] leading-[55px]"
          }
        />
      </TITLE>
      <ImgContet className="flex justify-center gap-x-5">
        <Image width="30%" src={img} />
        <Image width="30%" src={img2} />
        <Image width="30%" src={img3} />
      </ImgContet>
      <CarouselContainer>
        <Carousel autoplay autoplaySpeed={3000} dots={stil}>
          <div>
            <Image width="100%" src={img} />
          </div>
          <div>
            <Image width="100%" src={img2} />
          </div>
          <div>
            <Image width="100%" src={img3} />
          </div>
        </Carousel>
      </CarouselContainer>
    </CONTAINER>
  );
};

export default Page6;

const CONTAINER = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 10px;
  }
`;

const TITLE = styled.div`
  @media only screen and (max-width: 550px) {
    padding-top: 40px;
    margin-bottom: 40px;
  }
`;

const ImgContet = styled.div`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  @media only screen and (max-width: 700px) {
    display: block;
  }
  display: none;
`;
