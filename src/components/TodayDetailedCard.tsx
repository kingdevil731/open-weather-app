import { Center, Container, Group, Paper, Space, Text } from '@mantine/core';
import React from 'react';
import { getTime } from '../utils/date';
import {
  EveningIcon,
  MorningIcon,
  NightIcon,
  SunriseIcon,
  SunsetIcon,
  TemperatureHighIcon,
  TemperatureLowIcon,
  WeatherClearSkyIcon,
} from './Icons';

interface TodayDetailedProps {
  sunrise?: number;
  sunset?: number;
  minTemp?: number;
  maxTemp?: number;
  dayTemp?: number;
  nightTemp?: number;
  eveTemp?: number;
  mornTemp?: number;
}
const TodayDetailedCard = ({
  sunrise,
  sunset,
  minTemp,
  maxTemp,
  dayTemp,
  nightTemp,
  eveTemp,
  mornTemp,
}: TodayDetailedProps) => {
  const measureSystem = localStorage.getItem('measurementSystem') || 'metric';

  return (
    <Paper padding='md' shadow='sm' radius='md'>
      <Container>
        {sunrise && (
          <Center>
            <Group spacing='sm'>
              <SunriseIcon width={40} height={40} />
              <Text style={{ color: 'gray' }}>Sunrise: </Text>
              <Text weight={500}>{sunrise && getTime(sunrise)}</Text>
            </Group>
            <Space h='lg' />
            <Group spacing='sm'>
              <SunsetIcon width={40} height={40} />
              <Text style={{ color: 'gray' }}>Sunset: </Text>
              <Text weight={500}>{sunset && getTime(sunset)}</Text>
            </Group>
          </Center>
        )}
        {minTemp && (
          <Center>
            <Group spacing='xs'>
              <TemperatureLowIcon width={20} height={20} />
              <Text style={{ color: 'gray' }}>Min: </Text>
              <Text weight={500}>{minTemp}</Text>
            </Group>
            <Space h='md' />
            <Group spacing='xs'>
              <TemperatureHighIcon width={20} height={20} />
              <Text style={{ color: 'gray' }}>Max: </Text>
              <Text weight={500}>{maxTemp}</Text>
            </Group>
            <Space h='md' />
            <Group spacing='xs'>
              <MorningIcon width={40} height={40} />
              <Text style={{ color: 'gray' }}>Morning: </Text>
              <Text weight={500}>{mornTemp}</Text>
            </Group>
            <Space h='md' />
            <Group spacing='xs'>
              <WeatherClearSkyIcon width={25} height={25} />
              <Text style={{ color: 'gray' }}>Day: </Text>
              <Text weight={500}>{dayTemp}</Text>
            </Group>
            <Space h='md' />
            <Group spacing='xs'>
              <EveningIcon width={40} height={40} />
              <Text style={{ color: 'gray' }}>Evening: </Text>
              <Text weight={500}>{`${eveTemp}${
                measureSystem === 'metric' ? '°C' : '°F'
              }`}</Text>
            </Group>
            <Space h='md' />
            <Group spacing='xs'>
              <NightIcon width={25} height={20} />
              <Text style={{ color: 'gray' }}>Night: </Text>
              <Text weight={500}>{`${nightTemp}${
                measureSystem === 'metric' ? '°C' : '°F'
              }`}</Text>
            </Group>
          </Center>
        )}
      </Container>
    </Paper>
  );
};

export default TodayDetailedCard;
