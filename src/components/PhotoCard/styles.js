import styled from 'styled-components';

export const Article = styled.article`
    background-color: #ffffff;
    margin-bottom: 12px;
    border-radius: 16px;
    max-width: 400px;
    overflow: hidden;

    box-shadow: 0px 10px 25px -12px #8b98a5;
`;

export const Figure = styled.figure`
    margin: 0;
    overflow: hidden;
    padding: 75% 0 0 0;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
`;

export const ButtonList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    padding: 12px;
    gap: 6px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: 1px solid #536471;
  color: #536471;
  border-radius: 14px;
  &:hover{
        cursor: pointer;
        border: 1px solid #f7f9f9;
        background-color: #536471;
        color: #f7f9f9;
    }
  & svg {
    margin-right: 6px;
  }
`;
