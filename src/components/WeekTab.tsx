import { Col, Container, Grid, SimpleGrid, Space, Title } from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { currentWeather, dailyWeather } from '../redux/mainSlice';
import HumidityCard from './TodayHighlights/HumidityCard';
import PressureCard from './TodayHighlights/PressureCard';
import SunriseSunsetCard from './TodayHighlights/SunriseSunsetCard';
import UvIndexCard from './TodayHighlights/UvIndexCard';
import VisibilityCard from './TodayHighlights/VisibilityCard';
import WeekDayCard from './TodayHighlights/WeekDayCard';
import WindStatusCard from './TodayHighlights/WindStatusCard';

const WeekTab = () => {
  const currentWeatherData = useSelector(currentWeather);
  const dailyWeatherData = useSelector(dailyWeather);
  return (
    <Container padding='lg' fluid>
      <Grid grow gutter='sm'>
        {dailyWeatherData.map((day) => (
          <Col span={1}>
            <WeekDayCard
              key={day.dt}
              dayOfWeek={day.dt}
              weatherId={day.weather[0].id}
              max_temp={day.temp.max}
              min_temp={day.temp.min}
            />
          </Col>
        ))}
      </Grid>
      <Space h='xl' />
      <Space h='lg' />
      <Title order={2}>Today's Highlights</Title>
      <Space h='md' />
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <div>
          <UvIndexCard
            key={currentWeatherData.uvi + currentWeatherData.dt}
            uvi={currentWeatherData.uvi}
          />
        </div>
        <div>
          <WindStatusCard
            key={currentWeatherData.wind_speed + currentWeatherData.dt}
            speed={currentWeatherData.wind_speed}
            wind_deg={currentWeatherData.wind_deg}
          />
        </div>
        <div>
          <SunriseSunsetCard
            key={currentWeatherData.sunrise + currentWeatherData.dt}
            sunrise={currentWeatherData.sunrise}
            sunset={currentWeatherData.sunset}
          />
        </div>
      </SimpleGrid>
      <Space h='sm' />
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <div>
          <HumidityCard
            key={currentWeatherData.humidity + currentWeatherData.dt}
            humidity={currentWeatherData.humidity}
          />
        </div>{' '}
        <div>
          <VisibilityCard
            key={currentWeatherData.visibility + currentWeatherData.dt}
            visibility={currentWeatherData.visibility}
          />
        </div>{' '}
        <div>
          <PressureCard
            key={currentWeatherData.pressure + currentWeatherData.dt}
            pressure={currentWeatherData.pressure}
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default WeekTab;
