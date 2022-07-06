import styled from 'styled-components';
import { loadingBackground } from '../styles/animations.js';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  max-width: 400px;
  gap: 12px;
  padding-left: 6px;
  padding-right: 6px;
  &::-webkit-scrollbar{
    display: none;
  }
  margin-bottom: 12px;
`;

export const Item = styled.li`
  border-radius: 50%;
  margin: 0;
  box-sizing: content-box;
  border: 4px solid linear-gradient(278deg, #F7F7F7 0%, #C7C7C7 100%);;
`;

export const Div = styled.div`
  box-sizing: border-box;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(148deg, #F7F7F7 0%, #C7C7C7 100%);
  background-size: 150% 300%;

  ${loadingBackground()}

`;
