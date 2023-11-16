import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LiaEye, LiaEyeSlash } from 'react-icons/lia';

import { AppConfig } from '@/utils/AppConfig';

import { Button } from '../common/button/Button';
import { Checkbox } from '../common/checkbox/Checkbox';
import { pageEffect } from '../common/framer/pageEffect';
import { Input } from '../common/input/Input';
import { SectionWrap } from '../layout/section/SectionWrap';

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const checkHandler = (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log(`check상태`, checked);
  };

  const changeVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={{ duration: 0.8 }} variants={pageEffect}>
      <SectionWrap className="min-h-screen">
        <div className="hidden h-[70px] border-b border-solid border-gray-200 xl:block"></div>
        <div className="login">
          <div className="login_right"></div>
          <div className="login_left">
            <Image src={`/assets/images/logo.png`} alt={AppConfig.title!} width={249} height={55} priority className="mx-auto sm:mx-0" />
            <div className="mt-10 flex flex-col items-center sm:mt-24">
              <h2 className="text-4xl font-bold sm:text-5xl">로그인</h2>
              <p className="mt-3 leading-normal">로그인 후 서비스를 사용할 수 있습니다.</p>
            </div>
            <form action="" className="sm:px-10">
              <div className="mt-5 w-full sm:mt-20">
                <Input placeholder="아이디" />
                <Input
                  placeholder="비밀번호"
                  type={isVisible ? 'text' : 'password'}
                  className="mt-3"
                  icon={isVisible ? <LiaEyeSlash onClick={changeVisible} /> : <LiaEye onClick={changeVisible} />}
                />
              </div>
              {/* 에러 상태의 Input */}
              {/* <Input placeholder="Error input" error /> */}

              {/* 비활성화 상태의 Input */}
              {/* <Input placeholder="Disabled input" disabled /> */}
              <div className="mt-3 flex w-full justify-between">
                <Checkbox onChange={checked => checkHandler(checked)} label="아이디 저장" />
                <Link href="/" className="block text-sm font-light leading-normal text-[#7951f9] transition-transform hover:scale-105">
                  비밀번호를 잊으셨습니까?
                </Link>
              </div>
              <Button type="submit">로그인</Button>
              <p className="mt-6 text-center font-light leading-normal">
                아직 회원이 아니신가요?&nbsp;
                <Link href="./register" className="inline-block font-light leading-normal text-[#7951f9] transition-transform hover:scale-105">
                  회원가입
                </Link>
              </p>
            </form>
          </div>
        </div>
      </SectionWrap>
    </motion.div>
  );
};

export default Login;
