import { Container, Paper, Text, Title } from '@mantine/core';
import React from 'react';

interface SmallInfoCardProps {
  title: string;
  value: string;
}
const SmallInfoCard = ({ title, value }: SmallInfoCardProps) => {
  return (
    <Paper padding='sm' shadow='sm' radius='md' style={{ width: '214px' }}>
      <Container>
        <Title order={3} style={{ color: 'grayText' }}>
          {title}
        </Title>
        <Text size='lg' weight={500}>
          {value}
        </Text>
      </Container>
    </Paper>
  );
};

export default SmallInfoCard;
