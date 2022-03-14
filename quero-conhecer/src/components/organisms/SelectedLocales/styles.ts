import { Card } from '@material-ui/core';
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

export const CardLocale = withStyles(() => ({
  root: {
    minWidth: '250px',
    maxWidth: '250px',
    minHeight: '250px',
    maxHeight: '250px',
    padding: '26px 14px',
  },
}))(Card);

export const CardHeader = withStyles((theme) => ({
  root: {
    paddingBottom: '9px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'relative',
  },
}))(Box);

export const CardContent = withStyles(() => ({
  root: {
    padding: '43px 14px',
  },
}))(Box);

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
