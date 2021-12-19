import {
  Button,
  Card,
  Center,
  Group,
  Input,
  Text,
  useMantineTheme,
} from '@mantine/core';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  city,
  isProcessing,
  setCity,
  setIsProcessing,
} from '../../redux/appSlice';
import { getCityByGeoCode } from '../../services/api';
import { LocationIcon } from '../Icons';

const StepOne = () => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  // Dispatcher
  const dispatch = useDispatch();
  // State
  const currentCity = useSelector(city);
  const isProcessingState = useSelector(isProcessing);
  // Navigate
  const navigate = useNavigate();

  const handleAutomaticLocationButtonCLick = () => {
    dispatch(setIsProcessing(true));
    // check if browser supports geolocation, else user has to enter city manually
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // get lat and long and save to local storage for later use
          localStorage.setItem('lat', position.coords.latitude.toString());
          localStorage.setItem('long', position.coords.longitude.toString());

          const key = process.env.REACT_APP_NOTGEOAPI || 'key';
          const lat = position.coords.latitude.toString();
          const lon = position.coords.longitude.toString();

          getLocation(lat, lon, key);
        },
        (error) => {
          dispatch(setIsProcessing(false));
          alert(error.message);
        },
      );
    } else {
      alert(
        'Geolocation is not supported by this browser, please enter your location manually',
      );
    }
  };

  const getLocation = (lat: string, lon: string, key: string) => {
    axios.get(getCityByGeoCode(lat, lon, key)).then((res) => {
      // set city name returned by the API
      dispatch(setCity(res.data.results[0].components.city));
      dispatch(setIsProcessing(false));
    });
  };

  const handleContinueButtonClick = () => {
    // check if city is not empty, if it is, show an error, otherwise, continue to the next step
    if (currentCity !== '') {
      if (!localStorage.getItem('lat') && !localStorage.getItem('long')) {
        dispatch(setIsProcessing(true));

        axios
          .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_NOTGEOAPI}`,
          )
          .then((res) => {
            // set lat and long in local storage for later use
            localStorage.setItem(
              'lat',
              res.data.results[0].geometry.lat.toString(),
            );
            localStorage.setItem(
              'long',
              res.data.results[0].geometry.lng.toString(),
            );
            dispatch(setIsProcessing(false));

            localStorage.setItem('city', currentCity);
            localStorage.setItem('currentWelcomeStep', '2');

            navigate('/welcome/step2', { replace: true });
          });
      } else {
        localStorage.setItem('city', currentCity);
        localStorage.setItem('currentWelcomeStep', '2');

        navigate('/welcome/step2', { replace: true });
      }
    } else {
      alert('Please enter your city before trying to continue');
    }
  };

  return (
    <Center
      style={{
        margin: 'auto',
        maxWidth: '50%',
        height: '100vh',
      }}
    >
      <Card shadow='sm' padding='lg'>
        <Card.Section
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '1.5rem',
          }}
        >
          <Text weight={700} style={{ marginBottom: theme.spacing.sm }}>
            Welcome to Step 1
          </Text>
          <Text
            size='sm'
            style={{
              color: secondaryColor,
              lineHeight: 1.5,
            }}
          >
            If you don't know your location, you can click on the button below
            and we will try to get your location
          </Text>
        </Card.Section>

        <Group position='center' style={{ marginBottom: 5 }}>
          <Input
            placeholder='Type your location'
            radius='md'
            value={currentCity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setCity(e.target.value))
            }
          />
          <Button
            color='indigo'
            variant='light'
            radius='xl'
            onClick={handleAutomaticLocationButtonCLick}
            loading={isProcessingState}
          >
            <LocationIcon width={20} />
          </Button>
        </Group>

        <Text
          size='sm'
          style={{
            color: secondaryColor,
            lineHeight: 1.5,
            marginTop: theme.spacing.md,
          }}
        >
          Note: You can always change your location later in the settings
        </Text>
        <Button
          variant='light'
          color='blue'
          style={{ marginTop: 14 }}
          fullWidth
          onClick={handleContinueButtonClick}
        >
          Continue
        </Button>
      </Card>
    </Center>
  );
};

export default StepOne;
