'use client';

import { FC } from 'react';
import { Flex } from '@mantine/core';
import { Title, AmountButton, AmountInput } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';

const PRESET_AMOUNTS = [5, 10, 20, 30, 50, 100];

export const AmountSelection: FC = () => {
  const { amount, setAmount } = useFormContext();

  return (
    <Flex direction='column' gap={24}>
      <Title size='md' as='h3'>
        Suma, ktorou chcem prispieť
      </Title>
      <Flex justify={'center'}>
        <AmountInput value={amount} onChange={setAmount} />
      </Flex>

      <Flex wrap='wrap' gap={8} justify='center'>
        {PRESET_AMOUNTS.map((presetAmount) => (
          <AmountButton key={presetAmount} amount={presetAmount} isActive={amount === presetAmount} onClick={() => setAmount(presetAmount)} />
        ))}
      </Flex>
    </Flex>
  );
};
