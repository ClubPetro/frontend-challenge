import React from 'react';
import DeleteIcon from './components/deleteIcon';
import EditIcon from './components/editIcon';
import ScheduleWrapper from './styles';

const ScheduleCard = (): React.ReactElement => {
    return (
        <ScheduleWrapper>
            <img src="https://restcountries.eu/data/bra.svg" alt="Brasil" />
            <h2>Brasil</h2>
            <EditIcon className="editIcon" />
            <DeleteIcon className="deleteIcon" />
            <hr />
            <p className="location">Local: Balneario Camboriu </p>
            <p className="date">Meta: 04/2022</p>
        </ScheduleWrapper>
    );
};

export default ScheduleCard;
