import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 100px;
  margin-bottom: 28px;
  animation: pulsate 1.5s infinite alternate;

  @media screen and (max-width: 1279px) {
    font-size: 80px;
  }

  @media screen and (max-width: 639px) {
    font-size: 32px;
  }
`;

export const Slogan = styled.p`
  font-weight: normal;
  font-size: 44px;
  animation: pulsate 1.5s infinite alternate;

  @media screen and (max-width: 1279px) {
    font-size: 36px;
  }

  @media screen and (max-width: 639px) {
    font-size: 20px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  margin: 96px auto 0 auto;
  padding: 40px 20px;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 4px solid var(--basic-white);
  border-radius: 12px;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),
    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),
    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);
  background-color: #0000007e;

  &::before {
    content: '»';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -120px;
    font-size: 240px;
    text-shadow: 0 0 5px var(--basic-color), 0 0 10px var(--basic-color),
      0 0 20px var(--basic-color), 0 0 40px var(--basic-color),
      0 0 80px var(--basic-color);
    animation: flicker 600ms infinite alternate;
  }

  &::after {
    content: '«';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -120px;
    font-size: 240px;
    text-shadow: 0 0 5px var(--basic-color), 0 0 10px var(--basic-color),
      0 0 20px var(--basic-color), 0 0 40px var(--basic-color),
      0 0 80px var(--basic-color);
    animation: flicker 600ms infinite alternate;
  }

  @media screen and (max-width: 639px) {
    margin: 40px auto 0 auto;
    padding: 80px 20px;

    &::before {
      font-size: 82px;
      left: -36px;
    }
    &::after {
      font-size: 82px;
      right: -36px;
    }
  }
`;
