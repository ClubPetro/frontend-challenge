import React from 'react';
import DeleteIcon from './components/deleteIcon';
import EditIcon from './components/editIcon';
import ScheduleWrapper from './styles';

interface ScheduleCardProps {
    imgUri: string;
    country: string;
    location: string;
    date: string;
}

const ScheduleCard = ({
    country,
    date,
    imgUri,
    location,
}: ScheduleCardProps): React.ReactElement => {
    return (
        <ScheduleWrapper>
            <img src={imgUri} alt={country} />
            <h2>{country}</h2>
            <EditIcon className="editIcon" />
            <DeleteIcon className="deleteIcon" />
            <hr />
            <p className="location">Local: {location} </p>
            <p className="date">Meta: {date}</p>
        </ScheduleWrapper>
    );
};

export default ScheduleCard;
