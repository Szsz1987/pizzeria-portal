import React from 'react';
import 'date-fns';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

/*const demoContent = [
  {id: '1', type: 'reservation', duration: 5},
  {id: '2', type: 'reservation', duration: 2},
  {id: '3', type: 'event', duration: 6},
  {id: '4', type: 'reservation', duration: 3},
  {id: '5', type: 'event', duration: 4},
  {id: '6', type: 'reservation', duration: 5},
];*/

const Tables = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
              </Grid>
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tables;