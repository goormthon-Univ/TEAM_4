import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

  display: flex;
  align-items: center;
`;

const EngLogo = styled.div``;

const RoundBtn = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

export default function Header() {
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
        <div style={{ position: "absolute", right: "2%" }}>
          <RoundBtn>
            <img
              src="./images/Alarm.png"
              style={{ width: "50px" }}
              alt="알람"
            ></img>
          </RoundBtn>
          <RoundBtn>
            <img
              src="./images/Setting.png"
              style={{ width: "50px" }}
              alt="설정"
            ></img>
          </RoundBtn>
        </div>
      </HeaderDiv>
    </div>
  );
}
