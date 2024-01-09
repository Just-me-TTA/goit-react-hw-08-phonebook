import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  padding: 12px 24px;
  box-shadow: 0px 2px 4px -1px #21ecff9a, 0px 4px 5px 0px #21ecff5a,
    0px 1px 10px 0px #21ecff3c;
  background-color: #000000;

  @media screen and (max-width: 639px) {
    flex-direction: column-reverse;
    gap: 8px;
  }
`;
