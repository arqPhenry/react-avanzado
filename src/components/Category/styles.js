import styled from 'styled-components';
import { grisOscuro, grisClaro, vsm, pesoMedio, pesoMedioFuerte } from '../styles/vars';

const Anchor = styled.a`
    display: grid;
    grid-template-rows: auto auto;
    text-decoration: none;
    max-width: 75px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: content-box;
    box-shadow: 0px 5px 20px -12px rgba(83, 100, 113, 0.65);

    &:hover{
      & div{
        background-color: ${grisClaro};

        &::before{
          background-color: ${grisClaro};
        }
        & p{
          color: ${grisOscuro};
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
  background-color: ${grisOscuro};
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    height: 8px;
    background-color: ${grisOscuro};
    top: -8px;
    position: absolute;
    border-radius: 8px 8px 0 0;
    transition: all 0.25s ease;
  }

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
  color: ${grisClaro};
  transition: all 0.25s ease;
  margin-bottom: 6.5px;
`;

export { Anchor, Image, Div, Span, Par };
