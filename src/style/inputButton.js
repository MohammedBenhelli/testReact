import styled from "styled-components";
import Color from './color';

// eslint-disable-next-line no-unused-vars
let InputButton;

export default InputButton = styled.button`
  background-color: ${Color.toDo};
  color: ${Color.text};
  margin-left: 5px;
  border: none;
  border-radius: 5px; 
  :hover{
    background-color: #d7ae48;
    cursor: pointer;
  }
`;
