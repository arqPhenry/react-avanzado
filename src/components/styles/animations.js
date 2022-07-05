import { keyframes, css } from 'styled-components';

const scrollInKeyframes = keyframes`
  from {
    transform: translateY(-60px) scale(.6);
    //opacity: 0;
  }

  to {
    transform: translateY(0px) scale(.6);
    //opacity: 1;
  }
`;

export const scrollIn = ({ time = '0.25s', type = 'ease' } = {}) =>
  css`animation: ${scrollInKeyframes} ${time} ${type};`;
