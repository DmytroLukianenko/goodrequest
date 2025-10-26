'use client';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Footer } from '@/components/organisms';
import { StyledAppShell, StyledContainer, StyledGrid, LeftGridCol, ContentBox, RightGridCol } from './Shell.styles';

export const Shell: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledAppShell>
      <StyledContainer size='xl'>
        <StyledGrid gutter={0}>
          <LeftGridCol span={{ base: 12, md: 6 }}>
            <ContentBox>{children}</ContentBox>
            <Footer />
          </LeftGridCol>

          <RightGridCol span={{ base: 12, md: 6 }}>
            <Image src='/dog.webp' alt='Dog' width={800} height={1200} priority />
          </RightGridCol>
        </StyledGrid>
      </StyledContainer>
    </StyledAppShell>
  );
};
