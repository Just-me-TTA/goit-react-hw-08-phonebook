import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Greeting = styled.p`
  font-size: 24px;
  color: var(--basic-color);
  text-shadow: 0 0 10px #ffffff;

  @media screen and (max-width: 639px) {
    font-size: 18px;
  }
`;

export const Name = styled.span`
  color: var(--accent-color-2);
`;

export const Button = styled.button`
  font-family: inherit;
  color: var(--basic-white);
  padding: 4px 4px;
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
    font-size: 18px;
  }
`;
