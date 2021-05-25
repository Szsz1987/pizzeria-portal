import React from 'react';
import 'date-fns';
import styles from './TablesBooking.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const demoBooking = [
  {
    id: '',
    date: '',
    time: '',
    table: '',
    name: '',
    contact: '',
    people: '',
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
  },
}));

const TablesBooking = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Number of people</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" color="primary">
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TablesBooking;