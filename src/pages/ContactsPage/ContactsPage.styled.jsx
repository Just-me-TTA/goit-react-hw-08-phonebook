import { IoPersonAddSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const AddBtnText = styled.span`
  display: block;
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 32px;
  text-shadow: 0 0 5px var(--basic-color), 0 0 10px var(--basic-color),
    0 0 20px var(--basic-color), 0 0 40px var(--basic-color),
    0 0 80px var(--basic-color);
  animation: pulsate 1.5s infinite alternate;

  @media screen and (max-width: 639px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  background: radial-gradient(#000000aa, transparent);
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;
  background-color: inherit;
  color: var(--basic-color);
  border: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background: radial-gradient(black, transparent);
    color: var(--accent-color-2);
  }

  @media screen and (max-width: 639px) {
    width: 90%;
  }
`;

export const PersonIcon = styled(IoPersonAddSharp)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 639px) {
    width: 20px;
    height: 20px;
  }
`;
