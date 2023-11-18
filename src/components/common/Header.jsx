import React, { useState } from "react";
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

  position: relative;
`;

const AlarmContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 100%;
  left: -490%;

  width: 280px;
  height: 430px;
  max-height: 430px;
  flex-shrink: 0;

  padding: 5px 8px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const AlarmText = styled.div`
  margin-top: 10px;
  color: var(--Mono-5, #404040);
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;
const AlarmContents = styled.div`
  overflow-y: auto;
  margin-top: 30px;
  width: 100%;
  height: 88%;
`;
const AlarmBox = styled.div`
  width: 100%;
  height: 53px;
  margin-bottom: 3px;
`;
const Where = styled.div`
  color: var(--Mono-7, #131313);
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;
const Content = styled.div`
  color: var(--Mono-5, #404040);
  font-family: SUIT;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
const Line = styled.hr`
  width: 100%;
`;

export default function Header() {
  const [showAlarm, setAlarm] = useState(false);
  const navigate = useNavigate;

  const GoSetting = () => {};

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
          <RoundBtn
            onMouseOver={() => setAlarm(true)}
            onMouseOut={() => setAlarm(false)}
          >
            <img
              src="./images/Alarm.png"
              style={{ width: "50px" }}
              alt="알람"
            ></img>
            {showAlarm && (
              <AlarmContainer>
                <AlarmText>새로운 알림</AlarmText>
                <AlarmContents>
                  <AlarmBox>
                    <Where>디자인리서치-내구름에 타래</Where>
                    <Content>인터렉션 새로 추가해갸 할 것</Content>
                    <Line />
                  </AlarmBox>
                </AlarmContents>
              </AlarmContainer>
            )}
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
