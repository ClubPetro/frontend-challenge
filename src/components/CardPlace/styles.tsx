import styled from "styled-components";

const Styles = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;

  .card-flag-and-name {
    display: flex;
    flex-direction: column;
    padding-top: 26px;
    padding-left: 14px;
  }

  .card-flag {
    width: 56px;
    height: 34px;
    padding-bottom: 16px;
  }

  .card-country-name {
    font-weight: bold;
    color: #4f9419;
    text-transform: uppercase;
    padding-bottom: 9px;
  }

  .delete-place {
    position: absolute;
    top: 15px;
    right: 11px;
    cursor: pointer;
  }

  .edit-place {
    position: absolute;
    top: 17px;
    right: 51px;
    cursor: pointer;
  }

  .line {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .place-and-meta {
    display: flex;
    flex-direction: column;
    padding-top: 43px;
    padding-left: 26px;
    padding-bottom: 53px;
  }

  .place-description {
    margin: 0px;
    padding-bottom: 11px;
  }

  .meta-date{
    margin: 0px;
  }
`;

export default Styles;
