import { Box } from '@material-ui/core';
import { AddNewLocale } from '../components/organisms/AddNewLocale/AddNewLocale';
import { Header } from '../components/organisms/Header/Header';
import { SelectedLocales } from '../components/organisms/SelectedLocales/SelectedLocales';

export const Dashboard = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Header />
      <SelectedLocales />
      <AddNewLocale />
    </Box>
  );
};
