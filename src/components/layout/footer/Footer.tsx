import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import { Section } from '../section/Section';
import { SectionWrap } from '../section/SectionWrap';

const Footer = () => {
  return (
    <footer className="md:h-[300px]">
      <SectionWrap className={`h-full bg-gray-300`}>
        <Section title={`${AppConfig.title} 사이트맵`} yPadding="py-12">
          <div className="flex flex-col items-center justify-between md:flex-row md:items-stretch">
            <div className="w-full px-3">
              <h2 className="max-w-[200px]">
                <Image src={`/assets/images/logo.png`} alt={`${AppConfig.title!} 하단 내용`} width={249} height={55} priority />
              </h2>
              <address className="mt-3 not-italic leading-7 text-[#6a6d9e]">
                <p>(주)고퍼소프트 | 대표: 김윤석</p>
                <p>사업자등록번호:761-81-03149 | 통신판매업 신고번호: 2023-부산해운대-1122</p>
                <p>부산 해운대구 센텀중앙로 78 센텀그린타워 3층 303호</p>
                <p>대표번호 : 010-8469-6183 | 사업 문의 : gopher0519@gmail.com</p>
              </address>
              <ul className="mt-2 flex text-sm text-[#6f42ce]">
                <li>
                  <Link href="/" className="block transition-transform hover:scale-105">
                    개인정보 처리방침
                  </Link>
                </li>
                <li className="ml-3">
                  <Link href="/" className="block transition-transform hover:scale-105">
                    이용 약관
                  </Link>
                </li>
              </ul>
            </div>
            {/* <ul className="mt-2 flex w-full flex-wrap items-center justify-between px-3 md:max-w-[350px]">
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Team</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Services</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Terms of use</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Press</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Projects</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Fees</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Affiliate</Link>
              </li>
              <li className="mt-3 basis-1/3 text-[#292d5f] transition-transform hover:scale-105">
                <Link href="/">Contact us</Link>
              </li>
            </ul> */}
          </div>
        </Section>
      </SectionWrap>
    </footer>
  );
};

export { Footer };
