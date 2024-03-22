import React from "react";
import styled from "styled-components";

const Title = ({ text, position }) => {
  return (
    <H3 className={`mb-1 text-4xl font-extrabold text-center  ${position}`}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-sky-400">
        {text}
      </span>
    </H3>
  );
};

export default Title;

const H3 = styled.h3`
  @media only screen and (max-width: 650px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 430px) {
    font-size: 24px;
  }
`;
