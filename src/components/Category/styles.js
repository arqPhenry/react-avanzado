import styled from 'styled-components';

const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    max-width: 75px;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px dashed #8b98a5;

    transition: transform 1.5s ease;
    &:hover{
      transform: rotate(360deg)
    }
`;

const Image = styled.img`
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 4px;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;

  transition: transform 1.5s ease;
  &:hover{
    transform: rotate(-360deg)
  }
`;

export { Anchor, Image };
