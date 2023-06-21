import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUserDispatch } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ShowSnackbar from "../Shared/ShowSnackbar";
import SelectWrapper from "../Shared/SelectWrapper";
import cityList from "../../mockData/cityList.json";
import { getWeather } from "../../apis/weather";
import { Box } from "@mui/material";
import CustomCircle from "../Shared/CustomCircle";
import MediumText from "../Shared/MediumText";
import { getData, storeData } from "../Utils/DB";
import SmallText from "../Shared/SmallText";

const Weather = () => {
  const navigate = useNavigate();
  const disPatch = useUserDispatch();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [snackData, setSnackData] = useState();
  const [weatherDes, setWeatherDes] = useState();
  const [loading, setLoading] = useState(false);
  const [fieldValue, setFieldValue] = useState({
    city: getData("city") || "",
  });

  const FetchData = async () => {
    setLoading(true);
    const res = await getWeather({
      latitude: fieldValue.city.latitude,
      longitude: fieldValue.city.longitude,
      current_weather: true,
    });
    if (res.success && res.dataBody) {
      setWeatherDes({
        temperature: res.dataBody.current_weather.temperature,
        name: language == "fa" ? fieldValue.city.title : fieldValue.city.slug,
        windspeed: res.dataBody.current_weather.windspeed,
      });
    }
    setSnackData({
      type: res.success ? "success" : "error",
      des: res.message,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (!fieldValue.city) return;
    async function fetchData() {
      storeData("city", fieldValue.city);
      await FetchData();
    }
    fetchData();
  }, [fieldValue]);

  return (
    <>
      <ShowSnackbar snackData={snackData} setSnackData={setSnackData} />
      <Box display="flex" alignItems="center">
        <SmallText
          text={t("weather.city")}
          sx={{ mx: "0px", minWidth: "50px" }}
        />
        <SelectWrapper
          name="city"
          options={cityList}
          setFieldValue={setFieldValue}
          fieldValue={fieldValue}
          isEn={language.includes("en")}
        />
      </Box>
      {!!loading ? (
        <CustomCircle />
      ) : !!weatherDes ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="background.paper"
          borderRadius="10px"
          height="60vh"
        >
          <MediumText text={weatherDes.name} />
          <MediumText text={`${weatherDes.temperature}°C`} />
          <MediumText
            text={`${t("weather.windspeed")} ${weatherDes.windspeed}`}
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Weather;
