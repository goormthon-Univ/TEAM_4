import http from "./client";

export const signIn = async (info) => {
  try {
    console.log(info);
    const res = await http.post("/accounts/signin", info);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.accessToken);
    window.location.replace("/main");
  } catch (err) {
    console.error(err);
    alert(err.response?.data.message);
    window.location.replace("/login");
  }
};
