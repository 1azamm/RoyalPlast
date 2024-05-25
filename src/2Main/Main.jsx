import React from "react";
import styled from "styled-components";
import "../Styles/Main.css";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";

const Main = () => {
  return (
    <>
      <Container className="z-10 m-auto pt-[90px]">
        <ContainerPage1 className=" pb-8">
          <Page1 />
        </ContainerPage1>

        <div id="page2">
          <div className="Dark ">
            <Page2 />
          </div>
          <Page3 id="page3" />
          <Page4 />
        </div>

        <Page5 />
        <Page6 />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  @media only screen and (max-width: 550px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 430px) {
    padding-top: 90px !important;
  }
`;

const ContainerPage1 = styled.div`
  @media only screen and (max-width: 430px) {
    position: relative;
    top: -10px;
  }
`;
