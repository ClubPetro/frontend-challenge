import React, { useEffect, useState } from 'react';
import { IGoal } from '../../Interfaces';
import { Container, Image, InputPlace, InputDate, AddButton } from './styles';
import dbApi from '../../services/dbApi';

interface IProps {
  enabled: boolean;
  goal: IGoal;
}

const CardUpdateModal: React.FC<IProps> = ({ enabled, goal }) => {
  const [goalUpdated, setGoalUpdated] = useState<IGoal>(goal);
  const handleDelete = async () => {
    if (goal.id) await dbApi.updateGoal(goal.id, goalUpdated);
    window.location.reload();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setGoalUpdated({
      ...goalUpdated,
      [name]: value,
    });
  };
  return (
    <Container visible={enabled}>
      <div>
        <Image image={goal.country.flag} />
        <form>
          <div>
            <h1>Local</h1>
            <InputPlace
              name="spot"
              placeholder="Digite o local que deseja conhecer"
              value={goalUpdated?.spot}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Meta</h1>
            <InputDate
              name="date"
              mask="99/9999"
              placeholder="mês/ano"
              value={goalUpdated?.date}
              onChange={handleChange}
            />
          </div>
          <AddButton type="button" onClick={handleDelete}>
            Salvar
          </AddButton>
        </form>
      </div>
    </Container>
  );
};

export default CardUpdateModal;
