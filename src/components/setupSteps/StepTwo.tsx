import { Center, Select, Text, useMantineTheme } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepsCard from './StepsCard';

const StepTwo = () => {
  // Navigation hook
  const navigate = useNavigate();
  // Notification hook
  const notifications = useNotifications();
  // Theme hook
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const handleContinueButtonClick = () => {
    if (localStorage.getItem('measurementSystem') === null || undefined) {
      notifications.showNotification({
        title: 'Error',
        message: 'Please select a measurement system',
        color: 'red',
        autoClose: true,
      });
    } else {
      // remove unecessary stored item
      localStorage.removeItem('currentWelcomeStep');
      // set as completed welcome steps
      localStorage.setItem('welcomeCompleted', 'true');
      // push to main app as we have completed the setup
      navigate('/app', { replace: true });
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
      <StepsCard
        secondaryColor={secondaryColor}
        continueButtonText='Finish'
        continueButtonClick={handleContinueButtonClick}
      >
        <Text weight={700} style={{ marginBottom: theme.spacing.sm }}>
          Welcome to final Step
        </Text>
        <Select
          label='Your Prefered Measurement System'
          placeholder='Pick one'
          required
          data={[
            { value: 'metric', label: 'Metric' },
            { value: 'imperial', label: 'Imperial' },
          ]}
          onChange={(e: string) => {
            localStorage.setItem('measurementSystem', e);
          }}
        />
      </StepsCard>
    </Center>
  );
};

export default StepTwo;
