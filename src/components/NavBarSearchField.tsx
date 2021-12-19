import { Group, Input } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { latLonCallBackProp } from '../interfaces';
import { isProcessing, setIsProcessing } from '../redux/appSlice';
import {
  setCurrentWeather,
  setDailyWeather,
  setIsEmpty,
  setIsLoading,
  setTimeZone,
} from '../redux/mainSlice';
import { api, getCurrentWeather, getGeoCode } from '../services/api';
import { SearchIcon } from './Icons';
import InputLocationButton from './InputLocationButton';

const NavBarSearchField = () => {
  // Dispatcher
  const dispatch = useDispatch();
  // notification system
  const notifications = useNotifications();
  // State
  const [city, setCity] = useState<string>('');

  // GetWeather from API and set state for current, hourly and daily weather
  const getWeather = async (lat: string, lon: string) => {
    const unit = localStorage.getItem('measurementSystem') || 'metric';
    const secret = process.env.REACT_APP_NOTWEATHERSCRET || 'secret';
    // Reset state
    dispatch(setIsEmpty(true));
    dispatch(setCurrentWeather({}));
    dispatch(setDailyWeather([]));
    dispatch(setTimeZone(''));
    // Get weather by lat/lon
    try {
      const res = await api.get(getCurrentWeather(lat, lon, secret, unit));
      dispatch(setCurrentWeather(res.data.current));
      dispatch(setDailyWeather(res.data.daily));
      dispatch(setTimeZone(res.data.timezone));
      dispatch(setIsEmpty(false));
      setCity('');
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      notifications.showNotification({
        title: 'Error',
        message: `please try again`,
        color: 'red',
      });
    }
  };

  // Get lat and long from API and set state for lat and long from city
  const searchCityLocation = (handleNext: latLonCallBackProp) => {
    if (city !== '') {
      const secret = process.env.REACT_APP_NOTGEOAPI || 'secret';
      // Get city lat and lon
      axios
        .get(getGeoCode(city, secret))
        .then((res) => {
          handleNext(
            res.data.results[0].geometry.lat.toString(),
            res.data.results[0].geometry.lng.toString(),
          );
        })
        .catch((err) => {
          dispatch(setIsLoading(false));
          notifications.showNotification({
            title: 'Error Searching for City',
            message: `${err.message}, please try again`,
            color: 'red',
          });
        });
    }
  };

  // automatically find user lat and long from location api
  const getLocation = (handleNext: latLonCallBackProp) => {
    if (navigator.geolocation) {
      dispatch(setIsProcessing(true));
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setIsProcessing(false));
          dispatch(setIsLoading(true));
          handleNext(
            position.coords.latitude.toString(),
            position.coords.longitude.toString(),
          );
        },
        (err) => {
          dispatch(setIsProcessing(false));
          notifications.showNotification({
            title: 'Error Getting Location',
            message: `${err.message}, please try again`,
            color: 'red',
          });
        },
      );
    }
  };

  const handleSubmit = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (city !== '') {
        dispatch(setIsLoading(true));
        searchCityLocation(getWeather);
      } else {
        notifications.showNotification({
          title: 'Error',
          message: 'Please enter a city',
        });
      }
    }
  };

  return (
    <Group
      style={{
        gap: '0',
      }}
    >
      <Input
        icon={<SearchIcon />}
        placeholder='Search for places'
        radius='xl'
        variant='unstyled'
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
        onKeyDown={(e: any) => handleSubmit(e)}
      />
      <InputLocationButton
        automaticFinder={getLocation}
        getWeather={getWeather}
        loading={useSelector(isProcessing)}
      />
    </Group>
  );
};

export default NavBarSearchField;
