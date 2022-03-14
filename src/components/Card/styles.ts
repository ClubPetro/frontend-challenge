import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 15px;
  padding-inline: 14px ;
  padding-top: 26px ;
  position: relative ;

  img{
    width: 56px;
    height: 34px;
  }
  h1{
    color: #4F9419;
    font-weight: 700;
    font-size: 16px;
  }
  .localText{
    font-weight: 400;
    color: #000;
    font-size: 16px;
  }
  .metaText{
    font-weight: 400;
    color: #000;
    font-size: 16px;
    margin-top: 11px ;
  }
`;

export const Options = styled.div`
  position: absolute;
  right: 16px;
  justify-content: space-between;
  top: 19px;
`
export const Line = styled.div`
  background-color: #ABABAB;
  height: 1px;
  width: 100%;
`
export const ContentContainer = styled.div`
  padding-inline: 12px;
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  height: 50%;
`