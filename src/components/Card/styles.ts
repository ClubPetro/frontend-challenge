import styled from 'styled-components';
import { Card, CardMedia } from '@material-ui/core';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 2px gray;
  padding: 26px 10px;
  & > div.card-padding {
    & > h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #4f9419;
    }
  }
`;

export const Image = styled(CardMedia)`
  width: 56px;
  height: 34px;
`;

/* div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div:first-of-type {
      display: flex;
      flex-direction: column;
      img {
        width: 56px;
        height: 34px;
      }
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #4f9419;
      }
    }
    div:last-of-type {
      button {
      }
      button {
      }
    }
  }
  div:last-of-type {
    p {
    }
    p {
    }
  } */
