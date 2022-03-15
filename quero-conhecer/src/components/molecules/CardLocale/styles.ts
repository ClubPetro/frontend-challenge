import { Card as MuiCard } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const Card = withStyles(() => ({
  root: {
    minWidth: '250px',
    maxWidth: '250px',
    minHeight: '250px',
    maxHeight: '250px',
    padding: '26px 14px',
  },
}))(MuiCard);
