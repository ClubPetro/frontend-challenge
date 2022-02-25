import styled from "styled-components";

export const CardContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 10% 3%;
    position: relative;


    .flag {
        width: 56px;
        height: 34px;
        margin-bottom: 16px;
    }

    .icons {
        img {
            width: 20px;
            height: 20px;
        }
        position: absolute;
        right: 3%;
        top: 10%;
        cursor: pointer;
    }
    
    

    h5 {
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #4F9419;
        text-transform: uppercase;
        margin-bottom: 8px;
        
    }
    .spans {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10% 5%;
        gap: 10px;
        margin-top: 8%;
        text-align: start;
        overflow-wrap: break-word;
        input {
            width: 98% !important;
            
        }
    
    }

`