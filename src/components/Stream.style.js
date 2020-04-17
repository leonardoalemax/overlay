import styled from 'styled-components';
import { block, imageNormalize } from '../cumons/shared.style';

export const Container = styled.div`
  width: 1610px;
  padding: 12px;
  height: 1080px;
  box-sizing: border-box;
`;

export const Head = styled.div`
  width: 1560px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const Cam = styled.div`
  width: 150px;
  height: 110px;
  ${block}
`;

export const Logo = styled.div`
  width: 370px;
  height: 90px;
  ${imageNormalize}
`;

export const Social = styled.div`
  width: 208px;
  height: 80px;
  ${imageNormalize}
`;

export const Video = styled.div`
  width: 1560px;
  height: ${ props => props.height || '878px'};
  ${block}
`;