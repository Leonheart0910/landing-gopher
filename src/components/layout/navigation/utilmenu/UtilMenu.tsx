import Link from 'next/link';

import type { IMenuItem } from '@/utils/Menu';
import { MENU } from '@/utils/Menu';

import * as S from './UtilMenu.styled';

interface IMenu {
  isDrawer?: boolean;
}

const UtilMenu = ({ isDrawer = false }: IMenu) => {
  return (
    <S.UtilMenuList $isDrawer={isDrawer} className="flex h-full shrink-0 px-2 md:px-4">
      {Object.keys(MENU.UTIL).map((utilKey, index) => {
        const utilItem: IMenuItem = MENU.UTIL[utilKey]!;
        return (
          <S.UtilMenu key={utilItem.path} className="h-full" $isBeforeBar={index !== 0}>
            <Link
              href={`/${utilItem.path}`}
              className={`flex h-full items-center px-1 text-sm font-bold text-gray-600 transition-transform hover:scale-110 sm:text-xl md:px-3 xl:text-lg`}
            >
              {utilItem.name}
            </Link>
          </S.UtilMenu>
        );
      })}
    </S.UtilMenuList>
  );
};

export { UtilMenu };
