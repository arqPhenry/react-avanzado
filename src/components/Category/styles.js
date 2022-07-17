import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { grisOscuro, grisClaro, vsm, pesoMedio, pesoMedioFuerte } from '../styles/vars';

const Link = styled(LinkRouter)`
    display: grid;
    grid-template-rows: auto auto;
    text-decoration: none;
    max-width: 75px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: content-box;
    box-shadow: 0px 5px 20px -12px rgba(83, 100, 113, 0.65);

    ${props => props.fixed && css`
    {
      grid-template-rows: auto;
      box-shadow: 0px 5px 20px -12px rgba(83, 100, 113, 0.85);
    }
    `}

    &:hover{
      & div{
        background-color: ${grisOscuro};

        &::before{
          background-color: ${grisOscuro};
        }
        & p{
          color: ${grisClaro};
          font-weight: ${pesoMedioFuerte};
        }
      }
      box-shadow: 0px 5px 20px -12px rgba(83, 100, 113, 0.85);
    }

`;

const Image = styled.img`
  box-sizing: border-box;
  //border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;

  transition: all 0.25s ease;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25.5px;
  background-color: ${grisClaro};
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    height: 8px;
    background-color: ${grisClaro};
    top: -8px;
    position: absolute;
    border-radius: 8px 8px 0 0;
    transition: all 0.25s ease;
  }
  ${props => props.fixed && css`
    {
      display: none;
    }
  `}

  transition: all 0.25s ease;
`;

const Span = styled.span`
  position: absolute;
  left: calc(50% - 10.985px);
  top: -18.5px;
`;

const Par = styled.p`
  text-align: center;
  font-size: ${vsm};
  font-weight: ${pesoMedio};
  color: ${grisOscuro};
  transition: all 0.25s ease;
  margin-bottom: 6.5px;
`;

export { Link, Image, Div, Span, Par };
