import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  max-width: 400px;
  &::-webkit-scrollbar{
    height: 6px;
    width: 100%;
  };
  &::-webkit-scrollbar-thumb {
    background-color: #eff3f4;
    border-radius: 5px;
  };
  margin-bottom: 12px;
`;

export const Item = styled.li`
  padding: 0 8px;
`;
