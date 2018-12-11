import styled from 'styled-components';

// Hacer un boton redondo, RECORDATORIO!
// Google cool and easy button animations
// Round corners of buttons

const Button04 = styled.a`
  position: absolute;
  top: 45%;
  left: 50%;
  text-align: center;
  text-transform: uppercase;
  padding: 15px 35px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16 px;
  background: ${props => props.background || 'lightblue'};
  color: ${props => props.color || '#fff'};
  transition: 0.45s;
  display: block;
  box-sizing: border-box;
  letter-spacing: 1px;
  transform: scale(0.9);
  cursor: pointer;

  :hover {
    background: #fff;
    color: #000;
    /* font-size: 33 px; why?? */
    font-weight: bold;
    transform: scale(1);
    letter-spacing: 3px;
    box-shadow: 1px, 1px, #000;
    /* box-shadow: 10px; */
  }
`;

export default Button04;
