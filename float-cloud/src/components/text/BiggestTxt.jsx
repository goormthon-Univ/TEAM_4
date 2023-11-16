// BiggestTxt.js
import React from "react";
import styled from "styled-components";

const Biggtxt = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
`;

const BiggestTxt = ({ children }) => {
  return <Biggtxt>{children}</Biggtxt>;
};

export default BiggestTxt;
