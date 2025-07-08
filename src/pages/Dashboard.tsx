import React from 'react';

function Dashboard() {
  let name = '';
  let clicked = false;

  function handleClick() {
    clicked = true;
    alert('Hello ' + name);
  }

  return (
    <div style={{ backgroundColor: 'yellow', fontSize: '30px', padding: '100px' }}>
      <h1>My App</h1>
      <input onChange={(e) => { name = e.target.value }} />
      <button onClick={handleClick}>Click</button>
      {clicked && <p>You clicked! review this code on push attempt 5 and n0t working</p>}
    </div>
  );
}

export default Dashboard;
