import React from "react";
import styled from "styled-components";
import axios from "axios";
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
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
`;
const BlueContainer = styled.div`
  width: 1140px;
  height: auto;
  flex-shrink: 0;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 26px 10px;

  border-radius: 25px;
  background: rgba(190, 216, 255, 0.4);
`;
const MainCloud = styled.div`
  display: inline-flex;

  margin-bottom: 20px;
  padding: 20px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  border-radius: 30px;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));
`;
const MainCloudTop = styled.div`
  position: relative;
  width: 1040px;

  display: flex;
`;
const CloudTitle = styled.span`
  color: var(--Mono-5, #404040);
  font-family: SUIT-Bold;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 45px */
`;
const DeleteBtn = styled.button`
  position: absolute;
  padding: 10px;

  right: 5px;
  justify-content: flex-end;
  align-items: center;

  color: var(--White, #fafafa);
  font-family: SUIT-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */

  border: none;
  border-radius: 10px;
  background: var(--Skyblue-100, #0094ff);
`;
const CloudContent = styled.div`
  overflow: fixed;

  margin-top: -30px;

  width: 1035px;
  height: 70px;
  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;
const WriterBox = styled.div`
  position: relative;

  width: 200px;
  height: 60px;
`;
const WriterImg = styled.div`
  display: inline-block;
  width: 55px;
  height: 55px;
  border-radius: 40px;

  background: #333333;
`;
const WriterName = styled.div`
  display: inline-block;
  position: absolute;

  top: 15px;
  left: 66px;

  color: var(--Mono-5, #404040);
  text-align: right;
  font-family: SUIT-SemiBold;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;

const SubCloudContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 92%;
  height: 130px;

  margin-bottom: 20px;
  padding: 0px 26px;

  border-radius: 30px;
  background: var(--White, #fafafa);
`;
const SubImg = styled.div`
  width: 55px;
  height: 55px;

  margin-left: 6px;
  border-radius: 40px;
  background: #000;
`;
const SubWriter = styled.div`
  margin-left: -20px;

  color: var(--Mono-5, #404040);
  text-align: right;
  font-family: SUIT-SemiBold;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;
const SubContent = styled.div`
  width: 892px;
  flex-shrink: 0;

  color: var(--Mono-5, #404040);
  font-family: SUIT-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

const InputSub = styled.input`
  display: flex;
  width: 1100px;
  height: 24px;

  margin-top: 20px;
  margin-left: 9px;
  padding: 18px 30px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 30px;
  border: 2px solid var(--Skyblue-50, rgba(0, 148, 255, 0.5));

  color: var(--Mono-2, #b2b2b2);
  font-family: SUIT-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

const ButtonBox = styled.div`
  position: relative;
  width: 1160px;
  height: 100px;

  margin-top: 20px;
`;
const AddSubBtn = styled.button`
  position: absolute;

  right: 0px;

  height: 53px;
  width: 150px;

  display: flex;
  padding: 18px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--White, #fafafa);
  font-family: SUIT-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */

  border: none;
  border-radius: 50px;
  background: var(--Skyblue-100, #0094ff);
`;

const BottomLogo = styled.div``;
const AddComent = () => {
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
        <BlueContainer>
          <MainCloud>
            <MainCloudTop>
              {/* 받아오기 제목*/}
              <CloudTitle>아동복지</CloudTitle>
              <DeleteBtn>구름 삭제하기</DeleteBtn>
            </MainCloudTop>
            {/* 받아오기  내용*/}
            <CloudContent></CloudContent>
            <WriterBox>
              {/* 이미지 받아오기 */}
              <WriterImg></WriterImg>
              <WriterName>구르미</WriterName>
            </WriterBox>
          </MainCloud>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>

          <SubCloudContainer>
            {/* 받아오기 */}
            <SubImg></SubImg>
            <SubWriter>이선의</SubWriter>
            <SubContent>내용내용내용내용내용</SubContent>
          </SubCloudContainer>
        </BlueContainer>

        <InputSub type="text" placeholder="구름에 타래를 달아주세요" />
        <ButtonBox>
          <AddSubBtn>타래 등록하기</AddSubBtn>
        </ButtonBox>
        <BottomLogo>
          <img src="./images/BottomLogo.png" style={{ width: "130px" }} />
        </BottomLogo>
      </Middle>
    </Container>
  );
};
export default AddComent;
