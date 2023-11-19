import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 0.5rem;
  background-color: #ffffff;
  --transition: all 300ms ease;
  transition: var(--transition);
  overflow: visible;
  cursor: pointer;

  .card-overlay {
    position: absolute;
    border-radius: 15px;
    transition: var(--transition);
    user-select: none;
  }

  .cover {
    position: absolute;
    transition: var(--transition);
    &.on {
      opacity: 1;
      z-index: 1;
    }
    &.off {
      opacity: 0;
      z-index: -1;
    }
  }

  .cover-image {
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }

  .fill {
    width: 100%;
    height: 100%;
    box-shadow:
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    .title {
      font-size: 2rem;
      margin-top: 1rem;
      font-weight: bold;
      word-break: keep-all;
    }
    .sub-title {
      font-size: 1.3rem;
      margin-top: 0.8rem;
      word-break: keep-all;
    }
    .description {
      margin-top: 1rem;
      line-height: 1.4;
      font-weight: lighter;
      word-break: keep-all;
      white-space: pre-line;
      @media (max-width: 1024px) {
        white-space: normal;
      }
    }
  }
`;
