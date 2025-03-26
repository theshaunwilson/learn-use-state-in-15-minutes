import { useState } from 'react';

function App() {
  // use rest with objects to keep old values + new ones
  // const [state, setState] = useState({
  //   count: 4,
  //   theme: 'blue',
  // });
  // const count = state.count;
  // const theme = state.theme;

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme('Blue');
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme('Red');
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
      <p>{theme}</p>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
