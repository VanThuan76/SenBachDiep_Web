import IconLocation from '@/src/shared/components/icons/footer/IconLocation';
import IconPhone from '@/src/shared/components/icons/footer/IconPhone';
import IconMail from '@/src/shared/components/icons/footer/IconMail';
import IconFacebook from '@/src/shared/components/icons/footer/IconFacebook';
import Link from 'next/link';
import useTrans from '../hooks/useTrans';
import IconLogoFull from '@/src/shared/components/icons/business/IconLogoFull';
import IconLogoZalo from '@/src/shared/components/icons/IconLogoZalo';

const FooterLayoutWebsite = () => {
  const { trans } = useTrans();
  return (
    <section className='bg-[var(--main-color)] text-white font-thin md:padding-section'>
      <div className='container-layer flex-col-between-center gap-10 p-4 md:p-6 lg:p-12'>
        <div className='w-full mb-4 grid grid-cols-1 lg:grid-cols-5 justify-center items-center'>
          <div className='col-span-2 flex-col-start gap-5'>
            <IconLogoFull color='#fff' width={150} height={150} />
            <div className='flex justify-center items-center gap-2'>
              <Link href={trans.common.business_info.facebook} target='_blank'>
                <IconFacebook width={24} height={24} />
              </Link>
              <Link href={trans.common.business_info.zalo} target='_blank'>
                <IconLogoZalo width={26} height={26} />
              </Link>
            </div>
          </div>
          <div className='col-span-3 w-full mt-5 lg:mt-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5'>
            <div className='flex-col-start gap-5'>
              <h2 className='font-bold'>{trans.common.about_us}</h2>
              <p>{trans.common.business_info.mission_title}</p>
              <p>{trans.common.business_info.core_title}</p>
              <p>{trans.common.business_info.announced_leaderShip_title}</p>
            </div>
            <div className='flex-col-start gap-5'>
              <h2 className='font-bold'>{trans.common.business_info.information_title}</h2>
              <div className='flex-row-between-center gap-2'>
                <IconLocation />
                <p>{trans.common.business_info.address}</p>
              </div>
              <div className='flex-row-between-center gap-2'>
                <IconPhone />
                <p>{trans.common.business_info.phone_number}</p>
              </div>
              <div className='flex-row-between-center gap-2'>
                <IconMail />
                <p>{trans.common.business_info.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-5 flex-col-end md:flex-row border-t-2'>{/* <p>{trans.footer.copyright}</p> */}</div>
      </div>
    </section>
  );
};

export default FooterLayoutWebsite;
