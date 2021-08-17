import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// import our Components
import MushroomForm from './MushroomForm';
import MushroomList from './MushroomList';

function App() {
  // access the dispatch function
  const dispatch = useDispatch();

  // the useSelector callback function
  // gets the entire redux store
  // and we return the parts we want
  const count = useSelector(store => store.count);
  
  const countUp = () => {
    console.log('your button was clicked');

    // if this were week 10...
    // setCount(count + 1);

    // but alas, it's week 11
    // dispatch an action
    dispatch({
      // our "type" is the message that
      // we want to tell the world about
      type: 'INCREASE_COUNT'
    });
  }

  const countDown = () => {
    console.log('your button was clicked');
    dispatch({
      type: 'DECREASE_COUNT'
    });
  }

  return (
    <div className="App">
      <h3>Count is {count}</h3>
      <button onClick={countUp}>Increase Count</button>
      <button onClick={countDown}>Decrease Count</button>

      <h3>Mushrooms</h3>
        <MushroomForm />
      <ul>
        <MushroomList />
      </ul>
    </div>
  );
}

export default App;
