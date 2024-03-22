import React from "react";

import styled from "styled-components";

const Button = ({ position, text, onClick, id }) => {
  return (
    <div className="flex p-0">
      <BTN
        id={id}
        onClick={onClick}
        className={` w-48 py-3 mb-10 rounded-lg text-2xl border-[#179bd7] border-2 text-[#179bd7] hover:shadow-[inset_23rem_0_0_0] hover:shadow-[#179bd7] duration-[500ms,800ms] transition-[color,box-shadow] ${position}`}
      >
        <span>
          {text}
          {/* <i>&nbsp; &#8594;</i> */}
        </span>
      </BTN>
    </div>
  );
};

export default Button;

const BTN = styled.button`
  @media only screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 12px 50px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;
