'use client';

import { FC } from 'react';
import { StatsContainer, StatColumn, StatValue, StatLabel } from './ProjectStats.styles';

type ProjectStatsProps = {
  contributors: number;
  contribution: number;
};

export const ProjectStats: FC<ProjectStatsProps> = ({ contributors, contribution }) => {
  return (
    <StatsContainer>
      <StatColumn>
        <StatValue>{contribution} €</StatValue>
        <StatLabel>Celková vyzbieraná hodnota</StatLabel>
      </StatColumn>
      <StatColumn>
        <StatValue>{contributors}</StatValue>
        <StatLabel>Počet darcov</StatLabel>
      </StatColumn>
    </StatsContainer>
  );
};
