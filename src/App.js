import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/1`} component={TablesBooking} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/1`} component={TablesEvents} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/1`} component={WaiterOrder} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;