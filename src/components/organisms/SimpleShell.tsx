'use client';
import { FC, ReactNode } from 'react';
import { Footer } from '@/components/organisms';
import { StyledAppShell, StyledContainer, StyledGrid, SingleGridCol, ContentBox } from './SimpleShell.styles';

export const SimpleShell: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledAppShell>
      <StyledContainer size='xl'>
        <StyledGrid gutter={0}>
          <SingleGridCol span={12}>
            <ContentBox>{children}</ContentBox>
            <Footer />
          </SingleGridCol>
        </StyledGrid>
      </StyledContainer>
    </StyledAppShell>
  );
};
