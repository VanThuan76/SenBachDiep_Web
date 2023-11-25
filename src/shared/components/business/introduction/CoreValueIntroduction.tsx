import { PreImage } from '@/src/shared/components/customization/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';
import React from 'react';

const CoreValueIntroduction = () => {
  const { trans } = useTrans();
  return (
    <section id='CoreValueIntroduction' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='font-bold text-5xl mb-5'>{trans.common.business_info.core_title}</h1>
      <div className='flex flex-col justify-center items-center gap-10'>
        {trans.common.business_info.core.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {idx % 2 === 0 ? (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-center border-b border-r-[#C9C9C9] pb-10'>
                  <div className='mx-auto w-full h-[200px] relative overflow-hidden rounded-lg'>
                    <PreImage
                      src={`/static/images/image_${4 + idx}.jpg`}
                      height={200}
                      layer={false}
                      alt='Banner'
                      className='object-cover'
                    />
                  </div>
                  <div className='w-full flex flex-col justify-center items-center gap-5'>
                    <h2 className='font-semibold text-2xl'>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-center border-b border-r-[#C9C9C9] pb-10'>
                  <div className='w-full flex flex-col justify-center items-center gap-5'>
                    <h2 className='font-semibold text-2xl'>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className='mx-auto w-full h-[200px] relative overflow-hidden rounded-lg'>
                    <PreImage
                      src={`/static/images/image_${4 + idx}.jpg`}
                      height={200}
                      layer={false}
                      alt='Banner'
                      className='object-cover'
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default CoreValueIntroduction;
