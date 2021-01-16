import React from 'react';
import Header from '../../components/Header';
import FilterPlaces from '../../components/FilterPlaces';
import Card from '../../components/Card';
import Spacing from '../../shared/Spacing';
import * as S from './styled';

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <FilterPlaces />
      <Spacing mb={5} />
      <Card />
    </S.Wrapper>
  );
};
export default Dashboard;
