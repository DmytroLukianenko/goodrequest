import styled from '@emotion/styled';
import { Flex, type FlexProps } from '@mantine/core';
import { typography } from '@/styles/typography';

type StatsContainerProps = FlexProps;

export const StatsContainer = styled(Flex)<StatsContainerProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.other?.colors?.base.content.quintarny}`,
  borderBottom: `1px solid ${theme.other?.colors?.base.content.quintarny}`,
  paddingTop: '64px',
  paddingBottom: '64px',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
}));

type StatColumnProps = FlexProps;

export const StatColumn = styled(Flex)<StatColumnProps>({
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
});

export const StatValue = styled.div(({ theme }) => ({
  ...typography.display2.bold,
  color: theme.other?.colors?.base.action.primary.default,
  fontSize: '62px',
}));

export const StatLabel = styled.div(({ theme }) => ({
  ...typography.md.regular,
  color: theme.other?.colors?.base.content.primary,
  textAlign: 'center',
}));
