import { CardContent, CardHeader, Card, IconButton, TextField, CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {CustomizedCard} from './CardTravel.style';



export default function CardTravel({flightData, removeFlightEvent, editFlightEvent}: any){

    
   const [editState, setEditState] = useState(false);
   const [city, setCity] = useState('');
   const [date, setDate] = useState('');

    const toogleEditState = ()=>{
        setEditState(!editState);
    }

    return(
        <CustomizedCard>
        <CardHeader title={flightData.country.name} action={
            <div>
                {
                    editState? <div><IconButton onClick={toogleEditState}>
                    e
                    </IconButton>
                    <IconButton onClick={()=>{editFlightEvent(flightData.id, city, date);
                        toogleEditState();
                    }}>
                        x
                    </IconButton></div> : <div>
                    <IconButton onClick={toogleEditState}>
                t
                </IconButton>
                <IconButton onClick={()=>removeFlightEvent(flightData.id)}>
                    y
                </IconButton>
                    </div>
                }
            </div>
            
        }> 
        </CardHeader>
        <CardMedia component="img" image={flightData?.country?.flag} height="50"/>
        <CardContent>
            {
                editState? <div>
                        <TextField defaultValue={flightData.city} onChange={(event)=>{setCity(event.target.value)}}>

                        </TextField>
                        <TextField defaultValue={flightData.date} onChange={(event)=>{setDate(event.target.value)}}>

                        </TextField>

                    </div>:
                    <div>
                          <p>Local: {flightData.city}</p>
                        <p>Data: {flightData.date?.toString()}</p>
                    </div>
                  
                
            }
        </CardContent>
        </CustomizedCard>

    )
}