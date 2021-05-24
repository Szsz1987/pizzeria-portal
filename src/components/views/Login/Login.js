import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Login.module.scss';


const useStyles = makeStyles((theme) => ({
  paper: {

    marginTop: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
    border: '2px solid darkgrey',
    padding: '15px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={styles.component}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8}>
          <div className={classes.root}>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;