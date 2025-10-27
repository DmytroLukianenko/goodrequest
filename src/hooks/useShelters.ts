import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { sheltersApi } from '@/services/api';
import { Shelter, SheltersQueryParams } from '@/types/api';

export const SHELTERS_QUERY_KEY = 'shelters';

export const useShelters = (params?: SheltersQueryParams): UseQueryResult<Shelter[], Error> => {
  return useQuery({
    queryKey: [SHELTERS_QUERY_KEY, params?.search] as const,
    queryFn: async ({ signal }) => {
      const response = await sheltersApi.getShelters(params, signal);
      return response.shelters;
    },
  });
};
