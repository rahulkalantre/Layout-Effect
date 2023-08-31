import './App.css';
import React, { useEffect, useLayoutEffect, useState } from 'react';

function App() {

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (num === 0) {
      setNum(5 + Math.random() * 50);
    }
  }, [num]);
  console.log(num);

  // useLayoutEffect(() => {
  //   if (num === 0) {
  //     setNum(5 + Math.random() * 50);
  //   }
  // }, [num]);
  // console.log(num);

  return (
    <div className="App">
      <h2> { num } </h2>
      <button onClick = { () => setNum(0) }> Check </button>
    </div>
  );
}

export default App;
