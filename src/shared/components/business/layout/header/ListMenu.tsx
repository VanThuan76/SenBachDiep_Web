import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTrans from '@/src/shared/hooks/useTrans';
import { IMenuPath } from '@/src/shared/constants/types/common';
import DropdownMenuCustomize from '@/src/shared/components/customization/DropdownMenu';

type Props = {
  menuPath: IMenuPath[];
  className?: string;
};
const ListMenu = ({ menuPath, className }: Props) => {
  const router = useRouter();
  const { trans } = useTrans();
  return (
    <React.Fragment>
      {menuPath.map((item, idx) => {
        const key = item.path as keyof typeof trans.common.menu;
        const value = trans.common.menu[key];
        return (
          <div key={idx}>
            {item.children ? (
              <DropdownMenuCustomize title={value} menuItem={item.children}/>
            ) : (
              <Link href={`/${item.path}`}>
                <div className='relative w-full'>
                  <div className='w-full flex-row-between-center gap-2'>
                    <p>{value}</p>
                  </div>
                  {router.asPath.split('/')[1] === item.path ? (
                    <motion.div
                      className={`absolute bottom-[-20px] left-0 right-0 h-[4px] bg-white rounded-[8px] z-0 ${className}`}
                      layoutId='underline'
                    />
                  ) : null}
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ListMenu;
