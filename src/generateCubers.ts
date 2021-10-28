import seedrandom from 'seedrandom';
import { getPath, Vec2 } from './svgHelper';

const emptyColor = '#98aed2';

const defaultBackdropColor = '#0033A8';
const defaultColorLib = [
  '#98aed2',
  '#7191ce',
  '#5974c6',
  '#2f50c2',
  '#1a97cd',
  '#d65564',
  '#dab2b5',
];

const getCubePaths = (startPoint: Vec2, s: number, h: number) => {
  const oy = s * Math.tan(Math.PI / 6);
  const centerPoint = startPoint.add(new Vec2(0, -h));
  const outerMovement = [
    new Vec2(s, -oy),
    new Vec2(0, -h),
    new Vec2(-s, -oy),
    new Vec2(-s, oy),
    new Vec2(0, h),
  ];
  const topMovement = [new Vec2(-s, -oy), new Vec2(s, -oy), new Vec2(s, oy)];
  const leftMovement = [new Vec2(0, h), new Vec2(-s, -oy), new Vec2(0, -h)];
  const rightMovement = [new Vec2(s, -oy), new Vec2(0, h), new Vec2(-s, oy)];

  const outerD = getPath(startPoint, outerMovement);
  const topD = getPath(centerPoint, topMovement);
  const leftD = getPath(centerPoint, leftMovement);
  const rightD = getPath(centerPoint, rightMovement);

  return { outerD, topD, leftD, rightD };
};

const filter = /* xml */ `
  <filter id="brighten1_6">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2.4" />
      <feFuncG type="linear" slope="2.4" />
      <feFuncB type="linear" slope="2.4" />
    </feComponentTransfer>
  </filter>
  <filter id="brighten1_2">
    <feComponentTransfer>
      <feFuncR type="linear" slope="1.6" />
      <feFuncG type="linear" slope="1.6" />
      <feFuncB type="linear" slope="1.6" />
    </feComponentTransfer>
  </filter>
`;

const getCube = (props: {
  position: Vec2;
  size: number;
  height: number;
  color: string;
  backdropColor: string;
}) => {
  const { position, size, height, color, backdropColor } = props;
  const { outerD, topD, leftD, rightD } = getCubePaths(position, size, height);

  return {
    backDrop: `
      <path
        d="${outerD}"
        fill="none"
        stroke="${backdropColor}"
        stroke-width="10.5"
        stroke-linejoin="round"
      />
    `,
    cube: `
      <g>
        <path
          d="${outerD}"
          stroke="none"
          fill="${color}"
          style="filter: url(#brighten1_6)"
        />
        <path d="${topD}" stroke="none" fill="rgba(255,255,255,0.5)" />
        <path
          d="${leftD}"
          stroke="none"
          fill="${color}"
          style="filter: url(#brighten1_2)"
        />
        <path d="${rightD}" stroke="none" fill="${color}" />
      </g>
    `,
  };
};

const cubeGroupe = (props: {
  colors: string[];
  heights: number[];
  backdropColor: string;
  fillUp?: boolean;
}) => {
  const { colors, heights, backdropColor, fillUp } = props;
  const size = 16;
  const gap = size / 2;
  const oy = size * Math.tan(Math.PI / 6);
  const gapY = gap * Math.tan(Math.PI / 6);

  const basePos = new Vec2(50, 100 - 2 * gapY);
  const posArr = [
    basePos.add(new Vec2(0, -oy * 2 - 2 * gapY)),
    basePos.add(new Vec2(-size - gap, -oy - gapY)),
    basePos.add(new Vec2(size + gap, -oy - gapY)),
    basePos,
  ];

  const heightBase = size * 2 + gapY * 2;

  const cubes = posArr.map((pos, i) =>
    getCube({
      position: pos,
      size,
      height: heightBase - heights[i] * size * (i === 0 ? 0.5 : 1),
      color: colors[i],
      backdropColor,
    }),
  );

  const backCube = getCube({
    position: basePos,
    size: size * 2 + gap,
    height: fillUp ? heightBase : size,
    color: backdropColor,
    backdropColor,
  }).backDrop;

  return `
  <g>
    ${backCube}
    ${cubes.map(cube => `<g>${cube.backDrop}</g>`).join('')}
    ${cubes.map(cube => `<g>${cube.cube}</g>`).join('')}
  </g>
  `;
};

export const generateCubers = (props: {
  name: string;
  size?: number;
  colorLib?: string[];
  backdropColor?: string;
  fillUp?: boolean;
}) => {
  const {
    name,
    size = 100,
    colorLib = defaultColorLib,
    fillUp,
    backdropColor = defaultBackdropColor,
  } = props;

  const { colors, heights } = (() => {
    const random = seedrandom(name);
    const colorArr: string[] = [];
    for (let i = 0; i < 4; i++) {
      const randomValue = random();
      const index = Math.floor(randomValue * colorLib.length);
      colorArr.push(name ? colorLib[index] : emptyColor);
    }

    const heightArr: number[] = [];
    for (let i = 0; i < 4; i++) {
      const randomValue = random();
      heightArr.push(name ? randomValue : 0.5);
    }
    return { colors: colorArr, heights: heightArr };
  })();

  return `
    <svg
      width="${size}"
      height="${size}"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>${name}</desc>
      ${filter}
      ${cubeGroupe({
    colors,
    heights,
    backdropColor,
    fillUp,
  })}
    </svg>
  `;
};
