import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layouts/LayoutWebsite';
import BannerHome from '@/src/shared/components/business/home/BannerHome';
import { sectionBanner, sectionIntroduction } from '@/src/shared/constants/dump/home';
import IntroductionHome from '@/src/shared/components/business/home/IntroductionHome';
import ServiceHome from '@/src/shared/components/business/home/ServiceHome';
import AboutUsHome from '@/src/shared/components/business/home/AboutUsHome';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/customization/ScrollRevealWrapper'), {
  ssr: false,
});
function Home() {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.home}</title>
        <meta name='description' content={trans.common.home} />
        <meta name='keywords' content={trans.common.home} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper>
        <BannerHome data={sectionBanner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <IntroductionHome data={sectionIntroduction} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceHome />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <AboutUsHome />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;
