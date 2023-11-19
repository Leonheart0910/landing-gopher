import type { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

import * as SC from './Card.styled';

const Card = (StackedCarouselSlideProps: StackedCarouselSlideProps) => {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const { title, subTitle, description } = data[dataIndex];

  return (
    <SC.Card draggable={false}>
      <div className={`cover fill ${isCenterSlide ? 'off' : 'on'}`}>
        <div className="card-overlay fill" onClick={() => !isCenterSlide && swipeTo(slideIndex)} />
      </div>
      <div className="detail fill">
        <img alt={title} className="cover-image" src={coverImage} />
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
        <p className="description">{description}</p>
      </div>
    </SC.Card>
  );
};

export default Card;
