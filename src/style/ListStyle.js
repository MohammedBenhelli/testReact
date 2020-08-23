import styled, {css} from "styled-components";
import Color from './color';


// eslint-disable-next-line no-unused-vars
let ListStyle;

export default ListStyle = styled.div`
    h2 {
      padding-top: 5px;
      padding-bottom: 5px;
      color: ${Color.text};
      text-align: center;
    }
    ${props => props.type === `Done` && css`
      h2{
        background-color: ${Color.backgroundColor}; 
      }  
    `}
    ${props => props.type === `Doing` && css`
      h2{
        background-color: ${Color.doing}; 
      }  
    `}
    ${props => props.type === `To Do` && css`
      h2{
        background-color: ${Color.toDo}; 
      }  
    `}
    .list{
      background-color: #9eb3c8;
    }
`;
