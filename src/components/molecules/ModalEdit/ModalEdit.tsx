import { Box, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { ReactElement } from 'react';
import { PropsCardLocale } from '../../molecules/CardLocale/CardLocale.interface';
import { FormAddLocale } from '../FormAddLocale/FormAddLocale';

export const ModalEdit = (props: PropsCardLocale): ReactElement => {
  return (
    <Dialog open={true}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent dividers>
        <Box display='flex' flexDirection='column' style={{ gap: '20px' }}>
          <FormAddLocale edit />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
