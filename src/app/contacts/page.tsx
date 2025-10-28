'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import { Title } from '@/components/atoms';
import { ContactInfo } from '@/components/organisms';
import { BackButton, ImageWrapper } from './page.styles';

export default function ContactsPage() {
  const router = useRouter();

  return (
    <Flex direction='column' gap='xxl' w='100%' pb={'md'}>
      <BackButton onClick={() => router.push('/')}>
        <FiArrowLeft size={20} />
        <span>Späť</span>
      </BackButton>

      <Title size='display2' as='h1' weight='bold'>
        Kontakt
      </Title>

      <ContactInfo />

      <ImageWrapper>
        <Image src='/dog2.webp' alt='Happy dog' objectFit='cover' objectPosition='center' width={1200} height={380} priority />
      </ImageWrapper>
    </Flex>
  );
}
