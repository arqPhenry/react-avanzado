import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { loadingBackground } from '../styles/animations.js';

export const Link = styled(LinkRouter)`
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const Grid = styled.div`
    padding-top: 32px;
    max-width: 400px;
    width: 400px;
`;

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`;

export const Div = styled.div`
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    background: linear-gradient(148deg, #F7F7F7 0%, #C7C7C7 100%);
    background-size: 150% 300%;

    ${loadingBackground()}
    display: inline-block;
    margin: 1%;
    position: relative;
    width: 31.33%;
    height: 31.33%;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;
