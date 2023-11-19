import { styled } from 'styled-components';
import tw from 'tailwind-styled-components';

const Login = tw.div`
  relative max-xl:!min-h-screen flex items-center justify-center xl:block min-h-[calc(100vh-70px)]
`;

const LoginLeft = tw.div`
  relative w-full p-5 sm:p-10 py-14 bg-[rgba(255,255,255,.9)] max-w-[580px] xl:max-w-2xl xl:bg-transparent sm:px-10
`;

const CustomLoginRight = styled.div`
  background: url('/assets/images/login_bg.jpg') center center / cover;
`;

const LoginRight = tw(CustomLoginRight)`
  absolute right-0 top-0 h-full max-md:!bg-none w-full xl:w-[70%]
`;

export { Login, LoginLeft, LoginRight };
