import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { LocalizationApi } from "../../../Context/Language";
import styled from "styled-components";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

import Part5 from "../Naves/Part5";
import Part6 from "../Naves/Part6";

const Naves = () => {
  const { language } = useContext(LocalizationApi);
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
        <p className="py-3 text-sm ">
          <Link to="/">
            <span className=" hover:text-blue-600 cursor-pointer">
              {language === "uz" ? "Bosh sahifa" : "Главный"}
            </span>
          </Link>
          <span className="text-gray-400"> / </span>
          <span className="text-blue-600">
            {" "}
            {language === "uz" ? "Issiqxonalar" : "Теплицы"}
          </span>
        </p>

        <main className="flex flex-col gap-y-24">
          <Part1 />
          <Part2 />
          <Part3 />
          <Part5 />
          <Part6 />
        </main>
      </Container>
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

export default Naves;

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
