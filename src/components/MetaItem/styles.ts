import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 49px;
  margin-right: 72px;
  margin-left: 10px;
  margin-bottom: 73px;
  border: none;

  margin-top: 30px;

  background: #006c18;
  border-radius: 7px;

  span {
    color: #fff;
  }
`;

export const Card = styled.div`
  min-width: 250px;
  height: 250px;
  margin-top: 56px;
  margin-left: 36px;
  margin-right: 36px;

  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlagCard = styled.div`
  img {
    margin-left: 14px;
    margin-top: 26px;
    width: 56px;
    height: 34px;
  }

  p {
    color: #4f9419;
    margin-left: 14px;
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const EditCard = styled.div`
  button {
    border: none;
    margin-right: 15px;
    margin-top: 15px;
    background: #fff;
  }

  img {
    background-color: #fff;
  }
`;

export const LocalCard = styled.div`
  hr {
    margin-top: 5px;
    margin-bottom: 43px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const InfoCard = styled.div`
  display: grid;
  justify-content: flex-start;
  margin-left: 20px;
  p {
    font-size: 16px;
  }
`;
