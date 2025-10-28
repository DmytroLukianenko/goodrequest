import { Metadata } from 'next';
import { Suspense } from 'react';
import { Flex } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import { getTranslations } from 'next-intl/server';
import { Title, Text, BackButton } from '@/components/atoms';
import { ProjectStats } from '@/components/organisms';

export const metadata: Metadata = {
  title: 'O projekte - Good Boy Foundation',
  description: 'Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline. Zachraňujeme opustené a týrané psy, poskytujeme im lekársku starostlivosť a lásku.',
  openGraph: {
    title: 'O projekte - Good Boy Foundation',
    description: 'Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline. Zachraňujeme opustené a týrané psy.',
    type: 'website',
    locale: 'sk_SK',
  },
};

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const tCommon = await getTranslations('Common');

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

      <Suspense fallback={<Text>{tCommon('loading')}</Text>}>
        <ProjectStats />
      </Suspense>

      <Text>{t('outro')}</Text>
    </Flex>
  );
}
