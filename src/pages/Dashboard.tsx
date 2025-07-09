import React from 'react';

function Dashboard() {
  let name = '';
  let clicked = flse;

  function handleClick() {
    clicked = true;
    alert('Hello ' + name);
  }

  return (
    <div style={{ backgroundColor: 'redd', fontSize: '30px', padding: '100px' }}>
      <h1>My App</h1>
      <input onChange={(e) => { name = e.target.value }} />
      <button onClick={handleClick}>Click</button>
      {clicked && <p>checking pass and grades check 1</p>}
    </div>
  );
}

export default Dashboard;
