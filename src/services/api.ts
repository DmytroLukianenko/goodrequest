import { SheltersResponse, SheltersQueryParams } from '@/types/api';

const API_BASE_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const sheltersApi = {
  getShelters: async (params?: SheltersQueryParams, signal?: AbortSignal): Promise<SheltersResponse> => {
    const url = new URL(`${API_BASE_URL}/shelters`);

    if (params?.search) {
      url.searchParams.set('search', params.search);
    }

    const response = await fetch(url.toString(), { signal });

    if (!response.ok) {
      throw new ApiError(`Failed to fetch shelters: ${response.statusText}`, response.status);
    }

    return response.json();
  },
};
