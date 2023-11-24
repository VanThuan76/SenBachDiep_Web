import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/src/shared/components/ui/sheet';
import useTrans from '@/src/shared/hooks/useTrans';
import IconLogoLight from '@/src/shared/components/icons/IconLogoLight';
import ListMenu from './ListMenu';
import { menuPath } from '@/src/shared/constants/dump/common';
import SwitchLanguageMode from '@/src/shared/components/customization/SwitchLanguageMode';

const HambergerMenu = () => {
  const router = useRouter();
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='w-full bg-[#1B3864] text-white' side={'top'}>
          <div className='w-full h-full flex-col-between-start'>
            <div className='-mt-5 w-full grid grid-cols-3 justify-between items-center gap-5 cursor-pointer'>
              <IconLogoLight className='w-[120px] h-[40px]' color='#fff' onClick={() => router.push('/')} />
              <SwitchLanguageMode className='w-full flex justify-end items-end md:hidden' />
            </div>
            <div className='mt-5 w-full h-full flex-col-start gap-4'>
              <ListMenu menuPath={menuPath} className='!bottom-0 !-left-3 !w-[2px] !h-[25px]' />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HambergerMenu;
