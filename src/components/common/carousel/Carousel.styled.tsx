import { styled } from 'styled-components';

const Carousel = styled.div`
  .react-stacked-center-carousel {
    overflow: visible !important;
  }

  .react-stacked-center-carousel-slide-0 .card-card {
    cursor: default;
  }

  .react-stacked-center-carousel-slide-0 .card-card:hover {
    transform: none;
  }

  .react-stacked-center-carousel-slide-0 .card-card .cover {
    transition:
      opacity 300ms ease,
      z-index 0ms 300ms;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
  .pagination {
    width: 15px;
    height: 15px;
    margin-top: 1.4rem;
    border-radius: 100%;
    border: 1px solid white;
    cursor: pointer;
    &.active {
      background: white;
    }
  }
`;

export { Carousel, Pagination };
