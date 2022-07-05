import styled from 'styled-components';
import { scrollIn } from '../styles/animations.js';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  max-width: 400px;
  &::-webkit-scrollbar{
    height: 6px;
    width: 100%;
  };
  &::-webkit-scrollbar-thumb {
    background-color: #eff3f4;
    border-radius: 5px;
  };
  margin-bottom: 12px;

  &.fixed{
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 6px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.6);
    z-index: 1;

    ${scrollIn()}
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
