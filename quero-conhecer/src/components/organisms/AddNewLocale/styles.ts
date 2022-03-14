import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const AddNewLocaleContainer = withStyles((theme) => ({
  root: {
    padding: '73px 32px',
    backgroundColor: theme.palette.primary.main,
    gap: '34px',
  },
}))(Box);
