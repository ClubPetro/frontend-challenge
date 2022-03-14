import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const SelectedLocalesContainer = withStyles((theme) => ({
  root: {
    padding: '0px 32px',
    backgroundColor: theme.palette.common.black,
  },
}))(Box);
