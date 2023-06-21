// import http from "../libs/http";

export function login(username, password) {
  //******** =>> in real
  // return http({
  //   url: "/auth/login",
  //   method: "POST",
  //   data: { username, password },
  // });

  //******** =>> but in fake
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "Aa12345") {
        resolve({
          success: true,
          message: "Ok",
          dataBody: {
            fullName: "Mohammad Farokhi",
            userName: "admin",
            token: "this-json-web-token",
          },
        });
      } else {
        resolve({
          success: false,
          message: "Username Or Password is incorrect",
          dataBody: {},
        });
      }
    }, 1000);
  });
}
