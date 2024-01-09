import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormTitle = styled.h2`
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 48px;
  margin-bottom: 24px;
  animation: pulsate 1.5s infinite alternate;

  @media screen and (max-width: 639px) {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const Wrapper = styled.div`
  margin: 32px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  border: 2px solid var(--basic-white);
  border-radius: 12px;
  padding: 40px 32px;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),
    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),
    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);
  background-color: #0000007e;

  @media screen and (max-width: 639px) {
    width: 280px;
    padding: 32px 8px 24px 8px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 400px;

  @media screen and (max-width: 639px) {
    width: 220px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 639px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 20px;
  color: var(--basic-color);
  pointer-events: none;
  transition: 0.5s;

  @media screen and (max-width: 639px) {
    padding: 12px 0;
    font-size: 14px;
  }
`;

export const Border = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 0;
  height: 1px;
  background-color: var(--basic-white);
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),
    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),
    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);
  transition: 0.4s;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  color: var(--basic-color);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--lighter-color);
  outline: none;
  background: transparent;

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -20px;
    left: 0;
    color: var(--lighter-color);
    font-size: 12px;
  }

  &:focus ~ ${Border}, &:valid ~ ${Border} {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }

  @media screen and (max-width: 639px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  font-family: inherit;
  color: var(--basic-white);
  width: 200px;
  height: 32px;
  padding: 4px 10px;
  font-size: 20px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: var(--basic-color);
  border: 1px solid var(--basic-color);
  box-shadow: 0 0 5px var(--basic-color), 0 0 5px var(--basic-color) inset;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: var(--darker-color);
    box-shadow: 0 0 20px var(--darker-color);
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--basic-white);
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
    text-shadow: 0 0 10px var(--basic-white);
  }

  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  width: 80%;
  color: var(--accent-color);
  text-shadow: 0 0 10px var(--basic-white);
  text-align: center;
  margin-bottom: 8px;
  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 639px) {
    width: 200px;
  }
`;

export const AuthError = styled.p`
  width: 80%;
  color: var(--accent-color);
  text-shadow: 0 0 10px var(--basic-white);
  text-align: center;
  margin-bottom: 8px;

  @media screen and (max-width: 639px) {
    width: 200px;
  }
`;
