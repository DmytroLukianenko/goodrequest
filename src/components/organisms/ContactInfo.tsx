'use client';

import { FC } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { ContactCard } from '@/components/molecules/ContactCard';
import { ContactInfoGrid } from './ContactInfo.styles';

const CONTACT_CARDS = [
  {
    icon: FiMail,
    title: 'Kontakt',
    description: 'Our friendly team is here to help.',
    linkText: 'hello@goodrequest.com',
    linkHref: 'mailto:hello@goodrequest.com',
    linkAriaLabel: 'Send email to hello@goodrequest.com',
  },
  {
    icon: FiMapPin,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    linkText: 'Obchodná 3D, 010 08 Žilina, Slovakia',
    linkHref: 'https://maps.google.com/?q=Obchodná+3D,+010+08+Žilina,+Slovakia',
    linkAriaLabel: 'View office location on Google Maps',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    linkText: '+421 911 750 750',
    linkHref: 'tel:+421911750750',
    linkAriaLabel: 'Call +421 911 750 750',
  },
];

export const ContactInfo: FC = () => {
  return (
    <ContactInfoGrid>
      {CONTACT_CARDS.map((card) => (
        <ContactCard key={card.title} {...card} />
      ))}
    </ContactInfoGrid>
  );
};
