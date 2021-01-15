import React from 'react';
import Header from '../../components/Header';
import FilterPlaces from '../../components/FilterPlaces';
import Card from '../../components/Card';
import * as S from './styled';
import * as U from '../../styles/utilities';

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <FilterPlaces />

      <U.ContentLimit>
        <Card />
      </U.ContentLimit>
    </S.Wrapper>
  );
};
export default Dashboard;
