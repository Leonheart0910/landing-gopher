import Image from 'next/image';
import Link from 'next/link';

import type { ICarouselData } from '../common/carousel/Carousel';
import Carousel from '../common/carousel/Carousel';
import { FramerMotion } from '../common/framer/FramerMotion';
import { Section } from '../layout/section/Section';
import { SectionWrap } from '../layout/section/SectionWrap';
import * as S from './Introduce.styled';

const carouselData: ICarouselData[] = [
  {
    image: '/assets/images/introduce_review_1.png',
    title: 'KIM.D.H',
    subTitle: 'BETA-SERVICE 유저',
    description:
      '온라인 판매에 대한 이해도가 낮아도\n사용할 수 있고, 시작 초반부터 매출이 나오는 게 신기했습니다.\n간편하게 사용할 수 있는 구조라 온라인 셀러가 되고 싶은 분들께 제격인 것 같습니다.',
  },
  {
    image: '/assets/images/introduce_review_1.png',
    title: 'PARK.J.M',
    subTitle: 'BETA-SERVICE 유저',
    description:
      '온라인 판매에 대한 이해도가 낮아도\n사용할 수 있고, 시작 초반부터 매출이 나오는 게 신기했습니다.\n간편하게 사용할 수 있는 구조라 온라인 셀러가 되고 싶은 분들께 제격인 것 같습니다.',
  },
  {
    image: '/assets/images/introduce_review_1.png',
    title: 'LIM.H.B',
    subTitle: 'BETA-SERVICE 유저',
    description:
      '온라인 판매에 대한 이해도가 낮아도\n사용할 수 있고, 시작 초반부터 매출이 나오는 게 신기했습니다.\n간편하게 사용할 수 있는 구조라 온라인 셀러가 되고 싶은 분들께 제격인 것 같습니다.',
  },
];

const Introduce = () => {
  return (
    <>
      <S.Introduce className="overflow-hidden">
        <S.IntroduceBg />
        <Section className="relative z-0 flex items-center justify-between" yPadding="py-16">
          <S.Box>
            <S.BoxBg />
            <FramerMotion delay={0.4}>
              <h3 className="break-keep text-3xl font-medium leading-normal text-[#5956e9] max-lg:text-center sm:text-4xl lg:text-5xl">
                이커머스 업무 툴에&nbsp;
                <br className="max-lg:hidden" />
                AI를 더하다
              </h3>
            </FramerMotion>
            <FramerMotion delay={0.8}>
              <p className="mt-3 break-keep leading-normal text-[#6a6d9e] max-lg:text-center">
                남녀노소 누구나 클릭 한번으로
                <br className="max-lg:hidden" />
                온라인 판매의 모든 업무를 지원합니다.
              </p>
            </FramerMotion>
            <FramerMotion delay={1.3}>
              <p className="text-md mt-10 pb-3 leading-normal max-lg:text-center lg:mt-20 lg:text-2xl">
                SYSTEM BY
                <br className="max-lg:hidden" />
                GOPHER SOFT
              </p>
            </FramerMotion>
          </S.Box>
          <Image src={`/assets/images/introduce_mobile.png`} alt="" width={562} height={710} className="-mr-52 max-lg:hidden xl:-mr-72" />
        </Section>
      </S.Introduce>
      <SectionWrap className="bg-white">
        <Section yPadding="py-20">
          <FramerMotion delay={0.3}>
            <h3 className="text-center text-2xl font-bold leading-normal text-black">GOPHER SYSTEM 소개</h3>
          </FramerMotion>
          <FramerMotion delay={0.6}>
            <p className="mt-3 text-center font-light leading-normal">
              Gopher 하나로 충분합니다.
              <br />
              클릭 한번으로 셀러의 모든 업무를 처리합니다.
            </p>
          </FramerMotion>
          <div className="my-10 flex items-end justify-between max-lg:flex-col lg:my-20">
            <FramerMotion delay={0.4}>
              <div className="mb-10 max-lg:mx-auto max-lg:max-w-[500px]">
                <Image src={`/assets/images/introduce_laptop.png`} alt="" width={710} height={537} />
              </div>
            </FramerMotion>
            <ul className="shrink-0 lg:ml-2 lg:w-[53%]">
              <li className="mb-5 border border-solid border-gray-100 p-3 shadow-md sm:p-5">
                <FramerMotion delay={0.2} className="flex max-sm:flex-col">
                  <S.Circle>
                    <S.CheckIcon />
                  </S.Circle>
                  <div className="sm:pl-3">
                    <strong className="block break-keep text-xl font-bold leading-normal max-sm:text-center">자동 상품 소싱</strong>
                    <div className="mt-2 break-keep leading-normal text-[#6c6c72] max-sm:text-center">
                      프로 셀러들의 판매 프로세스를 학습한 AI 상품 추천 기술로, 매력적인 상품을 자동으로 소싱해줍니다.
                    </div>
                  </div>
                </FramerMotion>
              </li>
              <li className="mb-5 border border-solid border-gray-100 p-3 shadow-md sm:p-5">
                <FramerMotion delay={0.4} className="flex max-sm:flex-col">
                  <S.Circle>
                    <S.CheckIcon />
                  </S.Circle>
                  <div className="sm:pl-3">
                    <strong className="block break-keep text-xl font-bold leading-normal max-sm:text-center">자동 상세페이지 제작 &amp; 상품 등록</strong>
                    <div className="mt-2 break-keep leading-normal text-[#6c6c72] max-sm:text-center">
                      외국어 이미지는 깔끔하게 번역하여 상세페이지를 제작합니다. 이 후, 환율을 계산한 최적의 마진으로 오픈마켓에 상품을 등록해줍니다.
                    </div>
                  </div>
                </FramerMotion>
              </li>
              <li className="mb-5 border border-solid border-gray-100 p-3 shadow-md sm:p-5">
                <FramerMotion delay={0.6} className="flex max-sm:flex-col">
                  <S.Circle>
                    <S.CheckIcon />
                  </S.Circle>
                  <div className="sm:pl-3">
                    <strong className="block break-keep text-xl font-bold leading-normal max-sm:text-center">자동 결제</strong>
                    <div className="mt-2 break-keep leading-normal text-[#6c6c72] max-sm:text-center">
                      판매 된 상품은 자동으로 결재해줍니다. <br className="max-lg:hidden" />
                      대시보드로 순수익까지 계산한 판매 현황을 간편히 확인하세요.
                    </div>
                  </div>
                </FramerMotion>
              </li>
            </ul>
          </div>
        </Section>
      </SectionWrap>
      <SectionWrap className="bg-[#5956e9]">
        <Section className="text-center">
          <FramerMotion>
            <h3 className="break-keep text-2xl font-bold text-white lg:text-3xl">비즈니스를 고려한 대시보드</h3>
            <p className="mt-5 break-keep leading-normal text-white">
              저희 서비스를 사용하는 고객은 대비소브들 통해
              <br className="max-lg:hidden" />
              진행상황, 판매현황, 결산내역만 확인하면 됩니다.
            </p>
          </FramerMotion>
        </Section>
      </SectionWrap>
      <SectionWrap>
        <div className="flex justify-center bg-[#f2f6ff]">
          <Image src={`/assets/images/introduce_bg_chart.jpg`} alt="" width={1440} height={1026} />
        </div>
      </SectionWrap>
      <S.Introduce>
        <S.IntroduceBg />
        <Section className="relative">
          <h3 className="sr-only">고퍼소퍼트, 대시보드</h3>
          <ul className="flex justify-between max-md:mt-4 max-md:flex-col">
            <li className="mx-auto max-md:mb-14 max-md:max-w-[300px] md:basis-1/3">
              <FramerMotion delay={0.1} className="flex flex-col items-center">
                <i className="flex h-[56px] w-[56px]">
                  <Image src={`/assets/images/icon_eye.png`} alt="" width={56} height={56} />
                </i>
                <strong className="mt-3 text-xl text-white">직관적인 UI</strong>
                <p className="mt-3 break-keep text-center text-sm font-light leading-normal text-white lg:px-4">
                  복잡하고 어려운 UI가 아닙니다. <br className="max-lg:hidden" />
                  누구나 쉽고 간편히 사용할 수 있습니다.
                </p>
              </FramerMotion>
            </li>
            <li className="mx-auto max-md:mb-14 max-md:max-w-[300px] md:basis-1/3">
              <FramerMotion delay={0.5} className="flex flex-col items-center">
                <i className="flex h-[56px] w-[56px]">
                  <Image src={`/assets/images/icon_dashboard.png`} alt="" width={56} height={56} />
                </i>
                <strong className="mt-3 text-xl text-white">대시보드 컨설팅</strong>
                <p className="mt-3 break-keep text-center text-sm font-light leading-normal text-white lg:px-4">
                  고객관리 팀이 항시 대기하고 있습니다.
                  <br className="max-lg:hidden" />
                  사용에 궁금한 점이 있다면 문의하세요.
                </p>
              </FramerMotion>
            </li>
            <li className="mx-auto max-md:mb-14 max-md:max-w-[300px] md:basis-1/3">
              <FramerMotion delay={0.8} className="flex flex-col items-center">
                <i className="flex h-[56px] w-[56px]">
                  <Image src={`/assets/images/icon_customizing.png`} alt="" width={56} height={56} />
                </i>
                <strong className="mt-3 text-xl text-white">직관적인 UI</strong>
                <p className="mt-3 break-keep text-center text-sm font-light leading-normal text-white lg:px-4">
                  고객 스타일에 맞게 커스터마이징이 가능하게 구현했습니다. 자신만의 대시보드를 꾸며보세요.
                </p>
              </FramerMotion>
            </li>
          </ul>
        </Section>
      </S.Introduce>
      <SectionWrap>
        <Section yPadding="py-20 lg:py-60">
          <FramerMotion delay={0.5}>
            <h3 className="break-keep text-center text-2xl font-bold leading-normal text-black">우리는 기술을 개발합니다.</h3>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <p className="mt-3 break-keep text-center font-light leading-normal">
              단순하고 정제된 기술은 배척합니다.
              <br />
              온라인 판매 트렌드는 항상 변화합니다.
              <br />
              <br />
              현직 프로셀러들의 판매 알고리즘을 주기적으로 적용시켜,
              <br className="max-sm:hidden" />
              최신 시장 트렌드에 맞는 가장 효율적인 프로세스로 지속적으로 변화되고 있습니다.
            </p>
          </FramerMotion>
          <Image src={`/assets/images/introduce_bg_tech.jpg`} alt="" width={1180} height={663} className="mt-8" />
        </Section>
      </SectionWrap>
      <S.Introduce className="lg:pb-32">
        <S.IntroduceBg />
        <Section className="relative text-center">
          <FramerMotion delay={0.4}>
            <h3 className="break-keep text-2xl font-bold leading-normal text-white lg:text-3xl">서비스를 위한 가장 효율적인 인력으로 구성</h3>
          </FramerMotion>
          <FramerMotion delay={0.8}>
            <p className="mt-3 break-keep leading-normal text-white lg:mt-5">
              전자동 판매는, 서비스의 의존도가 높습니다.
              <br />
              그렇기에 Gopher Soft 팀은 완벽한 서비스 개발을 목표로 하고 있습니다.
            </p>
          </FramerMotion>
          <div className="flex w-full justify-center max-lg:mt-10 lg:absolute lg:-bottom-72 lg:left-1/2 lg:-translate-x-1/2">
            <Image src={`/assets/images/introduce_video_bg.png`} alt="" width="770" height="320" />
          </div>
        </Section>
      </S.Introduce>
      <SectionWrap className="bg-[#f2f6ff] lg:pt-48">
        <Section className="relative text-center">
          <FramerMotion delay={0.1}>
            <h3 className="break-keep text-2xl font-bold lg:text-3xl">서비스 개발 팀</h3>
          </FramerMotion>
          <FramerMotion delay={0.4}>
            <p className="mx-auto mt-5 break-keep leading-normal">
              개발 핵심 인력 6인 중, 5인 온라인 판매 &amp; 중국 업무 경험이 있습니다.
              <br />
              &nbsp; 경험을 바탕으로 우수한 서비스를 개발하고 있습니다.
            </p>
          </FramerMotion>
          <ul className="mt-14 flex justify-between max-lg:flex-col lg:mt-24">
            <S.Team>
              <S.TeamList delay={0.2}>
                <svg width="220" height="226">
                  <circle cx="110" cy="113" r="108" stroke="#6b68eb" strokeLinecap="round" strokeWidth="4" strokeDasharray="90" fill="none" />
                  <image href="/assets/images/introduce_profile_kei.png" x="7" y="7" width="206" height="212" />
                </svg>
                <strong className="mt-10 text-4xl font-bold">KEI</strong>
                <p className="mt-5 h-24 text-left text-xl font-medium leading-normal text-gray-600">CEO</p>
                <S.ProfileHistory>
                  <S.ProfileHistoryList>3회 창업</S.ProfileHistoryList>
                  <S.ProfileHistoryList>(전)KINGRAIN 해외실무대표</S.ProfileHistoryList>
                  <S.ProfileHistoryList>11년 중국 유학/업무 경험</S.ProfileHistoryList>
                </S.ProfileHistory>
              </S.TeamList>
            </S.Team>
            <S.Team>
              <S.TeamList delay={0.5}>
                <svg width="220" height="226">
                  <circle cx="110" cy="113" r="108" stroke="#6b68eb" strokeLinecap="round" strokeWidth="4" strokeDasharray="90" fill="none" />
                  <image href="/assets/images/introduce_profile_john.png" x="7" y="7" width="206" height="212" />
                </svg>
                <strong className="mt-10 text-4xl font-bold">JOHN</strong>
                <p className="mt-5 h-24 text-left text-xl font-medium leading-normal text-gray-600">
                  UI/UX 디자이너 <br />
                  판매 프로세스 개발
                </p>
                <S.ProfileHistory>
                  <S.ProfileHistoryList>5년 온라인 판매</S.ProfileHistoryList>
                  <S.ProfileHistoryList>2년 온라인 판매 강의</S.ProfileHistoryList>
                  <S.ProfileHistoryList>7년 중국 유학/업무 경험</S.ProfileHistoryList>
                </S.ProfileHistory>
              </S.TeamList>
            </S.Team>
            <S.Team>
              <S.TeamList delay={0.8}>
                <svg width="220" height="226">
                  <circle cx="110" cy="113" r="108" stroke="#6b68eb" strokeLinecap="round" strokeWidth="4" strokeDasharray="90" fill="none" />
                  <image href="/assets/images/introduce_profile_leon.png" x="7" y="7" width="206" height="212" />
                </svg>
                <strong className="mt-10 text-4xl font-bold">LEON</strong>
                <p className="mt-5 h-24 text-left text-xl font-medium leading-normal text-gray-600">GOPHER AI 개발</p>
                <S.ProfileHistory>
                  <S.ProfileHistoryList>5년 S/W 개발</S.ProfileHistoryList>
                  <S.ProfileHistoryList>MBIG 의료 Big data 개발</S.ProfileHistoryList>
                </S.ProfileHistory>
              </S.TeamList>
            </S.Team>
          </ul>
        </Section>
      </SectionWrap>
      <S.Introduce>
        <S.IntroduceBg />
        <Section className="relative text-center" maxScreen="xLarge">
          <FramerMotion>
            <h3 className="text-3xl font-bold text-white">고객 만족도</h3>
            <p className="mt-5 leading-normal text-white">고객 All-In-One Service 하나로 매출 일으킨 고객 경험</p>
            <Carousel className="mt-10 lg:mt-32" slideWidth={760} carouselData={carouselData} />
          </FramerMotion>
        </Section>
      </S.Introduce>
      <SectionWrap>
        <Section yPadding="lg:py-44 py-20">
          <FramerMotion delay={0.3}>
            <h3 className="text-center text-3xl font-bold leading-normal text-black">최근 이커머스 소식을 전합니다</h3>
          </FramerMotion>
          <FramerMotion delay={0.5}>
            <p className="mt-3 text-center font-light leading-normal">(+ 이 서비스는 1차 랜딩 페이지에선 뺄 거임)</p>
          </FramerMotion>
          <ul className="mt-14 flex gap-3 max-md:flex-col lg:mt-28 lg:gap-5">
            <li className="mx-auto max-w-[372px] overflow-hidden rounded-xl border border-solid border-gray-100 bg-white shadow-xl transition-transform hover:scale-110 md:basis-1/3">
              <FramerMotion delay={0.2}>
                <Link href="/">
                  <Image src={`/assets/images/introduce_news.jpg`} width={373} height={230} alt="" />
                  <div className="p-4 py-5">
                    <strong className="text-xl font-bold">지식 재산권 이슈</strong>
                    <p className="mt-8 text-sm leading-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati excepturi ab molestias quisquam saepe libero aliquid cumque, qui rerum quidem minima
                      aut sit laudantium eligendi ex repellendus distinctio consequuntur.
                    </p>
                    <span className="mt-4 block text-xl text-blue-500 underline">READ MORE</span>
                  </div>
                </Link>
              </FramerMotion>
            </li>
            <li className="mx-auto max-w-[372px] overflow-hidden rounded-xl border border-solid border-gray-100 bg-white shadow-xl transition-transform hover:scale-110 md:basis-1/3">
              <FramerMotion delay={0.4}>
                <Link href="/">
                  <Image src={`/assets/images/introduce_news.jpg`} width={373} height={230} alt="" />
                  <div className="p-4 py-5">
                    <strong className="text-xl font-bold">지식 재산권 이슈</strong>
                    <p className="mt-8 text-sm leading-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati excepturi ab molestias quisquam saepe libero aliquid cumque, qui rerum quidem minima
                      aut sit laudantium eligendi ex repellendus distinctio consequuntur.
                    </p>
                    <span className="mt-4 block text-xl text-blue-500 underline">READ MORE</span>
                  </div>
                </Link>
              </FramerMotion>
            </li>
            <li className="mx-auto max-w-[372px] overflow-hidden rounded-xl border border-solid border-gray-100 bg-white shadow-xl transition-transform hover:scale-110 md:basis-1/3">
              <FramerMotion delay={0.6}>
                <Link href="/">
                  <Image src={`/assets/images/introduce_news.jpg`} width={373} height={230} alt="" />
                  <div className="p-4 py-5">
                    <strong className="text-xl font-bold">지식 재산권 이슈</strong>
                    <p className="mt-8 text-sm leading-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati excepturi ab molestias quisquam saepe libero aliquid cumque, qui rerum quidem minima
                      aut sit laudantium eligendi ex repellendus distinctio consequuntur.
                    </p>
                    <span className="mt-4 block text-xl text-blue-500 underline">READ MORE</span>
                  </div>
                </Link>
              </FramerMotion>
            </li>
          </ul>
        </Section>
      </SectionWrap>
    </>
  );
};

export default Introduce;
