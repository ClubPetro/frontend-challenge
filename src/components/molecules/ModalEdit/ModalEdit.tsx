import { Box, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { ReactElement } from 'react';
import { FormAddLocale } from '../FormAddLocale/FormAddLocale';
import { FormEditLocale } from '../FormEditLocale/FormEditLocale';
import { ModalEditProps } from './ModalEdit.interface';

export const ModalEdit = ({
  item,
  indexPosition,
  open,
  onClose,
}: ModalEditProps): ReactElement => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent dividers>
        <Box display='flex' flexDirection='column' style={{ gap: '20px' }}>
          <FormEditLocale
            item={item}
            indexPosition={indexPosition}
            actionSubmit={onClose}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
