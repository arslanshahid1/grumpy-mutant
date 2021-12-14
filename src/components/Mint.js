import React from 'react';
import { useState } from 'react';

function Mint() {
  const [count, setCount] = useState(0);

  return (
    <div className='mint container mt-3' id='mint'>
      <h1>Joining the Mutant Army!</h1>
      <div className='mint-container p-3 p-sm-5 my-5'>
        <h2>Mint Your Mutant!</h2>
        <p>You can mint upto 20 Mutants at once.</p>
        <p>The price per Mutant is 0.08ETH</p>
        <h3>0 / 10000</h3>
        <p>1 GNC costs 0.06 ETH.</p>
        <p>Excluding gas fees.</p>
        <button className='btn p-3  minusBtn' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          -
        </button>
        <button className='btn  mx-2 p-3  numBtn'>{count}</button>
        <button className='btn  p-3 plusBtn' onClick={() => setCount(count < 20 ? count + 1 : 20)}>
          +
        </button>
        <p className='mt-3'>Connect to ethernet network</p>
        <button className='btn btn-outline-danger px-3 connectBtn'>Connect</button>
      </div>
    </div>
  );
}

export default Mint;
