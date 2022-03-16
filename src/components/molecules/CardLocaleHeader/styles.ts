import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const CardHeader = withStyles((theme) => ({
  root: {
    paddingBottom: '9px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'relative',
  },
}))(Box);
