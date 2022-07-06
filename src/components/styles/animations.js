import { keyframes, css } from 'styled-components';

const scrollInKeyframes = keyframes`
  from {
    transform: translateY(-60px) scale(.7);
    opacity: 0;
  }

  to {
    transform: translateY(0px) scale(.7);
    opacity: 1;
  }
`;

const loadingSkeleton = keyframes`
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 50% 100%;
    }
    100%{
        background-position: 0% 50%;
    }
`;

export const scrollIn = ({ time = '0.25s', type = 'ease' } = {}) =>
  css`animation: ${scrollInKeyframes} ${time} ${type};`;

export const loadingBackground = ({ time = '1s', type = 'ease-in-out', iteration = 'infinite' } = {}) =>
  css`animation: ${loadingSkeleton} ${time} ${type} ${iteration};`;
