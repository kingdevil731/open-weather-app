import { Container, Paper, Space, Text } from '@mantine/core';
import React from 'react';

interface PressureProps {
  pressure: number;
}
const PressureCard = ({ pressure }: PressureProps) => {
  const level = pressure >= 1000 ? 'high' : 'low';

  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>Pressure</Text>
        <Space h='xs' />
        <Text style={{ fontSize: '3rem' }} weight={500}>
          {pressure}
          <span style={{ fontSize: '1.25rem', fontWeight: '400' }}>hPa</span>
        </Text>
        <Text>
          {level} {level === 'high' ? '😄' : '☹️'}
        </Text>
      </Container>
    </Paper>
  );
};

export default PressureCard;
