import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import "../Cellular/Cellular.css";
import Page3 from "../../../pages/Page3";
import CarouselCallular from "../Cellular/CarouselCallular";
import Page6 from "../../../pages/Page6";
import HomeProfiled from "./HomeProfiled";
import Page5 from "../../../pages/Page5";
import ColorProfiled from "./ColorProfiled";
import styled from "styled-components";

const Profiled = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY >= 200);
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
      <Container id="scroll" className="pt-[85px] px-20">
        <HomeProfiled />
        <hr className="border-black border-1 mt-16" />
        <ColorProfiled />
        <hr className="border-black mt-20" />
      </Container>
      <Page3 />
      <CarouselCallular />
      <Page5 />
      <Page6 />

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

export default Profiled;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    padding: 80px 40px 0 40px;
  }
  @media only screen and (max-width: 900px) {
    padding: 80px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    padding: 80px 10px 0 10px;
  }
`;
