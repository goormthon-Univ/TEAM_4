import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

  display: flex;
  align-items: center;
`;

const EngLogo = styled.div``;

export default function BeforeHeader() {
  return (
    <div>
      <HeaderDiv>
        <EngLogo>
          <img
            src="./images/EngLogo.png"
            style={{ width: "200px" }}
            alt="영어로고"
          ></img>
        </EngLogo>
      </HeaderDiv>
    </div>
  );
}
