import styled from 'styled-components';

const Button03 = styled.a`
  position: absolute;
  top: 30%;
  left: 50%;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  width: 100px;
  height: 20px;
  padding: 15px 20px;
  border: 2px solid lightblue;
  transform: scale(0.9);
  transition: 0.3s;
  font-family: Helvetica, sans-serif;
  font-size: 17px;
  cursor: pointer;

  :hover {
    transform: scale(1);
    background: lightblue;
    color: #fff;
    font-weight: 500;
  }
`;

export default Button03;
