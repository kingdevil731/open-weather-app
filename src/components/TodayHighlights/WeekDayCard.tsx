import { Container, Paper, Text } from '@mantine/core';
import React from 'react';
import { getWeekDayShort } from '../../utils/date';
import { getWeatherIcons } from '../../utils/icons';

interface weekDayProps {
  dayOfWeek: number;
  weatherId: number;
  max_temp: number;
  min_temp: number;
}

const WeekDayCard = ({
  dayOfWeek,
  weatherId,
  max_temp,
  min_temp,
}: weekDayProps) => {
  const weekDay = getWeekDayShort(dayOfWeek);
  const measureSystem = localStorage.getItem('measureSystem');
  return (
    <Paper radius='lg' padding='sm'>
      <Container style={{ fontSize: '0.8rem', textAlign: 'center' }}>
        <Text>{weekDay}</Text>
        {getWeatherIcons(weatherId, '35')}
        <Text>
          {max_temp.toPrecision(2)}°{` `}
          <span style={{ color: 'gray' }}>{`${min_temp.toPrecision(2)}°${
            measureSystem === 'metric' ? 'C' : 'F'
          }`}</span>
        </Text>
      </Container>
    </Paper>
  );
};

export default WeekDayCard;
