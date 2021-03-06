import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
//for redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//initial states
const firstReducerInitialState = 0;

const firstReducer = (state = firstReducerInitialState, action) => {
  console.log('in firstReducer', state, action.payload);
  if(action.type === 'pick'){
    return state + action.payload;
  } else if (action.type === 'drop') {
    return state - action.payload;
  } else if (action.type === 'scoop') {
    return state + action.payload;
  } else if (action.type === 'dropAll') {
    return state - action.payload;
  }else if (action.type === 'reproduce'){
    return state + action.payload;
  }
  return state;
}// firstReducer returning an empty object

//create storage space and tell it to use our reducer.
const storeInstance = createStore( firstReducer );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ storeInstance }><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
