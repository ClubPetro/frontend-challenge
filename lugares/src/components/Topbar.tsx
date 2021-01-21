import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar } from '@material-ui/core';

//------------------- Custom Material Ui -------------------//
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      padding: 0,
    },
  }),
);

const Topbar: React.FC = () => {
  const classes = useStyles();

  return (
    <section style={{ background: '#000' }}>
      <Container maxWidth="lg">
        <AppBar position="static" color="transparent" className={classes.root}>
          <Toolbar variant="dense" className={classes.toolbar}>
            <img src="./static/lugares-logo.png" alt='logo'/>
          </Toolbar>
        </AppBar>
      </Container>
    </section>
  );
}

export default Topbar;
