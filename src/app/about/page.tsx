'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Flex } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import { useAboutResults } from '@/hooks';
import { Title, Text } from '@/components/atoms';
import { ProjectStats } from '@/components/organisms';
import { BackButton } from './page.styles';

function AboutPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shelterId = searchParams.get('shelter');

  const { data, isLoading, isError } = useAboutResults(shelterId ? { search: shelterId } : undefined);

  return (
    <Flex direction='column' gap='xxl' w='100%'>
      <BackButton onClick={() => router.push('/')}>
        <FiArrowLeft size={20} />
        <span>Späť</span>
      </BackButton>

      <Title size='display2' as='h1' weight='bold'>
        O projekte
      </Title>

      <Text>
        Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na Slovensku. Zachraňujeme opustené, týrané a bezdomovské psy, poskytujeme im lekársku starostlivosť, útočisko a
        lásku, ktorú si zaslúžia. Naším poslaním je dať týmto verným spoločníkom druhú šancu na život tým, že im nájdeme milujúci domov. Okrem záchrany a rehabilitácie sa
        zameriavame aj na podporu zodpovedného vlastníctva zvierat a ochrany zvierat prostredníctvom vzdelávacích a komunitných programov.
      </Text>

      {isLoading && <Text>Načítava sa...</Text>}
      {isError && <Text variant='secondary'>Chyba pri načítaní údajov</Text>}
      {data && <ProjectStats contributors={data.contributors} contribution={data.contribution} />}

      <Text>
        Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých darcov a komunity, ktorá sa hlboko stará o dobro zvierat. Organizujeme aj kastračné a sterilizačné
        iniciatívy, aby sme riešili problém túlavých psov a zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme, že každý pes si zaslúži bezpečný, milujúci domov a šťastný život.
        Pridajte sa k nám a pomôžte nám robiť zmeny – či už dobrovoľníctvom, darovaním alebo adopciou chlpatého priateľa. Spoločne môžeme vytvoriť lepšiu budúcnosť pre psy v
        Žiline.
      </Text>
    </Flex>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Načítava sa...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
