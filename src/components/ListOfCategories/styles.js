import styled, { css } from 'styled-components';
import { scrollIn } from '../styles/animations.js';

export const List = styled.ul`
  position: relative;
  max-width: 400px;
  margin-bottom: 12px;

  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 6px;
      position: fixed;
      right: 0;
      top: -10px;
      transform: scale(.7);
      z-index: 1;
      &::-webkit-scrollbar{
        display: none;
      }

      ${scrollIn()}
    }
  `}
`;

export const Carrousel = styled.ul`
    display: flex;
    overflow: scroll;
    scroll-behavior: smooth;
    max-width: 400px;
    
    &::-webkit-scrollbar{
        display: none;
      }
`;

export const Item = styled.li`
  padding: 0 8px;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff3f4;
  z-index: 1;
  top: calc(50% - 12px);
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover{
    background-color: #536471;
    color: #f7f9f9;
  }
  &.izquierdo {
    left: 0;
  }
  &.derecho {
    right: 0;
  }
`;
