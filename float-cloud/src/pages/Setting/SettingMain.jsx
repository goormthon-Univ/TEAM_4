import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  width: 100%;
  height: 1024px;
  position: fixed;
`;
const Header = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

  display: flex;
  align-items: center;
`;

const BackgroundContainer = styled.div`

  margin: 11.69rem 9.37rem 15rem 9.37rem;
  background-color: #2864FF33;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.div`
font-size: 1.875rem;
  textAlign:left;
  font-style: normal;
  font-weight: 700;
  display: flex; 
  align-items: center;
`;

const StyledButton = styled.button`
  color: var(--White, #FAFAFA);
  font-family: SUIT;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;  
  border-radius: 3.125rem;
  background: var(--Skyblue-70, rgba(0, 148, 255, 0.70));
  border: none;
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const userState = styled.div`
  width: 100%;
  height: 1024px;
  position: fixed;
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

const SettingMain = () => {
  const navigate = useNavigate();

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
      <BackgroundContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '1.81rem' }}>
          <SectionTitle>프로필</SectionTitle>
          <StyledButton>변경된 프로필 저장하기</StyledButton>
        </div>
        <userState>
          
        
        
        </userState>

      </BackgroundContainer>
    </Container>
  );
};
export default SettingMain;
