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

const OvalButton = styled.button`
  color: ${(props) => props.color};
  font-size:  ${(props) => props.fontSize};
  background:   ${(props) => props.backgroundColor};
  font-weight: 700;
  line-height: 150%;  
  border-radius: 3.125rem;
  border: none;
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const OvalTag = styled.div`
  color: ${(props) => props.color};
  font-size:  ${(props) => props.fontSize};
  background:   ${(props) => props.backgroundColor};
  font-weight: 700;
  line-height: 150%;  
  border-radius: 3.125rem;
  border: none;
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const UserHistory = styled.div`
  background:   ${(props) => props.backgroundColor};
  color: white;
  item-align: center;
  text-align: center;
  width: 33.75rem;
  height: 9.9375rem;
  border-radius: 3.125rem;
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
        {/* 상단 프로필 제목과 버튼 */}
        <div name=""style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '1.81rem' }}>
          <SectionTitle>프로필</SectionTitle>
          {/* 변경하기/변경된 프로필 저장하기 */}
          <OvalButton fontSize="1.125rem" color="white" backgroundColor="rgba(0, 148, 255, 0.70)">변경된 프로필 저장하기</OvalButton>
        </div>

        <div name="userState">
          <div name="profileInfo">
            <img name="profileImg" />
            <div name="userProfile">
              <div> 닉네임 </div>
              <div> 이메일 </div>
            </div>
          </div>

          <div>
            <UserHistory backgroundColor="rgba(0, 148, 255, 0.50)">등록한 구름<OvalTag fontSize="1rem" color="rgb(0, 148, 255)" backgroundColor="rgba(0, 148, 255, 0.70)">총 224개의 구름을 작성했어요</OvalTag></UserHistory>
            <UserHistory backgroundColor="rgba(40, 100, 255, 0.50)">등록한 구름</UserHistory>
            <div name="floatedGroomHistory"></div>
            <div name="joinedTeamHistory"></div>
          </div>
        </div>

        <div name="teamManage">
          <div name="activeTeam">
            <div name="teamCard">
            </div>
          </div>
          <div name="endedTeam"></div>
        </div>

      </BackgroundContainer>

      <footer></footer>>
    </Container>
  );
};
export default SettingMain;
