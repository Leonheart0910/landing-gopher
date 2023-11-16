import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LiaEye, LiaEyeSlash } from 'react-icons/lia';

import { AppConfig } from '@/utils/AppConfig';

import { Button } from '../common/button/Button';
import { pageEffect } from '../common/framer/pageEffect';
import { Input } from '../common/input/Input';
import { SectionWrap } from '../layout/section/SectionWrap';

const Register = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={{ duration: 0.8 }} variants={pageEffect}>
      <SectionWrap className="register">
        <div className="mx-auto w-full max-w-[580px] bg-[rgba(255,255,255,.9)] p-5 sm:p-10">
          <Image src={`/assets/images/logo.png`} alt={AppConfig.title!} width={249} height={55} priority className="mx-auto sm:mx-0" />
          <div className="mt-10 flex flex-col items-center sm:mt-24">
            <h2 className="text-4xl font-bold sm:text-5xl">회원가입</h2>
            <p className="mt-3 leading-normal">가입을 위해 자주 사용하는 이메일 주소를 입력해주세요.</p>
          </div>
          <form action="" className="sm:px-10">
            <div className="mt-5 w-full sm:mt-20">
              <Input placeholder="이메일을 입력하세요." />
              <Input
                placeholder="영어 대/소문자, 숫자, 특수문자, 4~20자"
                type={isVisible ? 'text' : 'password'}
                className="mt-3"
                icon={isVisible ? <LiaEyeSlash onClick={changeVisible} /> : <LiaEye onClick={changeVisible} />}
              />
              <Input
                placeholder="비밀번호를 다시 한번 입력해주세요."
                type={isVisible ? 'text' : 'password'}
                className="mt-3"
                icon={isVisible ? <LiaEyeSlash onClick={changeVisible} /> : <LiaEye onClick={changeVisible} />}
              />
            </div>
            <Button type="submit" className="mt-4">
              동의하고 가입하기
            </Button>
            <p className="mt-6 text-center font-light leading-normal">
              본인은 만 14세 이상이며, &nbsp;
              <Link href="./register" className="inline-block font-light leading-normal text-[#7951f9] transition-transform hover:scale-105">
                서비스 이용약관
              </Link>
              , &nbsp;
              <Link href="./register" className="inline-block font-light leading-normal text-[#7951f9] transition-transform hover:scale-105">
                개인정보 처리방침
              </Link>
              &nbsp; 내용을 확인 하였으며, 동의합니다.
            </p>
          </form>
        </div>
      </SectionWrap>
    </motion.div>
  );
};

export default Register;
