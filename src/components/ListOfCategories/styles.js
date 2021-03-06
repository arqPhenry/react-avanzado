import styled, { css } from 'styled-components';
import { scrollIn } from '../styles/animations.js';
import { grisClaro, negroAlterno } from '../styles/vars.js';

export const List = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin-bottom: 6px;

  position: relative;

  ${props => props.fixed && css`
    {
      position: fixed;
      border-radius: 60px;
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      
      right: 0;
      top: -10px;
      transform: scale(.8);
      z-index: 1;

      ${scrollIn()}
    }
  `}
`;

export const Item = styled.li`
  padding-bottom: 0;
  ${props => props.fixed && css`
    { transition: transform 0.1s ease;
      &:hover{
        transform: scale(1.1);
      }
    }
  `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  opacity: 0.7;
  color: ${grisClaro};
  z-index: 1;
  height: 100.5px;
  padding: 3px;
  cursor: pointer;
  transition: 0.2s ease all;
  top: 0;

  position: absolute;

  &.izquierdo{
    border-radius: 16px 0 0 16px;
    left: 0
  }
  &.derecho{
    right: 0;
    border-radius: 0 16px 16px 0;
  }

  &:hover{
    background-color: ${negroAlterno};
    color: ${grisClaro};
    opacity: 0.8;
  }

  ${props => props.fixed && css`
    {
      height: 87.17px;
    }
    &.izquierdo{
    border-radius: 0 0 0 16px;
    }
    &.derecho{
      border-radius: 0 0 16px 0;
    }
  `}
`;
