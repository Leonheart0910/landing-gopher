import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import Drawer from './Drawer';
import { Menu } from './Menu';
import * as S from './Navigation.styled';
import { UtilMenu } from './UtilMenu';

const Navigation = () => {
  return (
    <>
      <Drawer />
      <S.NavigationWrap className="fixed left-0 top-0 z-10 flex h-20 w-full items-center bg-white px-2 shadow-lg sm:h-24 sm:px-4 md:h-32">
        <S.Navigation className="align- mx-auto flex h-full w-full max-w-7xl items-center justify-between xl:justify-start">
          <Link href="/" className="max-w-[180px] shrink-0 pl-12 sm:max-w-[240px] sm:pl-16 md:max-w-full md:pl-24 xl:pl-0">
            <h1>
              <Image src={`/assets/images/logo.png`} alt={AppConfig.title!} width={249} height={55} priority />
            </h1>
          </Link>
          <Menu />
          <UtilMenu />
        </S.Navigation>
      </S.NavigationWrap>
    </>
  );
};

export { Navigation };
