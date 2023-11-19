import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { Menu } from '../menu/Menu';
import * as S from './Drawer.styled';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} className="xl:hidden" />}

      <S.Drawer $isOpen={isOpen} className="flex max-w-[80%] xl:hidden">
        <Menu isDrawer={true} />
      </S.Drawer>

      <S.Hamburger onClick={() => setIsOpen(!isOpen)} className="block xl:hidden">
        <RxHamburgerMenu />
      </S.Hamburger>
    </>
  );
};

export default Drawer;
