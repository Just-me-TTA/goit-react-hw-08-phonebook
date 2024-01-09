import styled from 'styled-components';
import brickWallImage from '../../images/brick-wall-background.jpg';

export const Container = styled.div`
  padding: 40px;

  @media screen and (max-width: 639px) {
    padding: 24px 8px;
  }
`;

export const Wrap = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #020202be 40%, #0000008a 100%),
    center / cover fixed no-repeat url(${brickWallImage});
`;
