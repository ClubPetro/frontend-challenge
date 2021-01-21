import styled from 'styled-components';
import { shade } from 'polished';

import InputMask from '../../components/InputMask';
import Input from '../../components/Input';

export const FormInput = styled(Input)`
  @media (min-width: 950px) {
    & + input {
      margin-left: 34px;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 950px) {
    width: 400px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 950px) and (max-width: 1220px) {
    width: 170px;
  }
`;

export const FormInputMask = styled(InputMask)`
  @media (min-width: 950px) {
    & + input {
      margin-left: 34px;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 950px) {
    width: 400px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 950px) and (max-width: 1320px) {
    width: 170px;
  }
`;

export const Header = styled.header`
  background-color: #000;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;

  img {
    margin-left: 52px;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  background-color: #4f9419;
  width: 100%;
  height: 247px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 72px;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    height: 400px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 500px) and (max-width: 950px) {
      flex-direction: column;
      align-items: center;
    }

    > div {
      span {
        display: block;
        color: #fff;
      }

      @media (min-width: 950px) {
        & + div {
          margin-left: 34px;
        }
      }

      @media screen and (min-width: 0px) and (max-width: 950px) {
        width: 400px;
        margin-bottom: 8px;
      }

      @media screen and (min-width: 950px) and (max-width: 1220px) {
        width: 170px;
      }
    }

    button {
      margin-top: 18px;
      background-color: #006c18;
      border-radius: 7px;
      border: 0;
      width: 203px;
      height: 48px;
      color: #fff;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#006C18')};
      }

      @media screen and (min-width: 500px) and (max-width: 950px) {
        margin-top: 8px;
        width: 400px;
      }

      @media screen and (min-width: 950px) {
        margin-left: 34px;
      }
    }
  }
`;

export const CardsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 53px 36px;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    list-style: none;

    @media screen and (min-width: 0px) and (max-width: 570px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }

    @media screen and (min-width: 571px) and (max-width: 830px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 831px) and (max-width: 1350px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1351px) and (max-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      width: 250px;
      height: 250px;
      background: #fff;
      padding: 11px;
      border-radius: 10px;
      position: relative;
      box-shadow: 1px 2px 5px #aaaaaa;

      @media screen and (min-width: 0px) and (max-width: 570px) {
        width: 390px;
        height: 330px;
      }

      img {
        width: 56px;
        height: 34px;
      }

      strong {
        display: block;
        margin: 16px 0 9px;
        text-transform: uppercase;
        font-weight: 700;
        color: #4f9419;
      }

      hr {
        border-color: #ababab;
        margin-bottom: 43px;
      }

      p {
        margin-bottom: 11px;
      }

      div {
        display: flex;
        position: absolute;
        right: 14px;
        top: 10px;

        > div {
          width: 20px;
          justify-content: center;
          top: 0;
          margin-right: 23px;
        }

        button {
          background: transparent;
          border: 0;

          img {
            width: 14px;
            height: 13px;
          }

          & + button {
            margin-left: 23px;
          }
        }
      }
    }
  }
`;
