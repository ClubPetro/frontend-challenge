import React from 'react';
import CardTravel from './card-travel/CardTravel';
import { CardGrid, CardWrapper } from './CardContainer.style';


export default function CardContainer({listOfCards, removeFlightEvent, editFlightEvent}:any){
    return(
        <CardGrid>
            {listOfCards.map((e:any)=>{
            return <CardWrapper>
                <CardTravel key={e.id} flightData={e} removeFlightEvent={removeFlightEvent} editFlightEvent={editFlightEvent}/>
            </CardWrapper>
            
            })
        }
        </CardGrid>
        
    )
}