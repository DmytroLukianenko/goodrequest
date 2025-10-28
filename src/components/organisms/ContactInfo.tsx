'use client';

import { FC } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { ContactCard } from '@/components/molecules/ContactCard';
import { ContactInfoGrid } from './ContactInfo.styles';

export const ContactInfo: FC = () => {
  const t = useTranslations('ContactsPage');

  const CONTACT_CARDS = [
    {
      icon: FiMail,
      title: t('email.title'),
      description: t('email.description'),
      linkText: t('email.link'),
      linkHref: `mailto:${t('email.link')}`,
      linkAriaLabel: t('email.ariaLabel'),
    },
    {
      icon: FiMapPin,
      title: t('office.title'),
      description: t('office.description'),
      linkText: t('office.link'),
      linkHref: 'https://maps.google.com/?q=Obchodná+3D,+010+08+Žilina,+Slovakia',
      linkAriaLabel: t('office.ariaLabel'),
    },
    {
      icon: FiPhone,
      title: t('phone.title'),
      description: t('phone.description'),
      linkText: t('phone.link'),
      linkHref: `tel:${t('phone.link').replace(/\s/g, '')}`,
      linkAriaLabel: t('phone.ariaLabel'),
    },
  ];

  return (
    <ContactInfoGrid>
      {CONTACT_CARDS.map((card) => (
        <ContactCard key={card.title} {...card} />
      ))}
    </ContactInfoGrid>
  );
};
