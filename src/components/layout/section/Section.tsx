import type { ReactNode } from 'react';

interface ISectionProps {
  title?: string;
  yPadding?: string;
  maxScreen?: string;
  className?: string;
  children: ReactNode;
}

interface IScreenSize {
  large: string;
  xLarge: string;
  x2Large: string;
  x3Large: string;
  [key: string]: string;
}

const Section = (props: ISectionProps) => {
  const screenSize: IScreenSize = {
    large: 'max-w-screen-lg',
    xLarge: 'max-w-screen-xl',
    x2Large: 'max-w-screen-2xl',
    x3Large: 'max-w-screen-3xl',
  };

  const maxScreenSize = props.maxScreen && screenSize[props.maxScreen] ? screenSize[props.maxScreen] : 'max-w-screen-lg';

  return (
    <section className={`${props.className ?? ''} mx-auto ${maxScreenSize} px-4 ${props.yPadding ? props.yPadding : 'py-14 sm:py-20 md:py-28'}`}>
      {props.title && <h2 className="sr-only">{props.title}</h2>}
      {props.children}
    </section>
  );
};

export { Section };
