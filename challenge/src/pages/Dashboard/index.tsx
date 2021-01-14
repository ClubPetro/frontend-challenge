import React from 'react';
import Layout from '../../components/Layout';
import FilterPlaces from '../../components/FilterPlaces';
import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <FilterPlaces />
      <Card />
    </Layout>
  );
};
export default Dashboard;
