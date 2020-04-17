import React from 'react';
import styled, { css } from 'styled-components';

export const block = css`
  background-color: ${props => `${props.theme.main}20`};
  box-shadow: ${props => props.theme.shadow.middle};
  border: ${props => `10px solid ${props.theme.main}`};
`;

export const text = css`
  font-size: 18px;
  font-weight: 600;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color};
  text-shadow: ${props => props.theme.shadow.back};
`;

export const imageNormalize = css`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HpStyle = styled.h5`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  ${block}
  span {
    height: 20px;
    padding-left: 4px;
    display:block;
    ${text}
    color: #333;
    font-size: 14px;
    font-weight: 900;
  }
`;

export const Hp = ({ current, max }) => {

  const percentage = (parseInt(current, 10) / parseInt(max, 10)) * 100;

  let status = '#00DA00';
  if (percentage <= 80) {
    status = percentage >= 30 ? '#FFFF00' : '#FF0000';
  }

  return percentage > 0 ? (<HpStyle style={{ borderColor: status }} >
    <span style={{ width: `${percentage}%`, backgroundColor: status }} >
      {`${current}/${max}`}
    </span>
  </HpStyle >
  ) : (<h3>DEAD</h3>);
}