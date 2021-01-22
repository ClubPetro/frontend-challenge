import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px;
  
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #4f9419;
    min-width: 400px;
    height: 500px;
    padding: 20px;
    border-radius: 7px;

    #country {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      width: 303px;
      border-radius: 7px;

      img {
      width: 100px;
      height: 100px;
    }

      strong {
        text-transform: uppercase;
        margin-bottom: 5px;
        color: #4f9419;
        max-width: 290px;
      }
    }

    

     input, button {
      width: 303px;
      height: 48px;
      border: 0;
      border-radius: 7px;

     }

     input {
      margin-top: 5px;
      padding: 18px;
      color: #868686;

      &::placeholder {
        color: #868686;
      }
     }

     button {
       background-color: #006C18;
       color: #fff;
       margin-top: 10px;
       transition: background-color 0.2s;

       &:hover {
         background-color: ${shade(0.2, '#006C10')};
       }
     }
  }
`;
