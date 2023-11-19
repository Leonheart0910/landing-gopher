import { useState } from 'react';

import { FramerMotion } from '../common/framer/FramerMotion';
import * as S from './Faq.styled';

export interface IFaqProps {
  readonly faqData: IFaqInfo[];
}

interface IFaqInfo {
  readonly question: string;
  readonly answer: string;
}

export const fetchFaqData = async () => {
  return [
    {
      question: '전자동 판매 시스템은 무엇인가요?',
      answer:
        '전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~',
    },
    {
      question: '전자동 판매 시스템은 무엇인가요?',
      answer:
        '전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~',
    },
    {
      question: '전자동 판매 시스템은 무엇인가요?',
      answer:
        '전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~',
    },
    {
      question: '전자동 판매 시스템은 무엇인가요?',
      answer:
        '전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~',
    },
    {
      question: '전자동 판매 시스템은 무엇인가요?',
      answer:
        '전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~전자동 판매 시스템은~~~',
    },
  ];
};

const Faq = ({ faqData }: IFaqProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <ol className="mt-10 w-full lg:mt-28">
      {faqData?.map(({ question, answer }: IFaqInfo, index: number) => {
        return (
          <li key={index} className="mt-3">
            <FramerMotion delay={(index + 1) * 0.3}>
              <S.Question onClick={() => toggleItem(index)} className={`${openItem === index ? '!rounded-b-none' : ''}`}>
                <S.QuestionIconVertical className={`${openItem === index ? 'hidden' : ''}`} />
                <S.QuestionIconHorizon />
                {question}
              </S.Question>
              {openItem === index && <S.Answer>{answer}</S.Answer>}
            </FramerMotion>
          </li>
        );
      })}
    </ol>
  );
};

export { Faq };
