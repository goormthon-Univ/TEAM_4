import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import RoundedButton from "../../components/common/RoundedButton";
import RoundedTag from "../../components/common/RoundedTag";
import BiggestTxt from "../../components/text/BiggestTxt";
import SpcBetween from "../../components/setting/SpcBetween";
import HistoryTag from "../../components/setting/HistoryTag";
import TeamCard from "../../components/setting/TeamCard";

const Container = styled.div`
  width: 100%;
  height: 100vh; /* 전체 뷰포트 높이로 설정 */
  position: fixed;
  overflow-y: auto;
  font-family: "SUIT-Light";

`;

const BackgroundContainer = styled.div`
  margin: 3rem 12rem;
  padding: 20px;
  background-color: #2864FF11;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const ProfileContainer = styled.div`
  margin: 1rem 2rem;
  display: flex;
`
const ProfileInputContainer = styled.form`
  margin-left: 48px;
  display: flex;
  flex-direction: column;
` 
const UserProfileImage = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 100%;
  background-color: rgb(0, 0, 0);
`;

const ProfileInputLabel = styled.label`
  font-size: 18px;
  transform: translateY(150%);
  font-weight: 800;
  margin-left: 5px;
`
const ProfileInput = styled.input`
  border: transparent;
  border-bottom: solid 1px #B2B2B2;
  background-color: transparent;
  height: 3.5rem;
  width: 360px;
  padding-left: 10rem;
  font-size: 18px;
  :focus {
    outline: none;
  }
`

const HistoryContainer = styled.div`
  flex-direction: row;
  display: flex;
  height: 10rem;
  margin-top: 5rem;
`
const TeamContainer = styled.div`

  p{
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 3.5rem;
  }
`
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 두 개의 열 */
  gap:1.5rem;
`
const CardContainer = styled.div`
  width: 20rem;
`
const TeamManageBtn = styled.button`
  display: flex;
  width: 20rem;
  margin-top: 0.7rem;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
  color: #FAFAFA;
  border: transparent;
`

const HandleTeamBtn = styled(TeamManageBtn)`
  background-color: #0094FF;
  font-family: "SUIT-Light";
  font-weight: 500;
`
const TeamEndBtn = styled(TeamManageBtn)`
  background-color: #5D42FF80;
`
const TeamCPRBtn = styled(TeamManageBtn)`
  background-color: #0094FF;
`

const FootDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3.75rem;
`
const SignOutBtn = styled.button`
  border: transparent;
  margin-left: auto;
  margin-right: auto;
  background-color: #DFDFDF;
  border-radius: 0.625rem;
  width: 6rem;
  height: 3rem;
  font-family: "SUIT-Light";
  font-weight: 600;
`
const SettingMain = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <BackgroundContainer>
        <SpcBetween name="top">
          <BiggestTxt>프로필</BiggestTxt>
          <RoundedButton
            value="변경된 프로필 저장하기"
            backgroundColor="rgba(0, 148, 255, 0.70)"
            color="#FAFAFA"
          />
        </SpcBetween>

        <div name="userProfile" style={{ margin: "1rem 0" }}>
          <ProfileContainer>
            <UserProfileImage />
            <ProfileInputContainer >
              <ProfileInputLabel> 닉네임 </ProfileInputLabel>
              <ProfileInput />
              <ProfileInputLabel> 이메일 </ProfileInputLabel>
              <ProfileInput />
              <ProfileInputLabel> 비밀번호 변경 </ProfileInputLabel>
              <ProfileInput />
              <ProfileInputLabel> 비밀번호 변경 확인 </ProfileInputLabel>
              <ProfileInput />
            </ProfileInputContainer>
          </ProfileContainer>

          <HistoryContainer>
            <HistoryTag backgroundColor="rgba(0, 148, 255, 0.50)">
              지금까지 띄운 뜬구름의 수는?
              <RoundedTag value="총 224개의 뜬구름을 띄웠어요!"
                backgroundColor="white"
                color="rgba(0, 148, 255, 0.70)" />
            </HistoryTag>
            <div style={{ padding: "1.5vw" }} />
            <HistoryTag backgroundColor="rgba(40, 100, 255, 0.50)">
              지금까지 참여한 팀의 수는?
              <RoundedTag value="총 17개의 팀에 참여했어요!"
                backgroundColor="white"
                color="rgba(0, 148, 255, 0.70)" />
            </HistoryTag>
          </HistoryContainer>
        </div>

        <div name="TeamManage" style={{marginTop: "3rem", marginLeft: "2rem"}} >
          <BiggestTxt style={{ textAlign: "left", margin: "2rem"}}>
            팀 관리하기
          </BiggestTxt>
          <TeamContainer>
            <p> 활성화된 팀 </p>
            <TeamGrid>
              <CardContainer>
                  <TeamCard 
                    bgColor = "#BED8FF80"
                    color = "#404040"
                    tagBgColor = "#0094FF"
                    tagColor = "#FAFAFA"
                    goormCnt="현재 구름 갯수 12개">디자인 리서치</TeamCard>
                  <HandleTeamBtn>관리 바로가기</HandleTeamBtn>
                  <TeamEndBtn>팀 활동 종료하기</TeamEndBtn>
                </CardContainer>
            </TeamGrid>
          </TeamContainer>
          <TeamContainer>
            <p> 종료된 팀 </p>
            <TeamGrid>
            <CardContainer>
              <TeamCard 
                  bgColor = "#9D9D9DB2"
                  color = "#FAFAFA"
                  tagBgColor = "#FAFAFA"
                  tagColor = "#848484"
                  goormCnt="현재 구름 갯수 12개">종료된 팀</TeamCard>
              <TeamCPRBtn>팀 다시 활성화하기</TeamCPRBtn>
            </CardContainer>
            </TeamGrid>
          </TeamContainer>
          <FootDiv>
            <SignOutBtn>로그아웃</SignOutBtn>
          </FootDiv>
        </div>
      </BackgroundContainer>

      <footer></footer>
    </Container>
  );
};

export default SettingMain;
