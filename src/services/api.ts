import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const getCurrentWeather = (
  lat: string,
  lon: string,
  apiKey: string,
  units?: string,
) => {
  return `/onecall?lat=${lat}&lon=${lon}${
    units ? `&units=${units}` : ''
  }&exclude=hourly&appid=${apiKey}`;
};

// GeoCode API
export const getCityByGeoCode = (lat: string, lon: string, api: string) => {
  return `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${api}`;
};
// GeoCode API
export const getGeoCode = (cityName: string, api: string) => {
  return `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${api}`;
};
