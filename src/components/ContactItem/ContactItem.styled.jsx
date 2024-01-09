import { IoTrashBinSharp } from 'react-icons/io5';
import { TbEdit } from 'react-icons/tb';
import styled from 'styled-components';

export const Letter = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--basic-color);
  color: #000000;
  background-color: var(--basic-color);
  font-size: 16px;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 1rem var(--basic-color);
  transition: all 0.3s ease;
`;

export const BinIcon = styled(IoTrashBinSharp)`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 639px) {
    width: 16px;
    height: 16px;
  }
`;

export const EditIcon = styled(TbEdit)`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 639px) {
    width: 16px;
    height: 16px;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  color: var(--basic-white);
  width: 28px;
  height: 28px;
  padding: 4px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  color: var(--basic-color);
  border: none;
  z-index: 2;
  margin-left: 16px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 20%;
    height: 20%;
    border: 1px solid;

    z-index: -1;
    transition: all 0.3s ease;
  }
  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: var(--basic-color);
    border-left-color: var(--basic-color);
  }
  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: var(--basic-color);
    border-right-color: var(--basic-color);
  }
  &:hover:before,
  &:hover:after {
    border-color: var(--basic-color);
    height: 100%;
    width: 100%;
    box-shadow: 0 0 5px var(--basic-color), 0 0 5px var(--basic-color) inset;
  }

  @media screen and (max-width: 639px) {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--basic-color);
  text-shadow: 0 0 10px var(--basic-white);
  margin-bottom: 20px;
  transition: all 100ms ease-in-out;

  &:hover {
    padding: 12px;
    border: 1px solid var(--basic-color);
    border-radius: 12px;
    box-shadow: 0 0 0.2rem var(--basic-white), 0 0 1rem var(--basic-color);
  }

  &:hover ${Letter} {
    color: var(--basic-color);
    background-color: #000000;
  }

  &:hover ${Button} {
    color: var(--lighter-color);
  }

  @media screen and (max-width: 639px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 639px) {
    flex-direction: column;
    align-items: start;
    word-break: break-all;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 12px;
`;
