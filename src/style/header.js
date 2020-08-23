import styled from 'styled-components';
import Color from './color';

// eslint-disable-next-line no-unused-vars
let Header;

export default Header = styled.header`
  color: ${Color.text};
  background-color: ${Color.backgroundColor};
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  h1:hover {
    cursor: pointer;
    color: #99db3d;
  }
`;
