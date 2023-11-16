import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// height는 추후 수정 필요 시 수정
const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  min-width: 1276px;
  height: 1024px;
`;

const Header = styled.div`
  width: 100%;
  height: 78px;
  padding: 10px 20px 10px 20px;

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
  position: absolute;
  margin-top: 20px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubjectContainer = styled.div`
  display: flex;
  width: 61%;
  height: 22px;
  margin-left: -80px;
`;
//주제가 많아서 길이가 오바되면?
const Subject = styled.div`
  width: auto;

  color: var(--Skyblue-100, #0094ff);
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */

  display: flex;
  padding: 5px 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 50px;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));
`;

const BlueContainer = styled.div`
  width: 67%;
  height: auto;
  flex-shrink: 0;

  margin-top: 10px;
  margin-bottom: 80px;

  background-color: rgb(237, 241, 250);
  border-radius: 28px;
`;
const AboutTeamContainer = styled.div`
  height: 250px;

  margin-top: 25px;
  padding-left: 20px;
`;
const TeamImage = styled.div`
  width: 160px;
  height: 160px;

  background: #00ff99;
  flex-shrink: 0;

  border-radius: 20px;
`;
const TeamName = styled.div`
  margin-top: 20px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 45px */
`;
const LeaderText = styled.span`
  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
const LeaderName = styled.span`
  margin-left: 6px;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const MiddleLine = styled.div`
  position: relative;
  height: 34px;
`;
const AddCloudBtn = styled.button`
  position: absolute;
  right: 22px;
  height: 95%;

  display: inline-flex;
  padding: 4px 16px;
  align-items: center;
  gap: 2px;

  color: var(--Skyblue-100, #0094ff);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);

  &: active {
    background: #e9e9e9;
  }
`;
const CloudContainer = styled.div`
  height: 20%;
  margin-top: 4px;
  padding: 17px 0px 17px 17px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 왼쪽 정렬 설정 */
  align-items: flex-start; /* 위 정렬 설정 */
`;
const CloudBox = styled.div`
  width: 315.499px;
  height: 315.499px;
  flex-shrink: 0;

  margin-right: 16px;
  padding: 19px;

  border-radius: 50.645px;
  background: rgba(190, 216, 255);
`;
const CloudTopContainer = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 30px;
`;
const CloudTitle = styled.div`
  color: var(--Skyblue-100, #0094ff);
  font-family: SUIT-Bold;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
const CloudPin = styled.div`
  position: absolute;
  right: 4px;
  width: 29px;
  heigth: 9px;
`;
const CloudContent = styled.div`
  overflow: fixed;
  margin-top: 28px;
  width: 100%;
  height: 130px;
  flex-shrink: 0;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
`;
const WriterBox = styled.div`
  position: relative;
  display: inline-block;

  margin-top: 80px;
  width: 166px;
  height: 50px;
`;
const WriterImg = styled.div`
  display: inline-block;
  background: #22ff33;
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;
const WriterText = styled.div`
  position: absolute;

  top: 5px;
  right: 64px;
  color: var(--Mono-5, #404040);
  text-align: right;
  font-family: SUIT-Bold;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;
const WriterName = styled.div`
  position: absolute;
  top: 24px;
  left: 60px;
  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const CloudImg = styled.div`
  display: inline-block;
  width: 149px;
  height: 90px;

  border-radius: 30px;
`;

//모달
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 450px;
  height: 600px;
  flex-shrink: 0;

  border-radius: 20px;
  opacity: 0.8;
  background: var(--Blue-70, rgb(150, 179, 255));
`;
const ModalTitle = styled.div`
  margin-top: 54px;
  margin-bottom: 90px;

  padding-left: 31.8%;

  color: var(--White, #fafafa);
  font-family: SUIT-Bold;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

const ChooseBoxDiv = styled.div`
  margin-top: -60px;
  margin-bottom: 40px;
  padding-left: 80px;
  width: 100%;
  height: 80px;
`;
const Modal3ChooseBox = styled.div`
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 31px;

  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 86.5px;
  flex-shrink: 0;

  color: var(--Skyblue-100, #0094ff);
  font-family: SUIT-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 50px;
  background: var(--White, #fafafa);
`;

const ChooseTeam = Modal3ChooseBox;
const ChooseSub = Modal3ChooseBox;

const InputCloudTitle = styled.input`
  display: inline-flex;

  width: 350px;
  height: 20px;

  margin-left: 30px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  color: var(--Mono-3, #848484);
  font-family: SUIT-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);
`;
const InputCloudContent = styled.textarea`
  display: flex;
  resize: none;
  width: 350px;
  height: 200px;

  margin-left: 30px;
  margin-top: 10px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  color: var(--Mono-3, #848484);
  font-family: SUIT-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */

  border: none;
  border-radius: 10px;
  background: var(--White, #fafafa);
`;

const AddCloudNowBtn = styled.button`
  display: flex;
  width: 420px;

  margin-left: 17px;
  margin-top: 10px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fafafa;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));

  &:active {
    background: #6ac1fe;
  }
`;

const TeamMain = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);

  const openModal3 = () => {
    setModal3Open(true);
  };
  const closeModal3 = () => {
    setModal3Open(false);
  };

  const handleClick = () => {
    setIsFilled((prevIsFilled) => !prevIsFilled);
  };

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
        <SubjectContainer>
          {/* 팀의 주제들 Subject로 나와야 한다 */}
          {/* 주제 클릭 시 내용들 그 주제 내용들로 바뀌어야 함 */}
          <Subject>주제1</Subject>
          <Subject>주제2</Subject>
        </SubjectContainer>

        <BlueContainer>
          <AboutTeamContainer>
            <TeamImage />
            {/* 받아와야 하는 부분 */}
            <TeamName>팀명</TeamName>
            <LeaderText>팀장</LeaderText>
            {/* 받아와야 한다 */}
            <LeaderName>리더이름</LeaderName>
          </AboutTeamContainer>
          <MiddleLine>
            <AddCloudBtn onClick={openModal3}>+ 새구름 등록</AddCloudBtn>
          </MiddleLine>
          <CloudContainer>
            {isModal3Open && (
              <ModalContainer>
                <ModalContent style={{ background: "rgb(165, 217, 254)" }}>
                  {/* 모달 내용 */}
                  <ModalTitle>구름 바로 등록하기</ModalTitle>
                  <ChooseBoxDiv>
                    {/* 팀 이름 */}
                    <ChooseTeam>선택한 팀</ChooseTeam>

                    <ChooseSub>선택한 주제</ChooseSub>
                  </ChooseBoxDiv>
                  <InputCloudTitle placeholder="구름의 제목을 입력하세요" />
                  <InputCloudContent placeholder="구름에 대한 세부 설명을 작성해주세요" />
                  <AddCloudNowBtn onClick={closeModal3}>확인</AddCloudNowBtn>
                </ModalContent>
              </ModalContainer>
            )}

            {/* 구름 하나 시작 */}
            <CloudBox>
              <CloudTopContainer>
                <CloudTitle>아동복지</CloudTitle>
                <CloudPin onClick={handleClick}>
                  <img
                    src={
                      isFilled
                        ? "./images/FillPin.png"
                        : "./images/EmptyPin.png"
                    }
                    style={{ width: "100%" }}
                  />
                </CloudPin>
              </CloudTopContainer>
              <CloudContent>어쩌구저쩌구소ㅑㄹ라고ㅑ</CloudContent>

              <WriterBox>
                <WriterImg />
                <WriterText>작성자</WriterText>
                {/* 가져와야한다 */}
                <WriterName>작성자이름</WriterName>
              </WriterBox>
              <CloudImg>
                <img src="./images/Step1.png" style={{ width: "100%" }} />
              </CloudImg>
            </CloudBox>
            {/* 구름 하나 끝 */}
          </CloudContainer>
        </BlueContainer>

        <img src="./images/BottomLogo.png" style={{ width: "130px" }} />
      </Middle>
    </Container>
  );
};
export default TeamMain;
