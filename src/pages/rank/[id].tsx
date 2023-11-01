import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/router';
import { InformationCardDetailRank } from '@/src/shared/components/business/rank/detail/InformationCardDetailRank';
import { IMember } from 'src/schemas/member.table.type';
import { IBaseResponse } from 'src/schemas/baseResponse.type';
import { useGetListTournamentSummary } from 'src/queries/tournament-summary.queires';
import LayoutWebsite from 'src/shared/layouts/LayoutWebsite';
import TableDetailRank from '@/src/shared/components/business/rank/detail/TableDetailRank';
import Breadcrumb from '@/src/shared/components/customization/Breadcrumb';
import { URL_SYSTEMS } from 'src/shared/constants';
import useTrans from '@/src/shared/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/customization/ScrollRevealWrapper'), { ssr: false });
type Props = {
  member: IBaseResponse<IMember>;
};
const DetailRanking = ({ member }: Props) => {
  const {trans} = useTrans()
  const { query } = useRouter();
  const { data: tournamentSummary, tableConfig, getFieldValueOnSearchParam } = useGetListTournamentSummary(query && Number(query.id));
  if (!member || !tournamentSummary) return <React.Fragment></React.Fragment>;
  return (
    <React.Fragment>
      <Head>
        <title>{trans.rank.titleDetail}</title>
        <meta name='description' content={trans.rank.titleDetail} />
        <meta name='keywords' content='Golf Achievement' />
      </Head>
      <Breadcrumb title={trans.rank.breadcrumb} url={URL_SYSTEMS.RANK} />
      <ScrollRevealWrapper>
        <InformationCardDetailRank data={member.data} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <TableDetailRank
          tournamentSummary={tournamentSummary?.content || []}
          tableConfig={tableConfig}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const responseMember = await fetch(`https://vjgr.com.vn:8443/api/members/${id}`);
  const member = await responseMember.json();
  return {
    props: {
      member,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
DetailRanking.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DetailRanking;
