import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { 
  Grid, Card, Box, ButtonGroup, Typography, IconButton,
  DialogActions, DialogContent, Button, Dialog  
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

//---------------------- Interfaces ------------------------//
import { FormDataUpdInterface } from 'pages/Home' 

interface PropsInterface {
  onClickEdit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | number): void;
  formData:  Array<FormDataUpdInterface>
  onClickRemove(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  dialogConfirmDelete(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | number): void;
  onDialog: boolean;
  closeDialog(): void;
}

//------------------- Custom Material Ui -------------------//
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      paddingTop: '50px',
      paddingBottom: '30px',
      flexGrow: 1,
    },
    card: {
      height: '245px',
      width: '245px',
      padding: '5px 10px 8px',
      marginTop: '7px',
      marginBottom: '7px',
      borderRadius: '10px',
      boxShadow: "0px 4px 2px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      '&:hover': {
        background: '#fefefe'
      }
    },
    cardHead: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardIcons: {
      position: 'absolute',
      right: '-5px',
      top: 0
    },
    cardfigure: {
      position: 'relative',
      margin: '15px 0 10px',
      padding: 0
    },
    cardSvg: {
      width: '56px',
      height: '34px'
    },
    cardCountry: {
      fontWeight: 700,
      fontSize: '1rem',
      color: '#4F9419',
      textTransform: 'uppercase'
    },
    carDesc: {
      '& p': {
        color: '#000',
        fontSize: '1rem',
      }
    },
    cardLine: {
      border: '1px solid #ABABAB'
    },
    buttonGroup: {
      marginTop: '10px',
      padding: 0
    },
    iconButton: {
      padding: 0,
      minWidth: '30px'
    },
    icon: {
      color: '#868686',
    },
    respContainer: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: '1346px',
        margin: 'auto'
      },
    }
  }),
);

const CardList: React.FC<PropsInterface> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3} className={classes.respContainer}>
            {props.formData.map((c, idx) => (
              <Grid key={idx} item>
                <Card className={clsx(classes.card)}>
                  <Box className={classes.cardHead}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                        <figure className={classes.cardfigure}>
                          <img className={classes.cardSvg}  src={c.flag} alt='lugares-logo'/>
                        </figure>
                        <Typography noWrap className={classes.cardCountry}>{c.country}</Typography>
                      </Grid>
                    </Grid>

                    <Box className={classes.cardIcons}>
                      <ButtonGroup color="inherit" className={classes.buttonGroup}>
                        <IconButton size="small" onClick={(event) => props.onClickEdit(event, c.id)} data-id={c.id} className={classes.iconButton}>
                          <EditIcon style={{fontSize: '18px'}} className={classes.icon}/>
                        </IconButton>

                        <IconButton onClick={(event) => props.dialogConfirmDelete(event, c.id)} className={classes.iconButton}>
                          <ClearIcon style={{fontSize: '21px'}} className={classes.icon}/>
                        </IconButton>
                      </ButtonGroup>
                    </Box>
                  </Box>

                  <hr className={classes.cardLine}/>

                  <Box fontWeight="fontWeightRegular" fontSize="14" className={classes.carDesc} py={4} pl={1}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                          Local: {c.local}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                          Meta: {c.meta}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog 
        maxWidth="xs" aria-labelledby="customized-dialog-title" open={props.onDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent dividers>
          Tem certeza que deseja deletar?
        </DialogContent>

        <DialogActions>
          <Button size="small" onClick={props.closeDialog} variant="contained" style={{background: '#f44336', color: '#fff'}}>
            Não
          </Button>
          <Button size="small" onClick={(e) => props.onClickRemove(e)} variant="contained" color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CardList;
