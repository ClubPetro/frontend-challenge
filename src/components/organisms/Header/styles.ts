import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const HeaderContainer = withStyles((theme) => ({
  root: {
    padding: '0px 56px',
    backgroundColor: theme.palette.common.black,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
}))(Box);
