import { Button, Card, Text } from '@mantine/core';
import React from 'react';

interface StepsCardProps {
  children: React.ReactNode;
  secondaryColor: string;
  continueButtonText: string;
  continueButtonClick: () => void;
}

const StepsCard = ({
  children,
  secondaryColor,
  continueButtonText,
  continueButtonClick,
}: StepsCardProps) => {
  return (
    <Card shadow='xl' padding='lg' radius='md'>
      <Card.Section
        style={{
          padding: '1.5rem',
        }}
      >
        {children}
      </Card.Section>
      <Text
        size='sm'
        style={{
          color: secondaryColor,
          lineHeight: 1.5,
        }}
      >
        Note: You can always change your location later in the settings
      </Text>
      <Button style={{ marginTop: 12 }} fullWidth onClick={continueButtonClick}>
        {continueButtonText}
      </Button>
    </Card>
  );
};

export default StepsCard;
