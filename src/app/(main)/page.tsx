import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { ShelterStepper } from '@/components/organisms';
import { getQueryClient } from '@/lib/queryClient';
import { sheltersApi } from '@/services/api';
import { SHELTERS_QUERY_KEY } from '@/hooks/useShelters';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [SHELTERS_QUERY_KEY],
    queryFn: async () => {
      const response = await sheltersApi.getShelters();
      return response.shelters;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main style={{ width: '100%' }}>
        <ShelterStepper />
      </main>
    </HydrationBoundary>
  );
}
