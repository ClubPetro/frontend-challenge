import {IconButton, TextField} from '@material-ui/core';
import React, {useState } from 'react';
import {ContentWrapper, CountryContainer, CountryImage, CountryName, CustomizedCard, CustomizedCardContent, CustomizedCardHeader, EditContainer, InfoContainer, LineDecoration} from './CardTravel.style';
import {ReactComponent as Pencil} from './../../../images/pencil.svg';
import {ReactComponent as Close} from './../../../images/close.svg';
import {ReactComponent as Done} from './../../../images/done.svg';
import {ReactComponent as Cancel} from './../../../images/cancel.svg';
import InputMask from 'react-input-mask';





export default function CardTravel({flightData, removeFlightEvent, editFlightEvent}: any){

    
   const [editState, setEditState] = useState(false);
   const [city, setCity] = useState('');
   const [date, setDate] = useState('');


   /**
    * Função que aciona o estado de edição do componente.
    */
    const toogleEditState = ()=>{
        setEditState(!editState);
        if(!editState){
            setCity(flightData.city);
            setDate(flightData.date);
        }
    }

    return(
        <CustomizedCard>
        <CustomizedCardHeader action={
            <div>
                {
                    editState? <div>
                        <IconButton onClick={()=>{editFlightEvent(flightData.id, city, date);
                        toogleEditState();
                    }}>
                        <Done width="10" height="10"></Done>
                    </IconButton>
                    <IconButton onClick={toogleEditState}>
                    <Cancel width="10" height="10"></Cancel>
                    </IconButton>
                    </div> : <div>
                    <IconButton onClick={toogleEditState}>
                    <Pencil width="10" height="10"></Pencil>
                </IconButton>
                <IconButton onClick={()=>removeFlightEvent(flightData.id)}>
                    <Close width="10" height="10"></Close>
                </IconButton>
                    </div>
                }
            </div>
            
        }> 
        </CustomizedCardHeader>
        {/* <CardMedia component="img" image={flightData?.country?.flag} height="34"/> */}
        <CustomizedCardContent>
            {
                <ContentWrapper>
                <CountryContainer>
                    <CountryImage src={flightData?.country?.flag}/>
                    <CountryName>{flightData?.country?.translations.br}</CountryName>
                    <LineDecoration/>
                 </CountryContainer>

                 {editState? <EditContainer>
                        <TextField variant="outlined" defaultValue={flightData.city} onChange={(event)=>{setCity(event.target.value)}}>

                        </TextField>

                        <InputMask mask="99/9999" defaultValue={flightData.date} onChange={(event)=>{setDate(event.target.value)}}>
                        {(inputProps: any)=>
                        <TextField {...inputProps} variant="outlined" >
                        </TextField>
                        }
                        </InputMask>
                        

                    </EditContainer>:
                    <InfoContainer>
                          <p>Local: {flightData.city}</p>
                        <p>Data: {flightData.date?.toString()}</p>
                    </InfoContainer>
                }

                </ContentWrapper>
                
  

                
                  
                
            }
        </CustomizedCardContent>
        </CustomizedCard>

    )
}