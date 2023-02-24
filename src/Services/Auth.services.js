import http from "./http.common";
async function checkUser() {
  return await http.post("/", {}, { withCredentials: true });
}
async function login(values) {
  return await http.post("/login", values , { withCredentials: true });
}
async function Register(values) {
  return await http.post(
    "/register",
    values ,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}
const AuthService = { checkUser, login, Register };
export default AuthService;
