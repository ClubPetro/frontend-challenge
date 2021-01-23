import { shade } from 'polished';
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 50px;

  @media(max-width: 1340px){
  grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 1060px){
  grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 800px){
  grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 530px){
  grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.div`
  display:flex;
  align-items: center;
  height: 247px;
  background-color: #4f9419;

  @media(max-width: 1280px){
    height: 360px;
  }


  form {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    color: #ffffff;

    @media(max-width: 1280px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

    .field-group {
      display: flex;
      flex-direction: column;

      label{
        margin-bottom: 2px;
        line-height: 19px;

      @media(max-width: 1280px){
        margin-top: 15px;
      }

      }
    }

    #place, #goal {
      height: 48px;
      background-color: #ffffff;
      border: 0;
      border-radius: 7px;

      padding: 18px;
      line-height: 19px;
      color: #868686;

      @media(max-width: 1280px){
        width: 303px;
      }

      &::placeholder {
        color: #868686;
      }
    }


    #place {
      width: 455px;
      @media(max-width: 1280px){
        width: 303px;
      }
    }

    #meta {
      width: 238px;
      @media(max-width: 1280px){
        width: 303px;
      }
    }


    button {
      background-color: #006C18;
      color: #ffffff;
      border: 0;
      border-radius: 7px;
      width: 203px;
      height: 49px;
      transition: background-color 0.2s;

      @media(max-width: 1280px){
        margin-top: 25px;
        margin-bottom: 15px;
      }

      &:hover {
        background-color: ${shade(0.2, '#006C18')};
      }
    }
  }
`;
