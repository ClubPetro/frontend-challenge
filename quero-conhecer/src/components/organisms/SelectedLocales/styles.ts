import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const SelectedLocalesContainer = withStyles(() => ({
  root: {
    padding: '53px 36px',
    flexWrap: 'wrap',
    display: 'flex',
    gap: '30px',
  },
}))(Box);
