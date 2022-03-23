import styled from 'styled-components';

export const Main = styled.section`
  .add__content {
    height: auto;
    padding: 80px 0;
    background: #4f9419;

    span {
      color: #ffffff;
    }

    > div {
      display: flex;
      align-items: center;
      height: inherit;
    }
  }

  .view__content {
    padding: 25px 0;
    > div {
      display: flex;
      align-items: center;
      height: inherit;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 280px;
  padding: 15px;
  box-shadow: 3px 8px 14px -3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 3px 8px 14px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 8px 14px -3px rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  display: flex;
  flex-direction: column;

  .card__head {
    position: relative;

    > img:nth-child(1) {
      object-fit: contain;
    }

    > img:nth-child(2) {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    > img:nth-child(3) {
      position: absolute;
      top: 10px;
      right: 40px;
      cursor: pointer;
    }
  }

  .card__body {
    height: 100%;

    .card__body__header {
      margin-top: 10px;
      height: auto;
      position: relative;
      padding-bottom: 8px;

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        background: #000;
        height: 1px;
        width: 100%;
      }

      h3 {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #4f9419;
      }
    }

    .card__body__content {
      padding: 0 10px;
      height: calc(100% - 44.8px);
      display: flex;
      flex: 1 1 100%;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
