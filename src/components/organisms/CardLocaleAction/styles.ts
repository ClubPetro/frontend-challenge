import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const CardAction = withStyles((theme) => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0,
    color: theme.palette.divider,
    gap: '10px',
  },
}))(Box);
