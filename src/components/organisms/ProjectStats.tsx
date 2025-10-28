'use client';

import { FC } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Loader } from '@mantine/core';
import { useAboutResults } from '@/hooks';
import { Text } from '@/components/atoms';
import { StatsContainer, StatColumn, StatValue, StatLabel } from './ProjectStats.styles';

export const ProjectStats: FC = () => {
  const t = useTranslations('ProjectStats');
  const tCommon = useTranslations('Common');
  const searchParams = useSearchParams();
  const shelterId = searchParams.get('shelter');

  const { data, isLoading, isError } = useAboutResults(shelterId ? { search: shelterId } : undefined);

  if (isError) return <Text variant='secondary'>{tCommon('error')}</Text>;

  return (
    <StatsContainer>
      <StatColumn>
        <StatValue>{isLoading ? <Loader size='sm' /> : `${data?.contribution || 0} €`}</StatValue>
        <StatLabel>{t('totalAmount')}</StatLabel>
      </StatColumn>
      <StatColumn>
        <StatValue>{isLoading ? <Loader size='sm' /> : data?.contributors || 0}</StatValue>
        <StatLabel>{t('donorsCount')}</StatLabel>
      </StatColumn>
    </StatsContainer>
  );
};
