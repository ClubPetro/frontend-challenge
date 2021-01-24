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
  overflow-wrap: break-word;
  margin: 20px 10px;
  & > div.card-padding {
    padding: 26px 15px;
    & > div.half-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      & > div.flag-area {
        & > h1 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          padding-top: 10px;
          color: #4f9419;
        }
      }
      & > div.delete-edit-area {
        button {
          border: none;
          padding-left: 10px;
          background-color: #ffffff;
        }
      }
    }
    & > div.separator {
      width: 100%;
      height: 0px;
      margin-top: 9px;
      border: 1px solid #ababab;
    }
    & > div.info-area {
      display: block;
      padding: 43px 0 0 26px;
      p:first-of-type {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 11px;
        color: #000000;
      }
    }
  }
`;

export const Image = styled(CardMedia)`
  width: 56px;
  height: 34px;
`;
