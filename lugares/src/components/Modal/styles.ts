import styled, { css } from "styled-components";
import { shade } from "polished";

interface ModalProps {
  isVisible: boolean;
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  border-radius: 10px;
  opacity: 0.95;
  width: 50%;
  height: 60%;
  @media (max-width: 800px) {
    width: 95%;
    height: 60%;
  }
  margin: auto;
  top: 100px;
  left: 0px;
  opacity: 0;
  z-index: -99999;
  right: 0;
  transition: opacity 0.5s;
  background-color: #00917c;
  border: 1px white solid;
  padding-left: 5%;
  box-sizing: border-box;

  ${(props) => {
    if (props.isVisible)
      return css`
        opacity: 1;
        z-index: 1;
      `;
  }};

  b {
    font-weight: bold;
  }
  .info {
    color: white;
    font-weight: bold;
    line-height:20px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    button {
      border: none;
      background: #fff;
      margin: 0px 5px 50px 5px;
      margin-top: 2px;
      border-radius: 5px;
      cursor: pointer;
      right: 0;
      &:hover {
        background-color: ${shade(0.1, "#fff")};
      }
    }
  }

  h2 {
    margin: 15px 0;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  .oldValues {
    background: white;
    display: flex;
    max-width: 280px;
    padding: 5px;
    img {
      width: 20px;
    }
    p {
      margin: 5px;
    }
  }
`;
