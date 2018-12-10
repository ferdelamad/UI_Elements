import styled from 'styled-components';

const Button03 = styled.a`
  top: 30%;
  left: 50%;
  position: absolute;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  padding: 15px 30px;
  border: 2px solid ${props => props.borderColor || 'rebeccapurple'};
  transform: scale(0.9);
  transition: 0.3s;
  font-family: Helvetica, sans-serif;
  font-size: 17px;
  background: #fff;
  cursor: pointer;

  :hover {
    transform: scale(1);
    background: ${props => props.background || 'rebeccapurple'};
    color: #fff;
    font-weight: 500;
  }
`;

export default Button03;
