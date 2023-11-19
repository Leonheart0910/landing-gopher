import { FramerMotion } from '../../common/framer/FramerMotion';
import * as S from './Graph.styled';

const SPEED = 0.2;
const data = [
  {
    name: 'MON',
    blue: 180,
    red: 80,
  },
  {
    name: 'TUE',
    blue: 150,
    red: 90,
  },
  {
    name: 'WED',
    blue: 80,
    red: 100,
  },
  {
    name: 'THU',
    blue: 170,
    red: 60,
  },
  {
    name: 'FRI',
    blue: 130,
    red: 100,
  },
  {
    name: 'SAT',
    blue: 135,
    red: 130,
  },
  {
    name: 'SUN',
    blue: 130,
    red: 80,
  },
];

const Graph = () => {
  return (
    <S.Graph>
      {data.map((item, index) => {
        const blueSpeed = 1 + SPEED * (index + 1);
        const redSpeed = 1 + SPEED * (index + 2);
        return (
          <li key={index} className="shrink-0">
            <div className="flex w-[36px] items-end justify-between max-sm:w-5">
              <FramerMotion type="graphEffect" graph={item.blue} delay={blueSpeed} className="w-3 rounded-2xl bg-[#534ed6] max-sm:w-2"></FramerMotion>
              <FramerMotion type="graphEffect" graph={item.red} delay={redSpeed} className="w-3 rounded-2xl bg-[#e25a78] max-sm:w-2"></FramerMotion>
            </div>
            <span className="mt-2 block opacity-75">{item.name}</span>
          </li>
        );
      })}
    </S.Graph>
  );
};

export default Graph;
