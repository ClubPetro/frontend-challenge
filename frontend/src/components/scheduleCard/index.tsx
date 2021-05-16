import React from 'react';
import { ScheduleContext } from '../../context/scheduleContext';
import DeleteIcon from './components/deleteIcon';
import EditIcon from './components/editIcon';
import ScheduleWrapper from './styles';

interface ScheduleCardProps {
    id: string;
    imgUri: string;
    country: string;
    location: string;
    date: string;
}

const ScheduleCard = ({
    id,
    country,
    date,
    imgUri,
    location,
}: ScheduleCardProps): React.ReactElement => {
    const { setScheduleList, scheduleList } = React.useContext(ScheduleContext);

    function handleDeleteClick() {
        const filteredArray = scheduleList.filter(item => item.id !== id);
        setScheduleList(filteredArray);
    }

    return (
        <ScheduleWrapper>
            <img src={imgUri} alt={country} />
            <h2>{country}</h2>
            <EditIcon className="editIcon" />
            <DeleteIcon className="deleteIcon" onClick={handleDeleteClick} />
            <hr />
            <p className="location">Local: {location} </p>
            <p className="date">Meta: {date}</p>
        </ScheduleWrapper>
    );
};

export default ScheduleCard;
