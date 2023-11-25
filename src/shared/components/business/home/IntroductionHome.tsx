import { PreImage } from '@/src/shared/components/customization/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';

const IntroductionHome = () => {
  const { trans } = useTrans();
  return (
    <section id='IntroductionHome' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-center'>
          <div className='mx-auto w-full h-[500px] relative overflow-hidden rounded-lg'>
            <PreImage
              src='/static/images/image_1.jpg'
              height={500}
              layer={false}
              alt='Banner'
              className='object-cover'
            />
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-5'>
            <h1 className='font-bold text-5xl'>{trans.common.business_info.mission_title}</h1>
            <h2 className='font-semibold text-2xl'>{trans.common.business_info.mission}</h2>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-center'>
          <div className='w-full flex flex-col justify-center items-center gap-5'>
            <h1 className='font-bold text-5xl'>{trans.common.business_info.vision_title}</h1>
            <p>{trans.common.business_info.vision}</p>
          </div>
          <div className='mx-auto w-full h-[500px] relative overflow-hidden rounded-lg'>
            <PreImage
              src='/static/images/image_2.jpg'
              height={500}
              layer={false}
              alt='Banner'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionHome;
