import Image from 'next/image';
import Link from 'next/link';

import { FramerMotion } from '../common/framer/FramerMotion';
import type { IFaqProps } from '../faq/Faq';
import { Faq } from '../faq/Faq';
import { Section } from '../layout/section/Section';
import { SectionWrap } from '../layout/section/SectionWrap';

const Main = ({ faqData }: IFaqProps) => {
  return (
    <>
      <SectionWrap className="main">
        <Section className="w-full max-lg:px-12 max-sm:px-4">
          <FramerMotion>
            <h3 className="break-keep text-3xl font-medium leading-normal text-white max-sm:text-center md:text-4xl lg:text-5xl">
              온라인 전자동 판매 <br />
              <strong className="text-[#554dde]">Gopher</strong> system
            </h3>
          </FramerMotion>
          <FramerMotion delay={0.4}>
            <p className="mt-3 text-lg leading-normal text-white max-sm:text-center md:text-xl">남녀노소 누구나 전문 이커머스 셀러</p>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <button
              type="button"
              className="mt-8 flex min-w-[200px] items-center justify-between rounded-2xl bg-[#16194f] px-7 py-3 text-white transition-colors hover:bg-black max-md:text-sm max-sm:mx-auto md:mt-16 lg:mt-28"
            >
              시스템 등록
              <i className="btn-arrow pointer-events-none ml-1"></i>
            </button>
          </FramerMotion>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-5">
          <FramerMotion delay={0.4}>
            <div>
              <h3 className="break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:text-center md:text-4xl lg:text-5xl">
                간편 카드 등록으로 <br className="max-lg:hidden" />
                모든 Selling 자동화
              </h3>
              <p className="text-md mt-3 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:text-xl">
                상품 소싱부터 등록까지.
                <br />
                간편한 카드 등록으로
                <br className="max-lg:hidden" />
                자동 매출 성과를 경험하세요.
              </p>
            </div>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <Image src={`/assets/images/landing_card.jpg`} alt={'Sukhbir Mashey'} width={463} height={268} />
          </FramerMotion>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex items-start justify-between max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:px-10 max-sm:px-4">
          <FramerMotion delay={0.4}>
            <div className="graph_wrap flex w-full shrink-0 flex-wrap md:max-w-[550px] lg:max-w-[440px]">
              <div className="w-full rounded-3xl bg-gradient-to-b from-[#e6edff] to-[#edf3fe] px-4 py-5 sm:w-[calc(50%-9px)] lg:basis-[211px]">
                <strong className="pl-1 font-normal">매출</strong>
                <p className="mt-3 text-4xl font-bold text-[#554dde]">₩560,000</p>
              </div>
              <div className="w-full rounded-3xl bg-gradient-to-b from-[#e6edff] to-[#edf3fe] px-4 py-5 max-sm:mt-[18px] sm:ml-[18px] sm:w-[calc(50%-9px)] lg:basis-[211px]">
                <strong className="font-norma; pl-1">광고 집행 비용</strong>
                <p className="mt-3 text-4xl font-bold text-[#f44e77]">₩230,000</p>
              </div>
              <div className="mt-[18px] w-full rounded-3xl bg-gradient-to-b from-[#e6edff] to-[#edf3fe] p-3 py-4">그래프</div>
            </div>
          </FramerMotion>
          <div>
            <FramerMotion delay={0.4}>
              <h3 className="break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:text-center md:text-4xl lg:text-5xl">
                대시보드로 <br className="max-lg:hidden" />
                매출 성과를 <br className="max-lg:hidden" />
                한눈에!
              </h3>
            </FramerMotion>
            <FramerMotion delay={0.8}>
              <p className="text-md mt-3 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:text-xl">
                대시보드를 통해 흩어진 정보를 한눈에 볼 수
                <br className="max-lg:hidden" />
                있도록 하여, 업무 효율을 극대화
              </p>
            </FramerMotion>
            <FramerMotion delay={1}>
              <button
                type="button"
                className="mt-8 flex min-w-[200px] items-center justify-between rounded-2xl bg-[#16194f] px-7 py-3 text-white transition-colors hover:bg-black max-lg:mx-auto max-md:text-sm md:mt-16"
              >
                대시보드 체험하기
                <i className="btn-arrow pointer-events-none ml-1"></i>
              </button>
            </FramerMotion>
          </div>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex items-center justify-between max-lg:flex-col max-lg:gap-5">
          <FramerMotion delay={0.5}>
            <div className="shrink-0 lg:mr-20">
              <h3 className="break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:text-center md:text-4xl  lg:text-5xl">
                상시 대기 <br className="max-lg:hidden" />
                고객 멘토링 시스템
              </h3>
              <p className="text-md mt-3 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:text-xl">
                Gopher 전문 고객 관리 Team이
                <br className="max-lg:hidden" />
                판매 관리의 모든 업무를 지원합니다.
                <br className="max-lg:hidden" />
                온라인 판매의 길! 어렵지 않습니다.
              </p>
              <div className="mt-3 flex items-center max-lg:justify-center lg:pr-24">
                <Image src={`/assets/images/landing_mentoring_members.png`} alt={'상시 대기 고객 멘토링 시스템, 고퍼소프트'} width={214} height={72} className="pl-3" />
                <span className="text-md ml-4 shrink-0 text-[#6a6d9e]">+10</span>
              </div>
            </div>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <Image src={`/assets/images/landing_mentoring_bg.png`} alt={'상시 대기 고객 멘토링 시스템, Gopher Soft, 고퍼소프트'} width={450} height={397} />
          </FramerMotion>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex justify-between max-lg:flex-col max-lg:gap-5">
          <FramerMotion>
            <div className="max-lg:mx-auto max-lg:max-w-[540px]">
              <Image src={`/assets/images/landing_copyright.png`} alt={'지식 재산권 이슈 해결, Gopher Soft, 고퍼소프트'} width={842} height={722} />
            </div>
          </FramerMotion>
          <div className="shrink-0">
            <FramerMotion delay={0.4}>
              <h3 className="mt-8 break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:text-center md:text-4xl lg:ml-[-10rem] lg:mt-[-1rem] lg:text-5xl">
                지식 재산권 이슈 <br className="max-lg:hidden" />
                Market-Saver
              </h3>
            </FramerMotion>
            <FramerMotion delay={0.6}>
              <p className="mt-2 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:ml-5 lg:mt-6 lg:text-xl">
                업계 최고 성능 지식 재산권 침해 방지 시스템.
                <br />
                30초로 500개의 상품을 무료로 진단!
              </p>
            </FramerMotion>
            <FramerMotion delay={0.8}>
              <button
                type="button"
                className="mt-8 flex min-w-[200px] items-center justify-between rounded-2xl bg-[#16194f] px-7 py-3 text-white transition-colors hover:bg-black max-lg:mx-auto max-md:text-sm lg:ml-5 lg:mt-3"
              >
                혜택 이용하기
                <i className="btn-arrow pointer-events-none ml-1"></i>
              </button>
            </FramerMotion>
          </div>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex flex-col items-center pt-10 lg:pt-56">
          <FramerMotion delay={0.2}>
            <Image src={`/assets/images/landing_price.png`} alt={'파격적인 서비스, 합리적인 가격, Gopher Soft, 고퍼소프트'} width={583} height={327} />
          </FramerMotion>
          <FramerMotion delay={0.4}>
            <h3 className="mt-3 break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:mt-8 max-lg:text-center lg:text-4xl">
              파격적인 서비스, <strong className="text-[#f44e77]">합리적인 가격</strong>
            </h3>
          </FramerMotion>
          <FramerMotion delay={0.6}>
            <p className="mt-4 break-keep leading-normal text-[#16194f] max-lg:text-center lg:text-xl">기본 요금제부터 시작하여 성장에 따라 프리미엄으로 전환</p>
          </FramerMotion>

          <ol className="mt-16 flex gap-[4rem] max-lg:flex-col lg:mt-24">
            <li className="item">
              <FramerMotion delay={0.4}>
                <p className="text-2xl font-light lg:text-3xl">기본</p>
                <p className="pt-5 text-4xl font-light lg:pt-12 lg:text-5xl">₩50,000/m</p>
                <p className="pt-5 text-center font-light leading-6 text-[#7b7eaa] lg:px-10 lg:pt-10">Manage your business with a simple and efficient account</p>
                <Link href="/" className="my-8 justify-center rounded-2xl border border-solid border-[#16194f] px-8 py-3 transition-colors hover:bg-[#16194f] hover:text-white">
                  Get Started
                </Link>
                <Image src={`/assets/images/landing_card.jpg`} alt={'Sukhbir Mashey'} width={463} height={268} />
                <ul className="mt-5">
                  <li className="list">10 free local transfer</li>
                  <li className="list">Multi-user access</li>
                  <li className="list">PrePaid debit cards</li>
                  <li className="list">Virtual cards</li>
                  <li className="list">Priority 24/7 support</li>
                  <li className="list">Exchange 24 currencies</li>
                  <li className="list">Free payment to other Draft accounts</li>
                </ul>
              </FramerMotion>
            </li>
            <li className="item">
              <FramerMotion delay={0.8}>
                <p className="text-2xl font-light lg:text-3xl">프리미엄</p>
                <p className="pt-5 text-4xl font-light lg:pt-12 lg:text-5xl">₩250,000/m</p>
                <p className="pt-5 text-center font-light leading-6 text-[#7b7eaa] lg:px-10 lg:pt-10">Priority support and multi-user access to maximize your productivity</p>
                <Link href="/" className="my-8 justify-center rounded-2xl border border-solid border-[#16194f] px-8 py-3 transition-colors hover:bg-[#16194f] hover:text-white">
                  Get Started
                </Link>
                <Image src={`/assets/images/landing_card.jpg`} alt={'Sukhbir Mashey'} width={463} height={268} />
                <ul className="mt-5">
                  <li className="list">10 free local transfer</li>
                  <li className="list">Multi-user access</li>
                  <li className="list">PrePaid debit cards</li>
                  <li className="list">Virtual cards</li>
                  <li className="list">Priority 24/7 support</li>
                  <li className="list">Exchange 24 currencies</li>
                  <li className="list">Free payment to other Draft accounts</li>
                </ul>
              </FramerMotion>
            </li>
          </ol>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex flex-col items-center lg:pt-56">
          <FramerMotion>
            <h3 className="mt-3 break-keep text-3xl font-medium leading-tight text-[#554dde] max-lg:text-center lg:text-4xl">
              자주 <strong className="text-[#f44e77]">묻는 질문</strong>
            </h3>
          </FramerMotion>
          <FramerMotion delay={0.2}>
            <p className="mt-4 break-keep leading-normal text-[#16194f] max-lg:text-center lg:text-xl">Gopher 서비스 도웁 전 자주 문의하는 질문들입니다.</p>
          </FramerMotion>
          <Faq faqData={faqData} />
        </Section>
      </SectionWrap>
    </>
  );
};

export default Main;
