import { Container, Group, Paper, Space, Text } from '@mantine/core';
import React from 'react';
import { getTime } from '../../utils/date';
import { SunriseIcon, SunsetIcon } from '../Icons';

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

const SunriseSunsetCard = ({ sunrise, sunset }: SunriseSunsetProps) => {
  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>Sunrise & Sunset</Text>
        <Space h='xs' />
        <Group>
          <SunriseIcon
            width={45}
            height={45}
            style={{
              fill: 'blue',
              padding: '0.2rem',
            }}
          />
          <Text weight={500}>{getTime(sunrise)}</Text>
        </Group>
        <Space h='xs' />
        <Group>
          <SunsetIcon
            width={45}
            height={45}
            style={{
              fill: 'blue',
              padding: '0.2rem',
            }}
          />
          <Text weight={500}>{getTime(sunset)}</Text>
        </Group>
      </Container>
    </Paper>
  );
};

export default SunriseSunsetCard;
