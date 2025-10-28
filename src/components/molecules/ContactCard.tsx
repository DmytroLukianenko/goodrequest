'use client';

import { FC } from 'react';
import { IconType } from 'react-icons';
import { CardContainer, IconWrapper, ContentWrapper, TitleText, DescriptionText, LinkText } from './ContactCard.styles';

export type ContactCardProps = {
  icon: IconType;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkAriaLabel: string;
};

export const ContactCard: FC<ContactCardProps> = ({ icon: Icon, title, description, linkText, linkHref, linkAriaLabel }) => {
  return (
    <CardContainer>
      <IconWrapper>
        <Icon size={20} />
      </IconWrapper>
      <ContentWrapper>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        <LinkText href={linkHref} aria-label={linkAriaLabel}>
          {linkText}
        </LinkText>
      </ContentWrapper>
    </CardContainer>
  );
};
