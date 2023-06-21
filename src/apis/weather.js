import http from "../libs/http";

export function getWeather(params) {
  return http({
    url: `v1/forecast`,
    method: "GET",
    params,
  });
}
