import Axios from 'axios';
import { api } from '../settings.js';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');
const UPDATE_ERROR = createActionName('UPDATE_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });
export const updateError = payload => ({ payload, type: UPDATE_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateStatusInAPI = (id, status) => {
  return(dispatch) => {
    Axios
      .put(`${api.url}/api/${api.tables}/${id}`, {status})
      .then(res => {
        dispatch(updateStatus(res.data));
      })
      .catch(err => {
        dispatch(updateError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map(table => table.id === action.payload.id ? {...table, status: action.payload.status} : table ),
      };
    }
    case UPDATE_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}