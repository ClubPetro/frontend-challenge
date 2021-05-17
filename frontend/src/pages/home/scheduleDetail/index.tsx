import React from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import Button from '../../../components/button';
import InputMaskComponent from '../../../components/inputMask';
import SelectInput from '../../../components/selectInput';
import TextInput from '../../../components/textInput';
import { CountryContext } from '../../../context/countryContext';
import { useScheduleContext } from '../../../context/scheduleContext';
import { parseApiDataToStringArray } from '../helper';
import {
    filterCurrentSchedule,
    handleFormSubmit,
    handleInputChange,
    handleSelectChange,
} from './helper';
import Wrapper from './styles';

type IProps = RouteComponentProps<{ id: string }>;

const ScheduleDetail = ({ match }: IProps): React.ReactElement => {
    const { scheduleList, setScheduleList } = useScheduleContext();
    const { countryList } = React.useContext(CountryContext);

    const countryNameList = parseApiDataToStringArray(countryList);
    const scheduleId = match.params.id;

    const history = useHistory();

    const [schedule, setSchedule] = React.useState<Schedule>({
        country: '',
        date: '',
        flag: '',
        id: '',
        location: '',
    });

    React.useEffect(() => {
        filterCurrentSchedule(scheduleList, setSchedule, scheduleId);
    }, [scheduleId, scheduleList]);

    return (
        <Wrapper>
            <h1>Edite os detalhes de sua meta!</h1>
            <img src={schedule.flag} alt={schedule.country} />
            <form
                onSubmit={event => {
                    handleFormSubmit(
                        event,
                        scheduleList,
                        setScheduleList,
                        schedule,
                    );
                    history.push('/');
                }}
            >
                <h3>País</h3>
                <SelectInput
                    id="country"
                    options={countryNameList}
                    value={schedule.country}
                    border
                    inputSize="large"
                    onChange={event =>
                        handleSelectChange(
                            event,
                            schedule,
                            setSchedule,
                            countryList,
                        )
                    }
                />
                <h3>Local</h3>
                <TextInput
                    inputSize="large"
                    border
                    value={schedule.location}
                    id="location"
                    onChange={event =>
                        handleInputChange(event, schedule, setSchedule)
                    }
                />
                <h3>Meta</h3>
                <InputMaskComponent
                    value={schedule.date}
                    inputSize="large"
                    id="date"
                    placeholder="mês/ano"
                    border
                    onChange={event =>
                        handleInputChange(event, schedule, setSchedule)
                    }
                />
                <Button theme="primary" type="submit">
                    Confirmar
                </Button>
                <Link to="/">
                    <Button theme="secondary">Cancelar</Button>
                </Link>
            </form>
        </Wrapper>
    );
};

export default ScheduleDetail;
