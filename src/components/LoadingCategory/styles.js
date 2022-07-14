import styled from 'styled-components';
import { loadingBackground } from '../styles/animations.js';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  max-width: 400px;
  gap: 6px;
  padding-bottom: 12px;
  &::-webkit-scrollbar{
    display: none;
  }
  margin-bottom: 12px;
`;

export const Item = styled.li`
  border-radius: 16px;
  margin: 0;
  box-sizing: content-box;
  box-shadow: 0px 5px 20px -12px rgba(83, 100, 113, 0.35);
`;

export const Div = styled.div`
  box-sizing: border-box;
  width: 75px;
  height: 100.5px;
  border-radius: 16px;
  background: linear-gradient(148deg, #F7F7F7 0%, #C7C7C7 100%);
  background-size: 150% 300%;

  ${loadingBackground()}

`;
