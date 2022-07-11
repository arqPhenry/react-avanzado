import styled, { css } from 'styled-components';
import { scrollIn } from '../styles/animations.js';

export const List = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 400px;
  margin-bottom: 12px;

  ${props => props.fixed && css`
    {
      position: fixed;
      border-radius: 60px;
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      
      right: 0;
      top: -10px;
      transform: scale(.7);
      z-index: 1;

      ${scrollIn()}
    }
  `}
`;

export const Item = styled.li`
  padding-bottom: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff3f4;
  z-index: 1;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover{
    background-color: #536471;
    color: #f7f9f9;
  }
`;
