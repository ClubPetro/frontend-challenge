import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;

  .container {
    box-sizing: border-box;
    width: 300px;
    padding: 16px;
    background: #ffffff;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .contente {
    display: flex;
    justify-content: space-between;
    height: 34px
  }

  .flag-and-Name {
    display: flex;
    align-items: center;
  }

  .close {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .flag {
    width: 56px;
    height: 34px;
    margin-right: 10px
  }

  .country-name {
    margin: 0;
    color: #868686;
  }

  .input-button-edit {
    margin-top: 20px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .button-edit {
    width: 100%;
    border: 0;
    border-radius: 8px;
    height: 40px;
    background: #006c18;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
  }

  .button-edit:hover {
    background: #025715;
  }

  .input-edit-standard {
    height: 40px;
    outline: none;
    border: 1px solid #868686;
    background: #ffffff;
    border-radius: 7px;
    color: #868686;
    padding-left: 15px;
  }

  .input-place-edit {
    color: #868686;
  }
`;

export default Styles;
