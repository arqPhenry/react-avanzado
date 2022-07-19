import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { grisDelimitador, grisClaro, negroAlterno } from '../styles/vars';

export const Nav = styled.nav`
  align-items: center;
  background: ${grisClaro};
  border-top: 1px solid ${grisDelimitador};
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 400px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 2;

  border-radius: 16px 16px 0 0;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: ${negroAlterno};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`;
