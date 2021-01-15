import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

export const InputContainer = styled.div`
  background-color: #4f9419;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
`;

export const Button = styled.button`
  width: 203px;
  height: 49px;
  margin-right: 72px;
  margin-bottom: 73px;
  border: none;

  margin-top: 151px;

  background: #006c18;
  border-radius: 7px;

  span {
    color: #fff;
  }
`;

export const ResultContainer = styled.div`
  display: grid;
  margin-bottom: 56px;
  width: 100%;
  max-width: 1440px;

  grid-template-columns: 280px 280px 280px 280px 0px;
`;
