import http from "./client";

// 팀 조회
export const findTeamList = async () => {
  try {
    const res = await http.get("/teams");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("팀 조회 에러:", error);
  }
};

//팀 추가
export const joinTeam = async (teamData) => {
  try {
    const res = await http.post("/teams/join", teamData);
    localStorage.setItem("accessToken", res.data.tokenInfo.accessToken);
    localStorage.setItem("refreshToken", res.data.tokenInfo.refreshToken);
    console.log("팀생성 성공");
  } catch (error) {
    console.error("팀 추가 에러:", error);
  }
};

export const addTeam = async (teamInfo) => {
  try {
    console.log(teamInfo);
    const res = await http.post("/teams", teamInfo);
    console.log("팀이름 등록 성공", res.data);
    return res.data.message;
  } catch (error) {
    console.error("팀 이름 등록 오류", error);
  }
};

export const addTeamTopic = async (teamInfo) => {
  try {
    const res = await http.post("/topics", teamInfo);

    console.log("팀 주제 등록 성공", res);
  } catch (error) {
    console.error("팀 주제 및 설명 등록 실패", error);
  }
};

export const invite = async (inviteInfo) => {
  try {
    const res = await http.post("/teams/invite", inviteInfo);

    console.log("팀 이메일 전송 성공", res);
  } catch (error) {
    console.error("팀 이메일 전송 에러", error);
  }
};
