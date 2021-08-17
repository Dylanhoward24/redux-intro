import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import the dependencies for redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { apply } from 'check-types';

/*
Redux needs 3 things to get going:
- A store
- One or more reducers
- A provider
*/


// A reducer
// is a function that returns some state
// we get two arguments:
// - the previous value of state
// - an "action"
//
// think of this like:
//    const [count, setCount] = useState(0);
const count = (state = 0, action) => {
  console.log('got an action!', action);

    if (action.type === 'INCREASE_COUNT') {
      return state + 1;
    }else if(action.type === 'DECREASE_COUNT' && state > 0) {
      // return Math.max(state - 1, 0);
      return state - 1;
    }

  // we got an action we don't care about
  // return the existing state
  return state;
}

const mushrooms = (state = [], action) => {
  console.log('mushrooms got an action!', action);
  
  switch (action.type) {
    case 'ADD_MUSHROOM' :
      console.log('adding a mushroom');

      // push the payload into the array
      // DON'T MUTATE STATE
      // State is "immutable"
      // state.push(action.payload);

      // use the "spread opderator" to create a new state array
      let newState = [...state, action.payload];

      return newState;
  }
  return state;
}

// Create the redux store
// The store is where our app's global state lives
const storeInstance = createStore(
  combineReducers({
    // I'm going to have a property called "count"
    // in my state, whose value is determined by
    // the `count` reducer
    count,      // same as: count: count,
    mushrooms   //          mushrooms: mushrooms
  }),

  // setup
  applyMiddleware(
    logger
  )
);

// our redux state will look something like:
/*
{
  count: 7,
  mushrooms: ['enoki', 'brown beech']
}
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
