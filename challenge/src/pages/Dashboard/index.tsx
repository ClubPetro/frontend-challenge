import React from 'react';
import Header from '../../components/Header';
import FilterPlaces from '../../components/FilterPlaces';
import Card from '../../components/Card';
import * as S from './styled';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <FilterPlaces />
      <Card />
    </S.Container>
  );
};
export default Dashboard;
