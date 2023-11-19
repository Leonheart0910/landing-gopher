import Image from 'next/image';

import * as S from './Price.styled';

const includedContents = [
  '10 free local transfer',
  'Multi-user access',
  'PrePaid debit cards',
  'Virtual cards',
  'Priority 24/7 support',
  'Exchange 24 currencies',
  'Free payment to other Draft accounts',
];

const data = [
  {
    title: '기본',
    price: '₩50,000/m',
    description: 'Manage your business with a simple and efficient account',
    link: '/',
    exclude: ['Priority 24/7 support', 'Exchange 24 currencies', 'Free payment to other Draft accounts'],
  },
  {
    title: '프리미엄',
    price: '₩250,000/m',
    description: 'Manage your business with a simple and efficient account',
    link: '/',
    exclude: [],
  },
];

const Price = () => {
  return (
    <S.PriceBox>
      {data?.map((item, index) => {
        const currentItem = item;
        if (undefined === currentItem) {
          return <>가격 정보가 없습니다.</>;
        }

        const { title, price, description, link, exclude } = currentItem;
        return (
          <S.PriceWrap key={index}>
            <S.PriceDiv delay={0.4 * (index + 1)}>
              <S.Title>{title}</S.Title>
              <S.Price>{price}</S.Price>
              <S.Description>{description}</S.Description>
              <S.LinkTag href={link}>Get Started</S.LinkTag>
              <Image src={`/assets/images/landing_card.jpg`} alt={'Sukhbir Mashey'} width={463} height={268} />
              <S.ListWrap>
                {includedContents.map((text: string, textIndex: number) => {
                  return (
                    <S.List key={textIndex} $disabled={exclude.includes(text)}>
                      {text}
                    </S.List>
                  );
                })}
              </S.ListWrap>
            </S.PriceDiv>
          </S.PriceWrap>
        );
      })}
    </S.PriceBox>
  );
};

export default Price;
