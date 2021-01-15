import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  height: 247px;
  background-color: #4f9419;

  form {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    color: #ffffff;

    .field-group {
      display: flex;
      flex-direction: column;

      label{
        margin-bottom: 2px;
        line-height: 19px;
      }
    }

    #country, #local, #meta {
      height: 48px;
      background-color: #ffffff;
      border: 0;
      border-radius: 7px;

      padding: 18px;
      line-height: 19px;
      color: #868686;

      &::placeholder {
        color: #868686;
      }
    }

    #country {
      width: 303px;
    }

    #local {
      width: 455px;
    }

    #meta {
      width: 238px;
    }

    button {
      background-color: #006C18;
      color: #ffffff;
      border: 0;
      border-radius: 7px;
      width: 203px;
      height: 49px;
    }
  }
`;
