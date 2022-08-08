import styled, { css } from 'styled-components';

export const Span = styled.span`
    padding: 6px 12px;
    border-radius: 13px;
    text-align: center;

    font-size: 12px;

    color: #248232;
    background-color: #ace4aa;

    ${props => !props.isLoged && css`
    { color: #FF6B6B;
      background-color: #F8E9E9;
    }
  `}
`;
