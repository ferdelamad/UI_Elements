import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translate(-50%,-50%) skewX(-20deg);
  }

  50% {
    transform: translate(-50%,-50%) skewX(20deg);
  }

  100% {
    transform: translate(-50%,-50%) skewX(-20deg);
  }
`;

const Button01 = styled.a`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) skewX(-20deg);
  padding: 10px 20px;
  border: 2px solid #badb01;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  display: block;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    animation: ${animation} 0.2s linear;
    font-size: 18px;
  }
  :before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #badb01;
    mix-blend-mode: multiply;
    transform: scaleX(0);
    transition: 0.5s;
  }
  :hover:before {
    transform: scaleX(1);
    transition-delay: 0.2s;
  }
`;

export default Button01;
