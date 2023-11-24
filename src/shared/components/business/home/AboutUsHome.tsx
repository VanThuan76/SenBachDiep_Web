import useTrans from '@/src/shared/hooks/useTrans';

const AboutUsHome = () => {
  const { trans } = useTrans();

  return (
    <section id='ServiceHome' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='font-bold text-5xl mb-5'>{trans.common.about_us}</h1>
    </section>
  );
};

export default AboutUsHome;
