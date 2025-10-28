import { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { ShelterStepper } from '@/components/organisms';
import { getQueryClient } from '@/lib/queryClient';
import { sheltersApi } from '@/services/api';
import { SHELTERS_QUERY_KEY } from '@/hooks/useShelters';

export const metadata: Metadata = {
  title: 'Podporte útulky - Good Boy Foundation',
  description: 'Prispejte útulkom pre psy na Slovensku. Vyberte si konkrétny útulok alebo prispejte celej nadácii Good Boy.',
  openGraph: {
    title: 'Podporte útulky - Good Boy Foundation',
    description: 'Prispejte útulkom pre psy na Slovensku. Vyberte si konkrétny útulok alebo prispejte celej nadácii Good Boy.',
    type: 'website',
    locale: 'sk_SK',
  },
};

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
