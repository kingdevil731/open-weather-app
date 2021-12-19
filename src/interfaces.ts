export interface mainSliceState {
  main: {
    empty: boolean;
    timeZone: string;
    currentWeather: {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: number;
      uvi: number;
      visibility: number;
      weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
      }[];
      wind_deg: number;
      wind_speed: number;
    };
    dailyWeather: {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
      };
      uvi: number;
      weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
      }[];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }[];
    hourlyWeather: {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pop: number;
      pressure: number;
      temp: number;
      uvi: number;
      visibility: number;
      weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
      }[];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }[];
    isLoading: boolean;
  };
}

// CallBack that takes lattitude and longitude as parameters
export interface latLonCallBackProp {
  (lat: string, lon: string): void;
}
