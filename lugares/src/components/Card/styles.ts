import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 5px 7px 0px rgba(50, 50, 50, 0.43);
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  margin: 20px;

  nav {
    display: flex;
    justify-content: space-between;
    margin: 8px;
  }

  .actions img {
    width: 18px;
    height: 18px;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .flag {
    width: 56px;
    height: 34px;
  }

  .infos{
      display:flex;
      flex:1;
      flex-direction:column;
      justify-content:center;
   
  }
  h3 {
    color: #4f9419;
    font-weight: bold;
    line-height: 20px;
  }

  hr {
    width: 95%;
    border: 1px solid #ababab;
  }
  h6 {
    margin-left: 8px;
  }
`;
