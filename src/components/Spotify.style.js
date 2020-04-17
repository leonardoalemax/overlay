import styled from 'styled-components';
import { text } from '../cumons/shared.style';

export const Container = styled.div`
  width: 450px;
  height: 100px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  img {
    width: 100px;
    height: 100px;
  }
  
`;

export const Info = styled.div`
  width: 100%;
  padding: 0px 16px;
  h3 {
      ${text}
      font-size: 22px;
      margin: 0px;
      padding: 0px;
  };

  p, span {
      ${text}
      margin: 0px;
      padding: 0px;
  };
`;