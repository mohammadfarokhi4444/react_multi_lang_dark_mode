import axios from "axios";
const BaseUrlV1 = "http://162.55.95.245:7050/api/v1";
const Auth = "/auth";
const Admin = "/admin";
const News = "/news";

class Services {
  async login(token, lang, request) {
    return await axios.post(`${BaseUrlV1}${Auth}${Admin}/login`, request, {
      headers: { "accept-language": lang },
    });
  }
  async updateAdmin(token, lang, request, id) {
    return await axios.put(`${BaseUrlV1}${Admin}/${id}`, request, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async updateNews(token, lang, request, id) {
    return await axios.put(`${BaseUrlV1}${Admin}${News}/${id}`, request, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async listNews(token, lang, request, query) {
    return await axios.get(`${BaseUrlV1}${Admin}${News}${query || ""}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async listAdmin(token, lang, request, query) {
    return await axios.get(`${BaseUrlV1}${Admin}${query || ""}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async deleteAdmin(token, lang, request, id) {
    return await axios.delete(`${BaseUrlV1}${Admin}/${id}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async deleteNews(token, lang, request, id) {
    return await axios.delete(`${BaseUrlV1}${Admin}${News}/${id}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async getAdmin(token, lang, request, id) {
    return await axios.get(`${BaseUrlV1}${Admin}/${id}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async getNews(token, lang, request, id) {
    return await axios.get(`${BaseUrlV1}${Admin}${News}/${id}`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async createAdmin(token, lang, request, id) {
    return await axios.post(`${BaseUrlV1}${Admin}`,request, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async createNews(token, lang, request, id) {
    return await axios.post(`${BaseUrlV1}${Admin}${News}`,request, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
  async dashboard(token, lang) {
    return await axios.get(`${BaseUrlV1}${Admin}/dashboard`, {
      headers: {
        Authorization: "bearer " + token,
        "accept-language": lang,
      },
    });
  }
}
export default new Services();
