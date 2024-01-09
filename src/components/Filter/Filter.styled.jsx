import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const FilterField = styled.input`
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 4px 10px;
  background-color: inherit;
  color: var(--basic-color);
  outline: none;
  border: 1px solid var(--basic-color);
  border-radius: 8px;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 1rem var(--basic-color);

  &:focus {
    box-shadow: 0 0 0.2rem var(--basic-white), 0 0 2rem var(--basic-color);
  }

  @media screen and (max-width: 639px) {
    width: 90%;
    font-size: 16px;
  }
`;
