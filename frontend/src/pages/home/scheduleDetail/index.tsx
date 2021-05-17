import React, { useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Button from '../../../components/button';
import InputMaskComponent from '../../../components/inputMask';
import SelectInput from '../../../components/selectInput';
import TextInput from '../../../components/textInput';
import { ScheduleContext } from '../../../context/scheduleContext';
import { handleSelectInputChange, handleTextInputChange } from '../helper';
import Wrapper from './styles';

type IProps = RouteComponentProps<{ id: string }>;

const ScheduleDetail = (props: IProps): React.ReactElement => {
    const { scheduleList } = useContext(ScheduleContext);

    const [schedule, setSchedule] = React.useState<Schedule>({
        country: '',
        date: '',
        flag: '',
        id: '',
        location: '',
    });

    const [formData, setFormData] = React.useState<ScheduleFormData>({
        country: '',
        date: '',
        location: '',
    });

    React.useEffect(() => {
        const filteredArr = scheduleList.filter(
            item => item.id === props.match.params.id,
        );
        setSchedule(filteredArr[0]);
        // eslint-disable-next-line react/destructuring-assignment
    }, [props.match.params.id, scheduleList]);
    return (
        <Wrapper>
            <h1>Edite os detalhes de sua meta!</h1>
            <img src={schedule.flag} alt={schedule.country} />
            <form action="">
                <h3>País</h3>
                <SelectInput
                    id="country"
                    options={[]}
                    value={schedule.country}
                    border
                    inputSize="large"
                />
                <h3>Local</h3>
                <TextInput inputSize="large" border value={schedule.location} />
                <h3>Meta</h3>
                <InputMaskComponent
                    value={schedule.date}
                    inputSize="large"
                    id="date"
                    placeholder="mês/ano"
                    border
                />
                <Button theme="primary">Confirmar</Button>
                <Link to="/">
                    <Button theme="secondary">Cancelar</Button>
                </Link>
            </form>
        </Wrapper>
    );
};

export default ScheduleDetail;
