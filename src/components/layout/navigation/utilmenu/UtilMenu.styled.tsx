import tw from 'tailwind-styled-components';

import type { ISIsDrawer } from '../menu/Menu.styled';

interface IUtilMenuList extends ISIsDrawer {}
interface IUtilMenu extends ISIsDrawer {
  $isBeforeBar?: boolean;
}

const UtilMenuList = tw.ul<IUtilMenuList>`
  ${p => p.$isDrawer && 'py-2 text-xl'}
`;

const UtilMenu = tw.li<IUtilMenu>`
  ${p => p.$isDrawer && 'py-2 text-xl'}
  ${p => p.$isBeforeBar && 'separator'}
`;

export { UtilMenu, UtilMenuList };
