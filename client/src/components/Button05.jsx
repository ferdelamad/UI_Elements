import styled from 'styled-components';

const Button05 = styled.a`
  position: absolute;
  top: 55%;
  left: 50%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 30px;
  color: #fff;
  background: #fd9535;
  border-radius: 4px;
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: 0.45s;
  transform: scale(0.95);

  :hover {
    border-bottom: solid 2px #d27d00;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    transform: scale(1);
  }
`;

export default Button05;
