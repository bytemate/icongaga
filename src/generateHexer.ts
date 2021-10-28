import seedrandom from 'seedrandom';
import { Vec2 } from './svgHelper';

const emptyColor = '#98aed2';
const defaultBorderColor = '#0036B1';
const defaultUpperColorLib = [
  '#165DFF', //
  '#ff1553',
  '#ff8e16',
  '#07ac65',
];

const defaultLowerColorLib = [
  '#E96B89',
  '#F36F52',
  '#F2994A',
  '#23da35',
  '#92CCC9',
  '#CDD9F0',
  '#92A2CC',
  '#A892CC',
];

const appIconDefs = `
  <defs>
    <radialGradient
      id="app_icon_paint0_radial"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(27.6588 18.1629) rotate(52.1169) scale(101.192 140.632)"
    >
      <stop offset="0.239878" stop-color="white" />
      <stop offset="0.62901" stop-color="#739EFE" />
      <stop offset="1" stop-color="#94B4FC" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="app_icon_paint1_radial"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(77.4247 80.3412) rotate(-142.415) scale(55.3379 46.8338)"
    >
      <stop stop-color="#0424CF" />
      <stop offset="0.421875" stop-color="#0B2ACC" stop-opacity="0.42" />
      <stop offset="1" stop-color="#BFD0E3" stop-opacity="0.26" />
    </radialGradient>
    <path
      id="app_icon_outer_shape0"
      d="M41.3636 96.46L6.07272 76.1729C3.88725 74.9166 2.55561 72.6087 2.56068 70.1264L2.64329 29.6983C2.64836 27.2161 3.98943 24.9137 6.18001 23.6664L41.5535 3.52539C43.7466 2.27668 46.4484 2.28227 48.6364 3.54003L83.9273 23.8271C86.1128 25.0834 87.4444 27.3913 87.4393 29.8736L87.3567 70.3017C87.3517 72.7839 86.0106 75.0863 83.82 76.3336L48.4465 96.4746C46.2534 97.7233 43.5516 97.7177 41.3636 96.46Z"
    />
  </defs>
`;

export const generateHexer = (props: {
  name: string;
  size?: number;
  upperColorLib?: string[];
  lowerColorLib?: string[];
  borderColor?: string;
  isGroup?: boolean;
}) => {
  const {
    name,
    size = 100,
    upperColorLib = defaultUpperColorLib,
    lowerColorLib = defaultLowerColorLib,
    borderColor = defaultBorderColor,
  } = props;

  const { upperColor, lowerColor } = (() => {
    const random = seedrandom(name);
    const index1 = Math.floor(random() * upperColorLib.length);
    const index2 = Math.floor(random() * lowerColorLib.length);

    return {
      upperColor: name ? upperColorLib[index1] : emptyColor,
      lowerColor: name ? lowerColorLib[index2] : emptyColor,
    };
  })();

  const { upperPath, upperRotation } = (() => {
    const random = seedrandom(name);
    const points = [
      new Vec2(0.5, -0.5),
      new Vec2(0.2, 1.2),
      new Vec2(0.8, 1.2),
    ].map(point =>
      point
        .add(new Vec2(random() - 0.5, random() - 0.5).multiply(0.5))
        .multiply(100),
    );

    return {
      upperPath: name
        ? `M${points[0].x} ${points[0].y} L${points[1].x} ${points[1].y} L${points[2].x} ${points[2].y} z`
        : '',
      upperRotation: name ? Math.round(random() * 360) : 0,
    };
  })();

  return /* HTML */ `
    <svg
      width="${size}"
      height="${size}"
      viewBox="0 0 90 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      ${appIconDefs}
      <desc>${name}</desc>

      <g mask="url(#app_icon_mask0)">
        <mask
          id="app_icon_mask0"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
        >
          <use xlink:href="#app_icon_outer_shape0" fill="white" />
        </mask>
        <use xlink:href="#app_icon_outer_shape0" fill="white" />
        <path
          d="M-7.99798 36.9657L50.3896 74.9754L115.593 -35.2086L56.244 -54.6547L-7.99798 36.9657Z"
          fill="${upperColor}"
          fill-opacity="0.5"
        />
        <path
          d="${upperPath}"
          fill="${upperColor}"
          transform="rotate(${upperRotation}, 50, 50)"
        />
        <path
          d="M-11.465 83.2533L18.3775 114.657L118.492 58.292L115.945 47.7026L-11.465 83.2533Z"
          fill="${lowerColor}"
        />
        <g style="mix-blend-mode: overlay">
          <rect
            x="0"
            y="0"
            width="90"
            height="100"
            fill="url(#app_icon_paint0_radial)"
            fill-opacity="0.6"
          />
          <rect
            x="0"
            y="0"
            width="90"
            height="100"
            fill="url(#app_icon_paint1_radial)"
          />
        </g>
      </g>
      <use
        xlink:href="#app_icon_outer_shape0"
        stroke="${borderColor}"
        stroke-width="5"
      />
    </svg>
  `;
};
