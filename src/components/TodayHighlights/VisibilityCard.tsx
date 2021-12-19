import { Container, Paper, Space, Text } from '@mantine/core';
import React from 'react';

interface visibilityCardProps {
  visibility: number;
}

const VisibilityCard = ({ visibility }: visibilityCardProps) => {
  const measureSystem = localStorage.getItem('measurementSystem') || 'metric';
  const isVisible = visibility >= 7000 ? 'Good' : 'Bad';
  // convert from meter to km or miles
  const visibilityKm = visibility / 1000;
  const visibilityMiles = visibility * 0.000621371;

  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>Visibility</Text>
        <Space h='xs' />
        <Text style={{ fontSize: '3rem' }} weight={500}>
          {measureSystem === 'metric' ? visibilityKm : visibilityMiles}
          <span style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            {measureSystem === 'metric' ? 'Km' : 'Miles'}
          </span>
        </Text>
        <Text weight={500}>
          {isVisible}
          {isVisible ? '😄' : '☹️'}
        </Text>
      </Container>
    </Paper>
  );
};

export default VisibilityCard;
