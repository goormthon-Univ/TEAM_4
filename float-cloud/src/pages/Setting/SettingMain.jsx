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
`;

const BackgroundContainer = styled.div`
  margin: 12rem;
  background-color: #2864ff33;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const UserProfileImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(0, 0, 0);
`;

const div = styled.div`
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
          <div style={{ display: "flex" }}>
            <UserProfileImage />
            <div style={{
              // marginLeft: "1rem", display: "flex",
              // alignItems: "center"
            }}>
              <BiggestTxt>username</BiggestTxt>
              <br />
              <BiggestTxt>user email</BiggestTxt>
            </div>
          </div>

          <SpcBetween name="userHistory" style={{ margin: "1rem 0" }}>
            <HistoryTag backgroundColor="rgba(0, 148, 255, 0.50)">
              지금까지 띄운 뜬구름의 수는?
              <RoundedTag value="총 224개의 뜬구름을 띄웠어요!"
                backgroundColor="white"
                color="rgba(0, 148, 255, 0.70)" />
            </HistoryTag>
            <div style={{ padding: "1vw" }} />
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
