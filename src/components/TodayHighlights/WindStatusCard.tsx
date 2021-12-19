import { Container, Group, Paper, Space, Text } from '@mantine/core';
import React from 'react';
import { windDirection } from '../../utils/orientation';
import { ArrowUpIcon } from '../Icons';

interface windStatusCardProps {
  speed: number;
  wind_deg: number;
}

const WindStatusCard = ({ speed, wind_deg }: windStatusCardProps) => {
  const measureSystem = localStorage.getItem('measurementSystem') || 'metric';

  return (
    <Paper
      radius='lg'
      padding='md'
      style={{ width: '214px', height: '176.8px' }}
    >
      <Container>
        <Text style={{ color: '#adb5bd' }}>Wind Status</Text>
        <Space h='xs' />
        <Text style={{ fontSize: '3rem' }} weight={500}>
          {speed}
          <span style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            {measureSystem === 'metric' ? ' M/s' : ' Miles/h'}
          </span>
        </Text>
        <Group direction='row' spacing='xs'>
          <ArrowUpIcon
            width={35}
            height={35}
            style={{
              fill: 'blue',
              border: '0.5px solid #adb5bd',
              borderRadius: '50%',
              padding: '0.2rem',
              transform: `rotateZ(${wind_deg}deg)`,
            }}
          />
          <Text weight={500}>{windDirection(wind_deg)}</Text>
        </Group>
      </Container>
    </Paper>
  );
};

export default WindStatusCard;
