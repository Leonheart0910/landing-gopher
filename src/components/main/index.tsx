import Image from 'next/image';

import { FramerMotion } from '../common/framer/FramerMotion';
import type { IFaqProps } from '../faq/Faq';
import { Faq } from '../faq/Faq';
import { Section } from '../layout/section/Section';
import { SectionWrap } from '../layout/section/SectionWrap';
import Button from './button/Button';
import Graph from './graph/Graph';
import * as S from './Main.styled';
import Paragraph from './paragraph/Paragraph';
import Price from './price/Price';
import Title from './title/Title';

const Main = ({ faqData }: IFaqProps) => {
  return (
    <>
      <S.Main>
        <Section className="w-full max-lg:px-12 max-sm:px-4">
          <FramerMotion>
            <Title className="text-white max-sm:text-center md:text-4xl lg:text-5xl">
              온라인 전자동 판매 <br />
              <strong className="text-[#554dde]">Gopher</strong> system
            </Title>
          </FramerMotion>
          <FramerMotion delay={0.4}>
            <p className="mt-3 text-lg leading-normal text-white max-sm:text-center md:text-xl">남녀노소 누구나 전문 이커머스 셀러</p>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <Button className="md:mt-16 lg:mt-28">
              시스템 등록
              <i className="btn-arrow pointer-events-none ml-1"></i>
            </Button>
          </FramerMotion>
        </Section>
      </S.Main>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-5">
          <FramerMotion delay={0.4}>
            <div>
              <Title className="text-[#554dde] max-lg:text-center md:text-4xl lg:text-5xl">
                간편 카드 등록으로 <br className="max-lg:hidden" />
                모든 Selling 자동화
              </Title>
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
          <div className="flex w-full shrink-0 flex-wrap md:max-w-[550px] lg:max-w-[440px]">
            <FramerMotion delay={0.4} className="w-full rounded-3xl bg-white px-4 py-5 sm:w-[calc(50%-9px)] lg:basis-[211px]">
              <strong className="pl-1 font-normal">매출</strong>
              <p className="mt-3 text-4xl font-bold text-[#554dde]">₩560,000</p>
            </FramerMotion>
            <FramerMotion delay={0.6} className="w-full rounded-3xl bg-white px-4 py-5 max-sm:mt-[18px] sm:ml-[18px] sm:w-[calc(50%-9px)] lg:basis-[211px]">
              <strong className="font-norma; pl-1">광고 집행 비용</strong>
              <p className="mt-3 text-4xl font-bold text-[#f44e77]">₩230,000</p>
            </FramerMotion>
            <FramerMotion delay={0.8} className="mt-[18px] w-full rounded-3xl bg-white p-3 py-4">
              <Graph />
            </FramerMotion>
          </div>
          <div>
            <FramerMotion delay={0.4}>
              <Title className="text-[#554dde] max-lg:text-center md:text-4xl lg:text-5xl">
                대시보드로 <br className="max-lg:hidden" />
                매출 성과를 <br className="max-lg:hidden" />
                한눈에!
              </Title>
            </FramerMotion>
            <FramerMotion delay={0.8}>
              <p className="text-md mt-3 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:text-xl">
                대시보드를 통해 흩어진 정보를 한눈에 볼 수
                <br className="max-lg:hidden" />
                있도록 하여, 업무 효율을 극대화
              </p>
            </FramerMotion>
            <FramerMotion delay={1}>
              <Button className="md:mt-16">
                대시보드 체험하기
                <i className="btn-arrow pointer-events-none ml-1"></i>
              </Button>
            </FramerMotion>
          </div>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex items-center justify-between max-lg:flex-col max-lg:gap-5">
          <FramerMotion delay={0.5}>
            <div className="shrink-0 lg:mr-20">
              <Title className="text-[#554dde] max-lg:text-center md:text-4xl lg:text-5xl">
                상시 대기 <br className="max-lg:hidden" />
                고객 멘토링 시스템
              </Title>
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
              <Title className="mt-8 text-[#554dde] max-lg:text-center lg:ml-[-10rem] lg:mt-[-1rem] lg:text-5xl">
                지식 재산권 이슈 <br className="max-lg:hidden" />
                Market-Saver
              </Title>
            </FramerMotion>
            <FramerMotion delay={0.6}>
              <p className="mt-2 break-keep leading-normal text-[#6a6d9e] max-lg:text-center lg:ml-5 lg:mt-6 lg:text-xl">
                업계 최고 성능 지식 재산권 침해 방지 시스템.
                <br />
                30초로 500개의 상품을 무료로 진단!
              </p>
            </FramerMotion>
            <FramerMotion delay={0.8}>
              <Button className="lg:ml-5 lg:mt-3">
                혜택 이용하기
                <i className="btn-arrow pointer-events-none ml-1"></i>
              </Button>
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
            <Title className="mt-3 text-[#554dde] max-lg:mt-8 max-lg:text-center lg:text-4xl">
              파격적인 서비스, <strong className="text-[#f44e77]">합리적인 가격</strong>
            </Title>
          </FramerMotion>
          <FramerMotion delay={0.6}>
            <Paragraph>기본 요금제부터 시작하여 성장에 따라 프리미엄으로 전환</Paragraph>
          </FramerMotion>
          <Price />
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#f2f6ff]">
        <Section className="flex flex-col items-center lg:pt-56">
          <FramerMotion>
            <Title className="mt-3 text-[#554dde] max-lg:mt-8 max-lg:text-center lg:text-4xl">
              자주 <strong className="text-[#f44e77]">묻는 질문</strong>
            </Title>
          </FramerMotion>
          <FramerMotion delay={0.2}>
            <Paragraph>Gopher 서비스 도웁 전 자주 문의하는 질문들입니다.</Paragraph>
          </FramerMotion>
          <Faq faqData={faqData} />
        </Section>
      </SectionWrap>
    </>
  );
};

export default Main;
