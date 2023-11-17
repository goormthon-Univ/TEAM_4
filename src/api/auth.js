import http from "./client";

export const signIn = async (info) => {
  try {
    console.log(info);
    const res = await http.post("/accounts/signin", info);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.accessToken);
    // localStorage.setItem("refreshToken", res.data.refreshToken);
    alert("로그인 성공!");
    window.location.replace("/main");
  } catch (err) {
    console.error(err);
    alert(err.response?.data.message);
    window.location.replace("/login");
  }
};

export const signUp = async (userInfo) => {
  try {
    const res = await http.post("/accounts/signup", userInfo);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    // 로그인 성공 시 원하는 동작 수행
    window.alert("회원가입 성공!");
    window.location.replace("/login");
  } catch (err) {
    if (
      err.response?.status === 500 &&
      err.response.data?.message === "중복되는 이메일이 존재합니다."
    ) {
      console.log("중복된 이메일");
      window.alert("이미 가입된 이메일 주소입니다.");
    } else {
      alert(err.response?.data.message);
    }

    window.location.replace("/create-acc");
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
