import { useEffect, useState } from 'react'
import { Divider } from "@mui/material";
import { CardContainer } from "./style";
import EditIcon from '../../images/icons/mdi_edit.svg'
import DeleteIcon from '../../images/icons/mdi_close.svg'
import InputMask from 'react-input-mask';



interface CardProps {
    goal: string
    place: string
    country: string
    flag: string
    id: number
    handleDelete: Function
    handleEdit: Function
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CardComponent(props: CardProps){

    const [editMode, setEditMode] = useState(false);
    const [place, setPlace] = useState(props.place)
    const [goal, setGoal] = useState(props.goal)

    const changeEditMode = () => setEditMode(!editMode);

    useEffect(() => {
        if(!editMode){
            if(place !== props.place || goal !== props.goal){
                const newCard = { id: props.id, flag: props.flag, country: props.country, place, goal }
                props.handleEdit(newCard)
            }
        }
    }, [editMode])

    return(
        <CardContainer>
            <div className="icons">
                <img alt="edit button" src={EditIcon} onClick={changeEditMode}/>
                <img alt="delete button" src={DeleteIcon} onClick={() => props.handleDelete(props.id)}/>
            </div>
            <img className="flag" alt={props.country + " flag"} src={props.flag}/>
            <h5>{props.country}</h5>
            <Divider />
            <div className="spans">
                <span>Local: {editMode ? 
                    <input 
                        value={place} 
                        onChange={e => setPlace(e.target.value)} 
                        disabled={!editMode}
                    />
                    :
                    place
                    }
                </span>
                <span>Meta: {editMode ? 
                    <InputMask 
                        mask="99/9999" 
                        value={goal}
                        onChange={e => setGoal(e.target.value)}
                        disabled={!editMode} 
                    /> 
                    : 
                    goal
                    }
                   
                </span>
            </div>
        </CardContainer>
    )
}