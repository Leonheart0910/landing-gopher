export interface IMenuItem {
  readonly path: string;
  readonly name: string;
}

interface IMenuSection<T> {
  readonly [key: string]: T;
}

interface IMenu {
  readonly NAV: IMenuSection<IMenuItem>;
  readonly UTIL: IMenuSection<IMenuItem>;
}

const MENU: IMenu = {
  NAV: {
    introduce: { path: 'introduce', name: 'System 소개' },
    manual: { path: 'manual', name: '사용 메뉴얼' },
    price: { path: 'price', name: '서비스 비용' },
  },
  UTIL: {
    login: { path: 'member/login', name: '로그인' },
    register: { path: 'member/register', name: '회원가입' },
  },
};

export { MENU };
