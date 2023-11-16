import Link from 'next/link';

import type { IMenuItem } from '@/utils/Menu';
import { MENU } from '@/utils/Menu';

import * as S from './Menu.styled';

interface IMenu {
  isDrawer?: boolean;
}

const Menu = ({ isDrawer = false }: IMenu) => {
  return (
    <S.Nav $isDrawer={isDrawer} className={`h-full w-full ${!isDrawer && 'hidden px-20 xl:block '}`}>
      <S.MenuList className={`w-full justify-between ${isDrawer ? '' : 'flex h-full'}`}>
        {Object.keys(MENU.NAV)?.map(menuKey => {
          const menuItem: IMenuItem = MENU.NAV[menuKey]!;
          return (
            <S.Menu key={menuItem.path} className={`h-full ${isDrawer && 'flex justify-center py-3'}`}>
              <Link href={`/${menuItem.path}`} className={`flex h-full items-center text-2xl font-bold text-gray-600 transition-transform hover:scale-110`}>
                {menuItem.name}
              </Link>
            </S.Menu>
          );
        })}
      </S.MenuList>
    </S.Nav>
  );
};

export { Menu };
