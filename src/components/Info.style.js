import styled from 'styled-components';
import { block, imageNormalize, text } from '../cumons/shared.style';

export const Container = styled.div`
  width: 310px;
  height: 1080px;
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  h3 {
    ${text}
  };
`;

export const Head = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: left;
`;

export const Display = styled.div`
  width: 270px;
  box-sizing: border-box;
  ${imageNormalize}
  ${block}
`;

export const Quest = styled.div`
  width: 234px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 20px;
  text-align: left;
  padding: 8px;
  box-sizing: content-box;
  ${block}

  h3 {
    ${text}
    font-size: 18px;
    font-weight: 300;
    line-height: 20px;
    margin: 4px;
  };

  img {
    float: left;
    width: 40px;
    height: 40px;
    padding: 4px;
    margin-right: 8px;
  };
`;

export const Quests = styled.div`
`;

export const Custom = styled.div`
  width: 270px;
`;
