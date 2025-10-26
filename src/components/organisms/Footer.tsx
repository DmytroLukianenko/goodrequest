'use client';
import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { ActionIcon } from '@mantine/core';
import { Icon } from '@/components/atoms';
import { Link } from '@/components/atoms';
import { StyledFooter, IconsContainer, LinksContainer, ActionsRow } from './Footer.styles';
import { FOOTER_ICONS, FOOTER_LINKS } from './Footer.constants';

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <NextLink href='/'>
        <Image src='/Logo.svg' alt='Goodboy Logo' width={124} height={32} priority />
      </NextLink>

      <ActionsRow>
        <IconsContainer>
          {FOOTER_ICONS.map((icon) => (
            <ActionIcon key={icon.href} variant='subtle' component='a' href={icon.href} target='_blank' aria-label={icon.alt}>
              <Icon type='local' src={icon.src} size={20} alt={icon.alt} />
            </ActionIcon>
          ))}
        </IconsContainer>

        <LinksContainer>
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </LinksContainer>
      </ActionsRow>
    </StyledFooter>
  );
};

export default Footer;
