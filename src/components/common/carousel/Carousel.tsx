import type { MutableRefObject } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel';

import Card from './Card';
import * as SC from './Carousel.styled';

export interface ICarouselData {
  readonly image: string;
  readonly title: string;
  readonly subTitle: string;
  readonly description: string;
}

interface ICarouselProps {
  readonly className?: string;
  readonly slideWidth?: number;
  readonly carouselData: ICarouselData[];
}

interface IPagination {
  readonly centerSlideDataIndex: number;
  readonly updatePosition: (index: number) => void;
  readonly data: Partial<ICarouselData>[];
}

function Pagination(props: IPagination) {
  const { centerSlideDataIndex, updatePosition } = props;
  return (
    <SC.Pagination>
      {props.data?.map((_, index) => {
        const isCenterSlide = centerSlideDataIndex === index;
        return <div key={index} onClick={() => updatePosition(index)} className={`pagination ${isCenterSlide ? 'active' : ''}`} />;
      })}
    </SC.Pagination>
  );
}

const Carousel = ({ className, slideWidth, carouselData }: ICarouselProps) => {
  const ref: MutableRefObject<typeof StackedCarousel> = useRef(StackedCarousel);
  const [centerSlideDataIndex, setCenterSlideDataIndex] = useState(0);
  // 반응형 상태
  const [isMobile, setIsMobile] = useState(false);
  const onCenterSlideDataIndexChange = (newIndex: number) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePositionHandler = (index: number) => {
    (ref?.current as unknown as StackedCarousel).swipeTo(index - centerSlideDataIndex);
  };
  useEffect(() => {
    // 미디어 쿼리 정의
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // 미디어 쿼리 변경 감지 함수
    const handleMediaQueryChange = (e: unknown) => {
      setIsMobile((e as MediaQueryList).matches);
    };

    // 이벤트 리스너 추가
    mediaQuery.addListener(handleMediaQueryChange);

    // 초기 상태 설정
    handleMediaQueryChange(mediaQuery);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <SC.Carousel className={className ?? ''}>
      <ResponsiveContainer
        carouselRef={ref as unknown as MutableRefObject<StackedCarousel>}
        render={(width, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={isMobile && slideWidth ? 320 : slideWidth ?? 400}
              carouselWidth={width}
              data={carouselData}
              maxVisibleSlide={3}
              disableSwipe
              // customScales={[1, 0.9, 0.8]}
              transitionTime={450}
              onActiveSlideChange={onCenterSlideDataIndexChange}
            />
          );
        }}
      />
      <Pagination updatePosition={updatePositionHandler} data={carouselData} centerSlideDataIndex={centerSlideDataIndex} />
    </SC.Carousel>
  );
};

export default Carousel;
