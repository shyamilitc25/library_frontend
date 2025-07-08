import React, { useState } from 'react';


function Dashboard() {
  const [x, setX] = useState('');
  const [y, setY] = useState(false);

  function clicker() {
    if (x === '') {
      alert('no input');
    } else {
      setY(!y);
      console.log('clicked');
    }
  }

  return (
    <div style={{ backgroundColor: 'pink', padding: '50px' }}>
      <h1>My App</h1>
      <input value={x} onChange={(e) => setX(e.target.value)} />
      <button onClick={clicker}>Click Me</button>
      {y ? <p>You clicked!</p> : null}
    </div>
  );
}

export default Dashboard;
