import styled from 'styled-components';
import { azulPrincipal, azulFondoOscuro, blanco, md, grisClaro, sm, negroAlterno } from '../styles/vars';
import { Link as LinkRouter } from 'react-router-dom';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${blanco};
    width: 100%;
    max-width: 400px;
    border-radius: 16px;

    box-shadow: 0px 10px 25px -12px #8b98a5;
`;

export const Input = styled.input`
    background-color: ${grisClaro};
    border: none;
    border-radius: 8px;
    height: 36px;
    font-size: ${md};
    padding: 6px;
    margin-bottom: 16px;
`;

export const Div = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;
`;
export const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto) 1fr;
    gap: 36px;

    &:nth-child(1){
        align-items: center;
    }
`;
export const Container2 = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 16px;

    &:nth-child(1){
        align-items: center;
    }
`;

export const Button = styled.button`
    background: linear-gradient(148deg, ${azulPrincipal} 0%, ${azulFondoOscuro} 100%); 
    border-radius: 8px;
    border: none;
    color: ${blanco};
    width: 100%;
    cursor: pointer;
    font-size: ${md};
    font-weight: bold;
    height: 50px;

    box-shadow: 0px 10px 25px -12px rgba(30,39,50,0.45);

    &:hover{
        background: ${azulPrincipal};
    }
    &:active{
        box-shadow: none;
        background: ${azulPrincipal};
    }
`;

export const SecundaryButton = styled.button`
    background: ${grisClaro}; 
    border-radius: 8px;
    border: 1px solid ${azulPrincipal};
    color: ${azulPrincipal};
    width: 100%;
    cursor: pointer;
    font-size: ${md};
    font-weight: bold;
    height: 50px;
`;

export const Span = styled.span`
    font-size: ${sm};
    text-align: center;
    color: ${negroAlterno};
`;
export const Link = styled(LinkRouter)`
    text-align: center;
    color: ${negroAlterno};
    text-decoration: none;
`;

export const Label = styled.label`
    font-size: ${sm};
    font-weight: bold;
    margin-bottom: 4px;
    color: ${negroAlterno};
`;
