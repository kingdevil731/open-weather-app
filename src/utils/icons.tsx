import {
  WeatherClearSkyIcon,
  WeatherCloudsIcon,
  WeatherCloudyIcon,
  WeatherDrizzleIcon,
  WeatherMistIcon,
  WeatherRainIcon,
  WeatherSnowIcon,
  WeatherThunderstormIcon,
} from '../components/Icons';

/* Given a string representing the weather icon, return the corresponding icon component.

  *possible values:
    Group 2xx: Thunderstorm
    Group 3xx: Drizzle
    Group 5xx: Rain
    Group 6xx: Snow
    Group 7xx: Atmosphere
    Group 800: Clear
    Group 80x: Clouds
    Group other: Mist
*/
export const getWeatherIcons = (weatherId: number, size: string) => {
  // Convert from number to string to search based on startsWith
  const id = weatherId.toString();
  if (id.startsWith('2')) {
    return <WeatherThunderstormIcon width={size} height={size} />;
  } else if (id.startsWith('3')) {
    return <WeatherDrizzleIcon width={size} height={size} />;
  } else if (id.startsWith('5')) {
    return <WeatherRainIcon width={size} height={size} />;
  } else if (id.startsWith('6')) {
    return <WeatherSnowIcon width={size} height={size} />;
  } else if (id.startsWith('7')) {
    return <WeatherMistIcon width={size} height={size} />;
  } else if (id === '800') {
    return <WeatherClearSkyIcon width={size} height={size} />;
  } else if (id.startsWith('80')) {
    return <WeatherCloudsIcon width={size} height={size} />;
  } else {
    return <WeatherCloudyIcon width={size} height={size} />;
  }
};
