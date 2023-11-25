import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layouts/LayoutWebsite';
import BannerIntroduction from '../shared/components/business/introduction/BannerIntroduction';
import MapsContact from '@/src/shared/components/business/contact/MapsContact';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const Contact = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.menu.contact}</title>
        <meta name='description' content={trans.common.menu.contact} />
        <meta name='keywords' content={trans.common.menu.contact} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper>
        <MapsContact />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};
Contact.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Contact;
