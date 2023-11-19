import tw from 'tailwind-styled-components';

const Question = tw.div`
  relative w-full cursor-pointer overflow-hidden break-keep rounded-2xl bg-white p-4 pr-20 font-bold leading-normal lg:rounded-3xl lg:py-8 lg:text-xl
`;

const QuestionIconVertical = tw.div`
  block absolute top-1/2 -translate-y-1/2 bg-[#6a6d9e] right-[50px] w-[2px] h-[26px]
`;

const QuestionIconHorizon = tw.div`
  block absolute top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#6a6d9e] right-[51px] w-[26px] h-[2px]
`;

const Answer = tw.div`
  bg-white p-7 rounded-3xl rounded-t-none leading-normal
`;

export { Answer, Question, QuestionIconHorizon, QuestionIconVertical };
