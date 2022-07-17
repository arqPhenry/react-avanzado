import styled, { css } from 'styled-components';
import { grisOscuro, grisClaro } from '../styles/vars';
// import { loadingBackground } from '../styles/animations';

export const Article = styled.article`
    background-color: ${grisOscuro};
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    max-width: 100vh;
    max-height: 100vh;
    box-shadow: 0px 10px 25px -12px #8b98a5;

    position: relative;
`;

export const Figure = styled.figure`
    margin: 0;
    align-items: center;
    justify-content: center;
    background-color: ${grisOscuro};
    padding-top: 24px;
`;

export const Image = styled.img`
    opacity: 0;
    transition: 1.5s all;
    height: 100%;
    width: 100%;
    max-width: 100vh;
    max-height: 100vh;

    ${props => !props.loadImage && css`
    { 
      opacity: 1;
    }
    `}
`;

export const ButtonList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    padding: 12px;
    gap: 6px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: 1px solid ${grisClaro};
  color: ${grisClaro};
  border-radius: 14px;
  transition: 0.1s ease all;
  cursor: pointer;
  &:hover{
        border: 1px solid #f7f9f9;
        background-color: #536471;
        color: #f7f9f9;
    }
  & svg {
    margin-right: 6px;
  }
  ${props => props.liked && css`
    { 
        border: 1px solid #f7f9f9;
        background-color: #c51d34;
        color: #f7f9f9;

      &:hover{
        color: #c51d34;
        border: 1px solid #c51d34;
        background-color: #f7f9f9;
    }
    }
  `}
`;
