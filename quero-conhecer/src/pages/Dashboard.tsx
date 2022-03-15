import { Box } from '@material-ui/core';
import { ReactElement } from 'react';
import { AddNewLocale } from '../components/organisms/AddNewLocale/AddNewLocale';
import { Header } from '../components/organisms/Header/Header';
import { SelectedLocales } from '../components/organisms/SelectedLocales/SelectedLocales';

export const Dashboard = (): ReactElement => {
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <Header />
      <AddNewLocale />
      <SelectedLocales />
    </Box>
  );
};
