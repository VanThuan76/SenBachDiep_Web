import { ISectionIntroduction } from '@/src/shared/constants/types/home';
import { PreImage } from '@/src/shared/components/customization/PreImage';

interface Props {
  data: ISectionIntroduction;
}
const IntroductionHome = ({ data }: Props) => {
  return (
    <section id='IntroductionHome' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-center'>
        <div className='mx-auto w-full h-[500px] relative overflow-hidden rounded-lg'>
          <PreImage
            src={data.image as string}
            layer={false}
            alt='Banner'
            objectPosition='center'
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
          <h1 className='font-bold text-5xl'>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionHome;
