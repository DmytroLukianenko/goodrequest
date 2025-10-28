'use client';

import { FC, useState, useEffect } from 'react';
import { Flex, Text } from '@mantine/core';
import { FiCheck } from 'react-icons/fi';

type ToastMessageProps = {
  title: string;
  initialSeconds: number;
  onComplete: () => void;
};

export const ToastMessage: FC<ToastMessageProps> = ({ title, initialSeconds, onComplete }) => {
  const [countdown, setCountdown] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Используем setTimeout чтобы вызвать onComplete после завершения рендера
          setTimeout(() => onComplete(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Flex direction='column' gap='xs'>
      <Flex align='center' gap='sm'>
        <FiCheck size={20} />
        <Text fw={600}>{title}</Text>
      </Flex>
      <Text size='sm' c='dimmed'>
        Budete presmerovaní na hlavnú stránku za {countdown} sekúnd
      </Text>
    </Flex>
  );
};
