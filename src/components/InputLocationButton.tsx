import { ActionIcon } from '@mantine/core';
import React from 'react';
import { latLonCallBackProp } from '../interfaces';
import { LocationIcon } from './Icons';

interface ButtonProp {
  automaticFinder: (handleNext: latLonCallBackProp) => void;
  getWeather: (lat: string, lon: string) => Promise<void>;
  loading: boolean;
}

const InputLocationButton = ({
  automaticFinder,
  getWeather,
  loading,
}: ButtonProp) => {
  return (
    <ActionIcon
      radius='xl'
      size='sm'
      onClick={() => automaticFinder(getWeather)}
      loading={loading}
    >
      <LocationIcon />
    </ActionIcon>
  );
};

export default InputLocationButton;
