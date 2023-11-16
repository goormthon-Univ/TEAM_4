import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import RoundedButton from "../../components/common/RoundedButton";
import RoundedTag from "../../components/common/RoundedTag";
import BiggestTxt from "../../components/text/BiggestTxt";
import SpcBetween from "../../components/setting/SpcBetween";
import HistoryTag from "../../components/setting/HistoryTag";

const Container = styled.div`
  width: 100%;
  height: 2000px;
  position: fixed;
`;

const BackgroundContainer = styled.div`
  margin: 12rem;
  background-color: #2864ff33;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

const UserProfileImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(0, 0, 0);
`;

const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

const SettingMain = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <BackgroundContainer>
        <SpcBetween name="top">
          <BiggestTxt>프로필</BiggestTxt>
          <RoundedButton
            value="프로필 수정하기"
            backgroundColor="rgba(0, 148, 255, 0.70)"
            color="#FAFAFA"
          />
        </SpcBetween>

        <div name="userProfile" style={{ margin: "1rem 0" }}>
          <CustomDiv>
            <UserProfileImage />
            <div style={{ marginLeft: "1rem" }}>
              <BiggestTxt>username</BiggestTxt>
              <BiggestTxt>user email</BiggestTxt>
            </div>
          </CustomDiv>

          <SpcBetween name="userHistory" style={{ margin: "1rem 0" }}>
            <HistoryTag backgroundColor="rgba(0, 148, 255, 0.50)">
              지금까지 띄운 뜬구름의 수는?
              <RoundedTag value="총 224개의 뜬구름을 띄웠어요!"
                backgroundColor="white"
                color="rgba(0, 148, 255, 0.70)" />
            </HistoryTag>
            <HistoryTag backgroundColor="rgba(40, 100, 255, 0.50)">
              지금까지 참여한 팀의 수는?
              <RoundedTag value="총 17개의 팀에 참여했어요!"
                backgroundColor="white"
                color="rgba(0, 148, 255, 0.70)" />
            </HistoryTag>
          </SpcBetween>
        </div>

        <div name="TeamManage">
          <BiggestTxt style={{ textAlign: "left", margin: "2rem" }}>
            팀 관리하기
          </BiggestTxt>

          <div name="activeTeam">
            <div name="miniTitle" style={{ fontSize: "1.5rem" }}>활성화된 팀</div>
            <div name="cardPanel">

            </div>
          </div>

          <div name="inactiveTeam">
            <div name="miniTitle" style={{ fontSize: "1.5rem" }}>비활성화된 팀</div>
            <div name="cardPanel">

            </div>
          </div>
        </div>
      </BackgroundContainer>

      <footer></footer>
    </Container>
  );
};

export default SettingMain;
