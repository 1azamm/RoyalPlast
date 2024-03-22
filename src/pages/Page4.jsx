import { useState } from "react";
import Title from "../utils/Title";
import Button from "../utils/Button";
import styled from "styled-components";
// import { Fade } from "react-reveal";
import Write from "../utils/Write";

import img1 from "../LexanTovar/s_type_karb_img_item1.png";
import img2 from "../LexanTovar/s_type_karb_img_item2.png";

import { cellularColors, monolitColors } from "../utils/Tovar";

const Page4 = () => {
  const [toggle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toggle);
  };
  const renderColorItems = (colors) => {
    return colors.map((color, index) => (
      <ul key={index} className="flex flex-col gap-y-2">
        <IMG className="w-20 rounded-xl border" src={color.image} alt="" />
        <li>{color.name}</li>
      </ul>
    ));
  };

  return (
    <CONTAINER className="px-8">
      <Title
        text={"UYALI VA MONOLITIK POLIKARBONAT"}
        position={
          "text-center mb-20 pt-16 underline decoration-[#77b94c] underline-offset-[14px] leading-[55px]"
        }
      />
      <div className="flex justify-between flex-wrap">
        <Content className="w-[49%]">
          {/* <Fade left> */}
          <div className="flex flex-col gap-y-10 border border-black p-10">
            <h1 className="text-center text-[#2c679f] text-2xl font-semibold">
              Uyali
            </h1>
            <hr className="border-1 border-black" />
            <div className="flex justify-center">
              <img src={img1} alt="" width="100%" />
            </div>
            <ImgContainer className="text-center flex justify-center flex-wrap gap-6 pt-5 px-4">
              {renderColorItems(cellularColors)}
            </ImgContainer>
            <div className="flex justify-center pt-5">
              <Button
                onClick={handleClick}
                text={"Iqtibos oling"}
                position={
                  "bg-[#5bb521] rounded-none border-none text-white text-[14px]"
                }
              />
            </div>
          </div>
          {/* </Fade> */}
        </Content>
        <Content2 className="w-[49%]">
          {/* <Fade right> */}
          <div className="flex flex-col gap-y-10 border border-black p-10 ">
            <h1 className="text-center text-[#2c679f] text-2xl font-semibold">
              Monolit
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
                text={"Iqtibos oling"}
                position={
                  "bg-[#5bb521] rounded-none border-none text-white text-[14px]"
                }
              />
            </div>
          </div>
          {/* </Fade> */}
        </Content2>
      </div>
      <Write text={"Iqtibos oling"} modal={toggle} setModal={setToogle} />
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
    row-gap: 10px;
  }
`;

const ImgContainer2 = styled.div`
  @media only screen and (max-width: 550px) {
    row-gap: 10px;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 412px) {
    width: 70px;
  }
`;
