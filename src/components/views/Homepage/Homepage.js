import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const orders = [
  {id: 1, dish: ['salad', 'pizza'], price: '15$', type: 'remote'},
  {id: 2, dish: ['salad'], price: '15$', type: 'remote'},
  {id: 3, dish: ['salad', 'pizza', 'doughnut'], price: '15$', type: 'local'},
  {id: 4, dish: ['salad', 'pizza', 'doughnut'], price: '15$', type: 'local'},
];

const reservations = [
  {id: 1, type: 'event', time: '12:00 - 13:00', table: '1'},
  {id: 2, type: 'event', time: '13:00 - 14:00', table: '2'},
  {id: 3, type: 'reservation', time: '14:00 - 15:00', table: '2'},
  {id: 4, type: 'reservation', time: '15:00 - 16:00', table: '4'},
  {id: 5, type: 'reservation', time: '16:00 - 17:00', table: '6'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Summary
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Dishes</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.dish.join(', ')}</TableCell>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Table</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations.map(reservation => (
                  <TableRow key={reservation.id}>
                    <TableCell>{reservation.id}</TableCell>
                    <TableCell>{reservation.type}</TableCell>
                    <TableCell>{reservation.time}</TableCell>
                    <TableCell>{reservation.table}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;