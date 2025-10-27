'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode, useState } from 'react';
import { createQueryClient } from '@/lib/queryClient';

export const QueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(createQueryClient);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
