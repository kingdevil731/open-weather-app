import { Container, Paper, Space, Text } from '@mantine/core';
import React from 'react';

interface HumidityProps {
  humidity: number;
}

const HumidityCard = ({ humidity }: HumidityProps) => {
  const level = humidity >= 50 ? 'high' : 'low';

  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>Humidity</Text>
        <Space h='xs' />
        <Text style={{ fontSize: '3rem' }} weight={500}>
          {humidity}
          <span style={{ fontSize: '1.25rem', fontWeight: '400' }}>%</span>
        </Text>
        <Text weight={500}>{level}</Text>
      </Container>
    </Paper>
  );
};

export default HumidityCard;
