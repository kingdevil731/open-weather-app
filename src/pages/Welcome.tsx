import { Button, Center, Paper, Space, Text, Title } from '@mantine/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    localStorage.setItem('currentWelcomeStep', '1');
    // Go to next step
    navigate('/welcome/step1', { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem('welcomeCompleted')) {
      navigate('/app', { replace: true });
    }
  });

  return (
    <Center style={{ width: 'auto', height: '100vh' }}>
      <Paper padding='xl' shadow='xs' radius='md'>
        <Title order={1}>Welcome to TheOpenWeather</Title>
        <Space h='xl' />
        <Text>
          This is an app for getting your current weather predictions using{' '}
          <a href='https://openweathermap.org'>openweathermap.org api</a>
        </Text>
        <Text>
          In the next step you will either enter manually your city name or use
          the auto location feature
        </Text>
        <Space h='lg' />
        <Button
          fullWidth
          variant='gradient'
          gradient={{ from: 'orange', to: 'red' }}
          onClick={handleNextButtonClick}
        >
          Let's Go
        </Button>
      </Paper>
    </Center>
  );
};

export default Welcome;
