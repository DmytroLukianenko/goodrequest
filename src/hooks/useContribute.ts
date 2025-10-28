import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { sheltersApi } from '@/services/api';
import { ContributeRequest, ContributeResponse } from '@/types/api';

export const CONTRIBUTE_MUTATION_KEY = 'contribute';

export const useContribute = (): UseMutationResult<ContributeResponse, Error, ContributeRequest> => {
  return useMutation({
    mutationKey: [CONTRIBUTE_MUTATION_KEY],
    mutationFn: async (data: ContributeRequest) => {
      return await sheltersApi.contribute(data);
    },
  });
};
