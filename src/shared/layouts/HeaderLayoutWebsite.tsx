import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { menuPath } from '@/src/shared/constants/dump/common';
import IconLogoLight from '@/src/shared/components/icons/IconLogoLight';
import ListMenu from '@/src/shared/components/business/layout/header/ListMenu';
import HambergerMenu from '@/src/shared/components/business/layout/header/HambergerMenu';
import SwitchLanguageMode from '@/src/shared/components/customization/SwitchLanguageMode';

const HeaderLayoutWebsite = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.section
      initial={{ height: '100px' }}
      animate={{ height: isScrolled ? '80px' : '100px' }}
      transition={{ duration: 0.3 }}
      className={`w-full bg-[var(--main-color)] text-white top-0 z-50 flex-row-between-center gap-5 px-5 md:px-10 transition ${
        isScrolled
          ? 'sticky light:text-black border-b-[1px] border-opacity-50 border-black-300 inset-0 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out light:bg-[#876445]'
          : 'sticky bg-opacity-100 duration-500 ease-in-out'
      }`}
    >
      <div className='absolute flex-row-center gap-2'>
        <div className='w-full flex-row-center gap-5 cursor-pointer'>
          <IconLogoLight color='#fff' onClick={() => router.push('/')} />
        </div>
        <div className='min-w-[500px] ml-5 hidden lg:flex justify-center items-center gap-10 dark:text-white'>
          <ListMenu menuPath={menuPath} />
        </div>
      </div>
      <div className='absolute right-5 flex-row-center gap-2'>
        <div className='w-full flex-row-center gap-4'>
          {/* ///Options Menu */}
          <SwitchLanguageMode className='hidden md:block' />
          {/* <ThemeModeToggle className='hidden md:block' /> */}
          {/* ///Hamberger Menu */}
          <HambergerMenu />
        </div>
      </div>
    </motion.section>
  );
};

export default HeaderLayoutWebsite;
