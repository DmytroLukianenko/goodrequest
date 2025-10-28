'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Flex } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { useAboutResults } from '@/hooks';
import { Title, Text, BackButton } from '@/components/atoms';
import { ProjectStats } from '@/components/organisms';

export const metadata = {
  title: 'O projekte - Good Boy Foundation',
  description: 'Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline. Zachraňujeme opustené a týrané psy, poskytujeme im lekársku starostlivosť a lásku.',
  openGraph: {
    title: 'O projekte - Good Boy Foundation',
    description: 'Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline. Zachraňujeme opustené a týrané psy.',
    type: 'website',
    locale: 'sk_SK',
  },
};

function AboutPageContent() {
  const t = useTranslations('AboutPage');
  const tCommon = useTranslations('Common');
  const searchParams = useSearchParams();
  const shelterId = searchParams.get('shelter');

  const { data, isLoading, isError } = useAboutResults(shelterId ? { search: shelterId } : undefined);

  return (
    <Flex direction='column' gap='xxl' w='100%'>
      <BackButton>
        <FiArrowLeft size={20} />
        <span>{tCommon('back')}</span>
      </BackButton>

      <Title size='display2' as='h1' weight='bold'>
        {t('title')}
      </Title>

      <Text>{t('intro')}</Text>

      {isLoading && <Text>{tCommon('loading')}</Text>}
      {isError && <Text variant='secondary'>{tCommon('error')}</Text>}
      {data && <ProjectStats contributors={data.contributors} contribution={data.contribution} />}

      <Text>{t('outro')}</Text>
    </Flex>
  );
}

export default function AboutPage() {
  const tCommon = useTranslations('Common');
  return (
    <Suspense fallback={<div>{tCommon('loading')}</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
