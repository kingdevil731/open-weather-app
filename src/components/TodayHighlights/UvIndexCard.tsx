import { Container, Paper, RingProgress, Text } from '@mantine/core';
import React from 'react';
import { calculatePercentage } from '../../utils/numbers';

interface UvIndexCardProps {
  uvi: number;
}

const UvIndexCard = ({ uvi }: UvIndexCardProps) => {
  const uvIndex = calculatePercentage(12, uvi);
  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>UV Index</Text>
        <RingProgress
          label={
            <Text size='xl' weight={700} align='center'>
              {uvi}
            </Text>
          }
          sections={[{ value: uvIndex, color: 'orange' }]}
        />
      </Container>
    </Paper>
  );
};

export default UvIndexCard;
