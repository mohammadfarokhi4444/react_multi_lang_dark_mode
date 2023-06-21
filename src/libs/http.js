import axios from "axios";

export const BaseUrlV1Auth = "https://api.open-meteo.com/";

const Axios = axios.create({
  baseURL: BaseUrlV1Auth,
  // headers: {
  //   Authorization: "token",
  //   "accept-language": "fa",
  // },
});

export default async function http({ method, url, data, params }) {
  try {
    const response = await Axios.request({
      method,
      url,
      data,
      params,
    });
    if (response.status !== 200) {
      return {
        success: false,
        message: response.data?.error?.message || "error",
        dataBody: {},
      };
    }
    return {
      success: true,
      message: response.data.message || "ok",
      dataBody: response.data,
    };
  } catch (error) {
    // console.log('=------error.response----', error.response);
    const status = error.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("fullname");
      window.location.href = "/login";
    }
    return {
      success: false,
      message: error.response?.data?.message || "خطایی رخ داده است",
      dataBody: {},
    };
  }
}
