import React, {useState} from 'react';


export default function CardContainer({listOfCards}:any){
    return(
        <div>
            <p>Div aparecendo</p>
            {listOfCards.map((e:any)=>{
                console.log("e rendered: ", e);
            return <div>
                <h2>{e.country}</h2>
                <h2>{e.city}</h2>
                <h2>{e.date?.toString()}</h2>
            </div>
            })
        }
        </div>
        
    )
}