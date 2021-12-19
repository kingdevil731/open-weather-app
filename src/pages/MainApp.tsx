import {
  AppShell,
  Burger,
  Header,
  LoadingOverlay,
  MediaQuery,
  Navbar,
  Tab,
  Tabs,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { WeatherClearSkyIcon } from '../components/Icons';
import LeftPanel from '../components/NavBar';
import TodayTab from '../components/TodayTab';
import WeekTab from '../components/WeekTab';
import {
  isLoading,
  setCurrentWeather,
  setDailyWeather,
  setIsEmpty,
  setIsLoading,
  setTimeZone,
} from '../redux/mainSlice';
import { api, getCurrentWeather } from '../services/api';

const MainApp = () => {
  // Navigate
  const navigate = useNavigate();
  // Dispatcher
  const dispatch = useDispatch();
  // theme
  const theme = useMantineTheme();
  // notification system
  const notifications = useNotifications();
  // get lat and long from local storage
  const lat = localStorage.getItem('lat');
  const long = localStorage.getItem('long');
  // State for navigation bar on mobile
  const [opened, setOpened] = useState(false);

  // Check if has completed the setup else redirect to setup
  useEffect(() => {
    if (localStorage.getItem('welcomeCompleted') !== 'true') {
      navigate('/welcome', { replace: true });
    }
  }, [navigate]);

  // Initial fetch weather data from API
  useEffect(() => {
    if (lat && long) {
      const secret = process.env.REACT_APP_NOTWEATHERSCRET || 'secret';
      const measureSystem =
        localStorage.getItem('measurementSystem') || 'metric';
      api
        .get(getCurrentWeather(lat, long, secret, measureSystem))
        .then((res) => {
          dispatch(setCurrentWeather(res.data.current));
          dispatch(setDailyWeather(res.data.daily));
          dispatch(setTimeZone(res.data.timezone));
          dispatch(setIsEmpty(false));
          dispatch(setIsLoading(false));
        })
        .catch(() => {
          dispatch(setIsEmpty(true));
          dispatch(setIsLoading(false));
          notifications.showNotification({
            title: 'Error',
            message: 'Error fetching weather data',
            color: 'red',
          });
        });
    }
  });

  return (
    <AppShell
      padding='md'
      navbarOffsetBreakpoint='sm'
      fixed
      navbar={
        <Navbar
          padding='xs'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <LeftPanel />
        </Navbar>
      }
      header={
        <Header height={55} padding='md'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            <WeatherClearSkyIcon width={20} />
            <Text weight={700} style={{ marginLeft: theme.spacing.sm }}>
              The Open weather
            </Text>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[2],
        },
      })}
    >
      <LoadingOverlay visible={useSelector(isLoading)} />
      <Tabs variant='pills' tabPadding='md'>
        <Tab label='Today'>
          <TodayTab />
        </Tab>
        <Tab label='Week'>
          <WeekTab />
        </Tab>
      </Tabs>
    </AppShell>
  );
};

export default MainApp;
