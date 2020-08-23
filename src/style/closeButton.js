import styled, {css} from "styled-components";
import Color from './color';

// eslint-disable-next-line no-unused-vars
let CloseButton;

export default CloseButton = styled.p`
    display: block;
    background-color: #D63031;
    color: ${Color.text};
    padding-top: 25% !important;
    padding-bottom: 25% !important;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
    :hover {
        background-color: #E71C23;
        cursor: pointer;
    }
    ${props => props.doing && css`
        background-color: ${Color.doing};
        :hover {
        background-color: #2b3670;
        cursor: pointer;
    }
    `}
    ${props => props.done && css`
        background-color: ${Color.backgroundColor};
        :hover {
        background-color: #558a0b;
        cursor: pointer;
    }
    `}
    ${props => props.toDo && css`
        background-color: ${Color.toDo};
        :hover {
        background-color: #ecad1e;
        cursor: pointer;
    }
    `}
`
