import { Metadata } from 'next';
import { Flex } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Title, BackButton } from '@/components/atoms';
import { ContactInfo } from '@/components/organisms';
import { ImageWrapper } from './page.styles';

export const metadata: Metadata = {
  title: 'Kontakt - Good Boy Foundation',
  description: 'Kontaktujte nás. Good Boy Foundation, Obchodná 3D, 010 08 Žilina, Slovakia. Email: hello@goodrequest.com, Tel: +421 911 750 750',
  openGraph: {
    title: 'Kontakt - Good Boy Foundation',
    description: 'Kontaktujte nás. Good Boy Foundation v Žiline.',
    type: 'website',
    locale: 'sk_SK',
  },
};

export default async function ContactsPage() {
  const t = await getTranslations('ContactsPage');
  const tCommon = await getTranslations('Common');

  return (
    <Flex direction='column' gap='xxl' w='100%' pb={'md'}>
      <BackButton>
        <FiArrowLeft size={20} />
        <span>{tCommon('back')}</span>
      </BackButton>

      <Title size='display2' as='h1' weight='bold'>
        {t('title')}
      </Title>

      <ContactInfo />

      <ImageWrapper>
        <Image src='/dog2.webp' alt='Happy dog' objectFit='cover' objectPosition='center' width={1200} height={380} priority />
      </ImageWrapper>
    </Flex>
  );
}
