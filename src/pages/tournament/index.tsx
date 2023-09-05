import IntroduceCardTournament from '@/components/business/tournament/IntroduceCardTournament';
import Head from 'next/head';

import LayoutWebsite from 'src/shared/layouts/LayoutWebsite';
import { tournamentData } from 'src/shared/mocks/tournament';

export function Tournament() {
  return (
    <>
      <Head>
        <title>Bảng Tournament Golf Ranking</title>
        <meta name='description' content='Bảng Tournament Golf Ranking' />
        <meta name='keywords' content='Golf Ranking Công nghệ thông tin, Giải pháp số' />
      </Head>
      <div className='mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        <IntroduceCardTournament className="max-h-[500px]" size={340} data={tournamentData[0]} />
        <div className='flex-col-start gap-5'>
          {tournamentData.slice(1, 3).map((item, idx) => (
            <IntroduceCardTournament key={idx} data={item} />
          ))}
        </div>
      </div>
      <div className='mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        {tournamentData.slice(3, 5).map((item, idx) => (
          <IntroduceCardTournament key={idx} data={item} />
        ))}
      </div>
      <div className='mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
        {tournamentData.slice(5, 8).map((item, idx) => (
          <IntroduceCardTournament key={idx} data={item} />
        ))}
      </div>
    </>
  );
}
Tournament.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Tournament;