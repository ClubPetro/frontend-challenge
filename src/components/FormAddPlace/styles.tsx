import styled from "styled-components";

const Styles = styled.section`
  padding: 10px;
  background: #4f9419;
  box-sizing: border-box;

  .label-input {
    color: #fff;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .input-standard {
    height: 48px;
    outline: none;
    border: 0;
    background: #ffffff;
    border-radius: 7px;
    margin-bottom: 15px;
    color: #868686;
    padding-left: 15px;
  }

  #select-country {
    background-image: url("./assets/img/select.png");
    background-position: calc(100% - 18px) calc(100% - 18px);
    background-repeat: no-repeat;
    appearance: none;
  }

  .button-submited {
    background: #006c18;
    border-radius: 7px;
    border: 0px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    height: 48px;
    outline: none;
    width: 100%;
    transition: 0.5s;
  }

  .button-submited:hover {
    background: #025715;
  }

  @media (min-width: 1320px) {
    .container {
      display: flex;
      height: 210px;
      justify-content: center;
      align-items: center;
    }

    #select-country {
      width: 303px;
      margin-right: 34px;
    }

    #input-place {
      width: calc(455px - 15px - 2px);
      margin-right: 28px;
    }

    #input-meta {
      width: calc(238px - 15px - 2px);
      margin-right: 34px;
    }

    .button-submited {
      width: 203px;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 1440px;
      margin: 0 auto;
    }
  }
`;

export default Styles;
