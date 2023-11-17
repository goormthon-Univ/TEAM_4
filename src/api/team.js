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
export const addTeam = async (teamData) => {
  try {
    const res = await http.post("/teams/join", teamData);
  } catch (error) {
    console.error("팀 추가 에러:", error);
  }
};
