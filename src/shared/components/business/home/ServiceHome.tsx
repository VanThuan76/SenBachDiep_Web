import { useGetListService } from '@/src/queries/services';
import useTrans from '@/src/shared/hooks/useTrans';
import { PreImage } from '@/src/shared/components/customization/PreImage';
import { Badge } from '@/src/shared/components/ui/badge';
import IconUser from '@/src/shared/components/icons/business/IconUser';
import IconStar from '@/src/shared/components/icons/business/IconStar';
import IconComment from '@/src/shared/components/icons/business/IconComment';
import { IServices } from '@/src/schemas/services';
type Props = {
  data: IServices | undefined
}
const ServiceHome = ({data}: Props) => {
  const { trans } = useTrans();
  if (!data) return <></>;
  return (
    <section id='ServiceHome' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='font-bold text-5xl mb-5'>{trans.common.service}</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-4 lg:grid-col-6 gap-5 justify-start items-center'>
        {data.services.map((item, idx) => {
          return (
            <div className='w-full flex flex-col justify-start items-start gap-5' key={idx}>
              <div className='mx-auto w-full h-[300px] relative overflow-hidden rounded-lg'>
                <PreImage
                  src={item.image_url as string}
                  height={300}
                  layer={false}
                  alt={item.title as string}
                  className='object-cover'
                />
              </div>
              <div className='w-full h-[300px] flex flex-col gap-3 justify-start items-start'>
                <h2 className='font-bold text-2xl'>{item.title}</h2>
                <div className='flex justify-start items-center gap-2'>
                  {item.tags.map((tag, tagId) => (
                    <Badge variant='outline' key={tagId}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p>{(item.introduction).substring(0, 50) + "..."}</p>
                <div className='flex justify-start items-center gap-3'>
                  <div className='flex justify-start items-center gap-2 border-r border-r-[#C9C9C9] pr-3'>
                    <IconUser />
                    <p>{item.used_count}</p>
                  </div>
                  <div className='flex justify-start items-center gap-2 border-r border-r-[#C9C9C9] pr-3'>
                    <IconStar />
                    <p>{item.rate}</p>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                    <IconComment />
                    <p>{item.comment_count}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceHome;
