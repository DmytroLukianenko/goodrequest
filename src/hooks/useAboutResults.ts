import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { sheltersApi } from '@/services/api';
import { SheltersResultsResponse, SheltersResultsQueryParams } from '@/types/api';

export const SHELTERS_RESULTS_QUERY_KEY = 'sheltersResults';

export const useAboutResults = (params?: SheltersResultsQueryParams): UseQueryResult<SheltersResultsResponse, Error> => {
  return useQuery({
    queryKey: params?.search ? [SHELTERS_RESULTS_QUERY_KEY, params.search] : [SHELTERS_RESULTS_QUERY_KEY],
    queryFn: async ({ signal }) => {
      return await sheltersApi.getSheltersResults(params, signal);
    },
    staleTime: 0,
    gcTime: 0,
  });
};
