import styled from 'styled-components'


export const HomePageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    


    .inputColumn {
        display: flex;
        flex-direction: column;
        span {
            color: #FFFFFF;
        }
        input {
            
            
            border: 0px solid black;
            outline: none;
            padding-left: 1vw;
            padding-right: 1vw;
        }
        button {
            height: 48px;
            text-transform: capitalize;
            font-size: 18px;
            font-weight: 400;

           
        }

        .MuiSelect-outlined {
            border: 0px solid black;
        }
    }

    .MuiInput-root {
      
      height: 48px;
      border-radius: 7px;
      width: 100%;
    }
    .MuiInputBase-root {
      background-color: #fff;
      border: 0px;
      height: 48px;
    }

    .MuiButtonBase-root {
        background: #006C18;
        border-radius: 7px;
        color: #fff;
        width: 100%;
        :hover {
            background: #006C18aa;
        }
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: black;
    display: flex;
    
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    box-sizing: border-box;
    padding: 0 4%;

`

export const SearchAreaContainer = styled.div`
    width: 100%;
    min-height: 150px;
    
    background-color: #4F9419;
    display: flex;
    align-items: center;
  
    box-sizing: border-box;

    padding: 5% 5%;

    input {
        width: 100%;
    }


`

export const CardsAreaContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 3% 2%;
    box-sizing: border-box;
`
