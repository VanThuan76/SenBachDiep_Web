import { PreImage } from '@/src/shared/components/customization/PreImage';
import { ISectionBanner } from '@/src/shared/constants/types/home';

interface Props {
  data: ISectionBanner;
}
const BannerHome = ({ data }: Props) => {
  return (
    <section id='BannerHome' className='block w-screen pb-10'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex min-h-[500px] overflow-hidden'>
        <div className='mx-auto w-screen relative overflow-hidden'>
          <PreImage src={data.image as string} width={1980} height={500} layer={true} alt='Banner' objectPosition='center' className='object-cover' />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
