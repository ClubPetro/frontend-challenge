import React from 'react';
import Flight from '../../_models/Flight';
import CardTravel from './card-travel/CardTravel';
import { CardGrid, CardWrapper } from './CardContainer.style';


export default function CardContainer({listOfCards, removeFlightEvent, editFlightEvent}:any){
    return(
        <CardGrid>
            {listOfCards.map((e:Flight)=>{
            return <CardWrapper key={e.id}>
                <CardTravel key={e.id} flightData={e} removeFlightEvent={removeFlightEvent} editFlightEvent={editFlightEvent}/>
            </CardWrapper>
            
            })
        }
        </CardGrid>
        
    )
}