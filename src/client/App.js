import React from 'react';
import { fetchUsers } from './actions';
import { connect } from 'react-redux';

const App = props => {
 return (
    <div><h1>APP.JShh</h1></div> 
 )

}


function loadData(store) {
    return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default { 
    loadData, 
    component: connect(mapStateToProps)(App) 
};