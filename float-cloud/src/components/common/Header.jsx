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

const HeaderBtnDiv = styled.div`
  position: absolute;
  right: 2%;
`;

const BtnDiv = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <img
          src="./images/EngLogo.png"
          style={{ width: "200px" }}
          alt="영어로고"
        ></img>
      </div>
      <HeaderBtnDiv>
        <BtnDiv>
          <img
            src="./images/Alarm.png"
            style={{ width: "50px" }}
            alt="알람"
          ></img>
        </BtnDiv>
        <BtnDiv>
          <img
            src="./images/Setting.png"
            style={{ width: "50px" }}
            alt="설정"
          ></img>
        </BtnDiv>
      </HeaderBtnDiv>
    </HeaderDiv>
  );
};

export default Header;
