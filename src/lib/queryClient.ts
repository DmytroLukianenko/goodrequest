import { QueryClient, defaultShouldDehydrateQuery } from '@tanstack/react-query';
import { cache } from 'react';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
    dehydrate: {
      shouldDehydrateQuery: (query: any) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
  },
};

export const createQueryClient = () => new QueryClient(queryClientConfig);

export const getQueryClient = cache(createQueryClient);
