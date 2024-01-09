import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 639px) {
    gap: 8px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  color: var(--basic-color);
  text-shadow: 0 0 10px #ffffff;

  &.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 639px) {
    font-size: 18px;
  }
`;
