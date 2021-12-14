import React from 'react';

function Team() {
  return (
    <div className='team container'>
      <h1 className='text-center'>Mutant Team</h1>
      <div className='row d-flex align-items-center'>
        <div className='col-5'>
          <div className='col-12 d-flex justify-content-end '>
            <img className='storyRadius' src='/team1.png' width='300px' alt='' />
          </div>
        </div>
        <div className='col-6 d-flex justify-content-start '>
          <div className='col-12'>
            <h2>Chief Mutant</h2>
            <p>Founder of Grumpy Mutant Project</p>
          </div>
        </div>
      </div>

      <div className='row d-flex  align-items-center mt-5'>
        <div className='col-5 order-2'>
          <div className='col-12 d-flex justify-content-start'>
            <img className='storyRadius' src='/team2.png' width='300px' alt='' />
          </div>
        </div>
        <div className='col-7 order-1 d-flex text-right  '>
          <div className='col-12 '>
            <h2>Lucas</h2>
            <p>Co-Founder of Grumpy Mutant Project</p>
          </div>
        </div>
      </div>

      <div className='row d-flex align-items-center mt-5'>
        <div className='col-5'>
          <div className='col-12 d-flex justify-content-end'>
            <img className='storyRadius' src='/team3.png' width='300px' alt='' />
          </div>
        </div>
        <div className='col-7 d-flex justify-content-start '>
          <div className='col-12 '>
            <h2>APCMPLX</h2>
            <p>Artist of Grumpy Mutant Project</p>
          </div>
        </div>
      </div>
      <div className='row d-flex align-items-center mt-5'>
        <div className='col-5 order-2'>
          <div className='col-12 d-flex justify-content-start'>
            <img className='storyRadius' src='/team4.png' width='300px' alt='' />
          </div>
        </div>
        <div className='col-7 order-1 d-flex justify-content-end text-right'>
          <div className='col-12 '>
            <h2>Mutant Lord</h2>
            <p>Artist of Grumpy Mutant Project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
