import tw from 'tailwind-styled-components';

export interface ISIsDrawer {
  $isDrawer?: boolean;
}

interface ISNav extends ISIsDrawer {}
interface ISMenuList extends ISIsDrawer {}
interface ISMenu extends ISIsDrawer {}

const Nav = tw.nav<ISNav>`
  ${p => p.$isDrawer && 'py-2 text-xl'}
`;

const MenuList = tw.ul<ISMenuList>`
  ${p => p.$isDrawer && ''}
`;

const Menu = tw.li<ISMenu>`
  ${p => p.$isDrawer && ''}
`;

export { Menu, MenuList, Nav };
