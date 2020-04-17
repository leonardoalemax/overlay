import styled from 'styled-components';
import { text } from '../cumons/shared.style';

export const Container = styled.div`
  width: 100%;
`;

export const Timer = styled.h5`
  ${text}
  font-size: 46px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
  margin-bottom: 3px;
  span {
    width: 260px;
    display: block;
    text-align: left;
  }
`;
