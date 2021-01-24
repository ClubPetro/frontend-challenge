import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  max-height: 250px;
  padding: 10px;
  border-radius: 10px;

  margin: 53px auto 0 ; // deletar
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .coutry-name {
      display: flex;
      width: 100%;
      padding-left: 4px;
      
      strong {
      color: #4F9419;
      width: 100%;
      text-transform: uppercase;
    }
    }

`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  
  .country-flag {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 56px;
      height: 34px;
      margin-bottom: 10px;
    }

    
  }
  .buttons {
    display: flex;
    align-self: flex-start;
    width: 60px;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: none;
    }

    }

    
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
  padding: 50px 20px;

  border-top:  1px solid #ababab;
  
  p {
    text-align: left;
    & + p {
      margin-top: 10px;
    }
  }
`;


