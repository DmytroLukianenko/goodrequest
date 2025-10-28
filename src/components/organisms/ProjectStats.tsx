'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { StatsContainer, StatColumn, StatValue, StatLabel } from './ProjectStats.styles';

type ProjectStatsProps = {
  contributors: number;
  contribution: number;
};

export const ProjectStats: FC<ProjectStatsProps> = ({ contributors, contribution }) => {
  const t = useTranslations('ProjectStats');

  return (
    <StatsContainer>
      <StatColumn>
        <StatValue>{contribution} €</StatValue>
        <StatLabel>{t('totalAmount')}</StatLabel>
      </StatColumn>
      <StatColumn>
        <StatValue>{contributors}</StatValue>
        <StatLabel>{t('donorsCount')}</StatLabel>
      </StatColumn>
    </StatsContainer>
  );
};
