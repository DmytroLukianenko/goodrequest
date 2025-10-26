import { FC } from 'react';
import { SegmentedControlProps as MantineSegmentedControlProps } from '@mantine/core';
import { StyledSegmentedControl } from './SegmentedControl.styles';

export type SegmentedControlProps = Omit<MantineSegmentedControlProps, 'fullWidth'>;

export const SegmentedControl: FC<SegmentedControlProps> = (props) => {
  return <StyledSegmentedControl {...props} fullWidth />;
};
