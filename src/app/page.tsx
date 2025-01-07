'use client';

import AppLayout from '@/components/AppLayout';
import Banner from '@/components/Banner';
import { MemeCoinSection } from '@/components/CoinSection';
import { MemeCoinSectionTwo } from '@/components/CoinSectionTwo';
import { HeaderSection } from '@/components/HeaderSection';
import { Roadmap } from '@/components/Roadmap';
import { SmallSection } from '@/components/SmallSection';

export default function Home() {
  return (
    <AppLayout type="landing">
      <Banner />
      {/* <CardSection /> */}
      <MemeCoinSection />
      <MemeCoinSectionTwo />
      {/* <ContactUs /> */}
      <HeaderSection />
      <Roadmap />
      <SmallSection />
      {/* <CTASection /> */}
    </AppLayout>
  );
}
