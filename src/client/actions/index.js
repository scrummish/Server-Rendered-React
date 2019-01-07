import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

// Dummy data API for testing
const url = 'http://react-ssr-api.herokuapp.com/users';

// Use redux-thunk's dispatch to dispatch the action once axios fetches 
// the users
export const fetchUsers = () => async dispatch => {
    const response = await axios.get(url);
    dispatch({
        type: FETCH_USERS,
        payload: response
    });
};