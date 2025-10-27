import { useState } from 'react';

function Counter() {
  // initialize count to 0
  const [count, setCount] = useState(0);

  // return JSX
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Simple Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
