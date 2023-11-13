import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  min-width: 1276px;
  height: 1024px;
  position: fixed;
`;

const Header = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

  background: #00ff33;

  display: flex;
  align-items: center;
`;

const EngLogo = styled.div``;

const HeaderBtn = styled.div`
  position: absolute;
  right: 2%;
`;
const SeeAlarm = styled.div`
  display: inline-block;
`;
const GoSetting = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const Middle = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 800px;
  background: #00ff66;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BlueContainer = styled.div`
  width: 68%;
  height: 700px;
  flex-shrink: 0;

  border-radius: 50px;
  opacity: 0.7;
  background: var(--Blue-20, rgba(40, 100, 255, 0.2));
`;

const WelcomeText = styled.div``;
const ButtonBox = styled.div``;
const AddCloudBtn = styled.button``;
const NewTeamBtn = styled.button``;
const TeamsContainer = styled.div``;

const Main = () => {
  return (
    <Container>
      <Header>
        <EngLogo>
          <img
            src="./images/EngLogo.png"
            style={{ width: "200px" }}
            alt="영어로고"
          ></img>
        </EngLogo>
        <HeaderBtn>
          <SeeAlarm>
            <img
              src="./images/Alarm.png"
              style={{ width: "50px" }}
              alt="알람"
            ></img>
          </SeeAlarm>
          <GoSetting>
            <img
              src="./images/Setting.png"
              style={{ width: "50px" }}
              alt="설정"
            ></img>
          </GoSetting>
        </HeaderBtn>
      </Header>

      <Middle>
        <BlueContainer></BlueContainer>
      </Middle>
    </Container>
  );
};
export default Main;
