import styled from 'styled-components';

const Button02 = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  letter-spacing: 2px;
  font-size: 20px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #03a9f4;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }
  :hover:before {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #000;
    z-index: -1;
    box-sizing: border-box;
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }
  :hover:after {
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }
`;

export default Button02;
