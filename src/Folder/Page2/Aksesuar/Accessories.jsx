import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import HomeAccess from "./HomeAccess";
import Components from "./Components";
import styled from "styled-components";
import "../Cellular/Cellular.css";
import Page3 from "../../../pages/Page3";
import Page6 from "../../../pages/Page6";
import Page5 from "../../../pages/Page5";

const Accessories = () => {
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
      <Container id="scroll" className="pt-[100px] px-20">
        <HomeAccess />
        <hr className="border-black border-1 mt-16" />
        <Components />
      </Container>
      <Page3 />
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

export default Accessories;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    padding: 100px 40px 0 40px;
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    padding: 100px 10px 0 10px;
  }
`;
