import { Container, LoadingOverlay, SimpleGrid, Space } from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { currentWeather, dailyWeather, isEmpty } from '../redux/mainSlice';
import SmallInfoCard from './SmallInfoCard';
import TodayDetailedCard from './TodayDetailedCard';

const TodayTab = () => {
  const currentWeatherData = useSelector(currentWeather);
  const dailyWeatherData = useSelector(dailyWeather);
  const measureSystem = localStorage.getItem('measurementSystem') || 'metric';

  return (
    <>
      {!useSelector(isEmpty) ? (
        <Container>
          <TodayDetailedCard
            sunrise={currentWeatherData.sunrise}
            sunset={currentWeatherData.sunset}
          />
          <Space h='sm' />
          <TodayDetailedCard
            minTemp={dailyWeatherData[0].temp.min}
            maxTemp={dailyWeatherData[0].temp.min}
            mornTemp={dailyWeatherData[0].temp.morn}
            dayTemp={dailyWeatherData[0].temp.day}
            eveTemp={dailyWeatherData[0].temp.eve}
            nightTemp={dailyWeatherData[0].temp.night}
          />
          <Space h='md' />
          <SimpleGrid
            cols={4}
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
          >
            <div>
              <SmallInfoCard
                title='Feels like'
                value={`${currentWeatherData.feels_like.toString()} °${
                  measureSystem === 'metric' ? 'C' : 'F'
                }`}
              />
            </div>

            <div>
              <SmallInfoCard
                title='Wind Speed'
                value={`${dailyWeatherData[0].wind_speed}${
                  measureSystem === 'metric' ? ' m/s' : ' mph'
                }`}
              />
            </div>
            <div>
              <SmallInfoCard
                title='Humidity'
                value={`${dailyWeatherData[0].humidity}%`}
              />
            </div>
            <div>
              <SmallInfoCard
                title='UV Index'
                value={`${dailyWeatherData[0].uvi}`}
              />
            </div>
            <div>
              <SmallInfoCard
                title='Pressure'
                value={`${dailyWeatherData[0].pressure} hPa`}
              />
            </div>

            <div>
              <SmallInfoCard
                title='Cloud Cover'
                value={`${dailyWeatherData[0].clouds}%`}
              />
            </div>
            <div>
              <SmallInfoCard
                title='Visibility'
                value={`${currentWeatherData.visibility}${
                  measureSystem === 'metric' ? ' m' : ' mi'
                }`}
              />
            </div>
          </SimpleGrid>
        </Container>
      ) : (
        <LoadingOverlay visible={true} />
      )}
    </>
  );
};

export default TodayTab;
