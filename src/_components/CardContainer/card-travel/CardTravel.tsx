import { CardContent, CardHeader, Card, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import {CustomizedCard} from './CardTravel.style';



export default function CardTravel({flightData, removeFlightEvent}: any){

   const [editState, setEditState] = useState(false);

    const toogleEditState = ()=>{
        setEditState(!editState);
    }


    return(
        <CustomizedCard>
        <CardHeader title={flightData.country} action={
            <div>
                {
                    editState? <div><IconButton onClick={toogleEditState}>
                    e
                    </IconButton>
                    <IconButton onClick={()=>removeFlightEvent(flightData.id)}>
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
        <CardContent>
            {
                editState? <div><input></input><input></input></div>:
                    <div>
                          <p>Local: {flightData.city}</p>
                        <p>Data: {flightData.date?.toString()}</p>
                    </div>
                  
                
            }
        </CardContent>
        </CustomizedCard>

    )
}