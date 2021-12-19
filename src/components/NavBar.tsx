import {
  Container,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  Space,
  Text,
} from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CityBackground from '../assets/svg/animatedWaves.svg';
import {
  currentWeather,
  isEmpty,
  isLoading,
  timeZone,
} from '../redux/mainSlice';
import { getTime, getWeekDayLong } from '../utils/date';
import { getWeatherIcons } from '../utils/icons';
import NavBarSearchField from './NavBarSearchField';

const NavBar = () => {
  const temperatureType = localStorage.getItem('measurementSystem') || 'metric';
  const currentWeatherData = useSelector(currentWeather);
  const zone = useSelector(timeZone);

  return (
    <Container>
      <LoadingOverlay visible={useSelector(isLoading)} />
      <NavBarSearchField />
      <Space h='md' />
      {useSelector(isEmpty) !== true && (
        <>
          <div style={{ margin: 'auto' }}>
            {getWeatherIcons(currentWeatherData.weather[0].id, '250')}
            <Space h='md' />
            <p
              style={{
                fontSize: '3.3rem',
                fontWeight: '500',
                margin: '0 0',
                textAlign: 'center',
              }}
            >
              {currentWeatherData.temp || '30'}°
              {temperatureType === 'metric' ? 'C' : 'F'}
            </p>
            <p style={{ fontSize: '1rem', textAlign: 'center' }}>
              {getWeekDayLong(currentWeatherData.dt) || 'Thursday'},{' '}
              <span style={{ color: 'gray' }}>
                {getTime(currentWeatherData.dt)}
              </span>
            </p>
            <Space h='sm' />
            <Divider />
          </div>

          <Group
            spacing='xs'
            style={{
              marginTop: '1.2rem',
            }}
          >
            {getWeatherIcons(currentWeatherData.weather[0].id, '30')}
            <Text style={{ marginLeft: '0.5rem' }}>
              {currentWeatherData.weather[0].main || 'Cloudy'}
            </Text>
          </Group>
          <Space h='lg' />
          <Paper
            radius='xl'
            shadow='xs'
            style={{
              background: `url(${CityBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              height: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text size='xl' weight={700} style={{ color: 'white' }}>
              {zone || localStorage.getItem('city')}
            </Text>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default NavBar;
