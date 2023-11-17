import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: 100%;
  height: 120px;

  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CloudLogo() {
  return (
    <Logo>
      <img src="./images/CloudLogo.png" style={{ width: "168px" }} />
    </Logo>
  );
}
