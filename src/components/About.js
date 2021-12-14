import React, { useEffect } from 'react';

function About() {
  return (
    <div className='about d-flex align-items-center  mt-3 mt-md-0 py-4' id='about'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6'>
            <h1 className='font-weight-bold my-3'>About</h1>
            <p>
              The Grumpy Mutant is a collection of 10,000 unique NFTs with 400+ traits hand-drawn &
              stored on the Ethereum blockchain as ERC-721 tokens. Each Mutant is a unique piece
              that grants access to members-only benefits, including commercial derivative rights of
              the visual assets. The Grumpy Mutant project aims to focus on suicide prevention via
              donations to suicide prevention charities. We’ll also be donating a portion of
              secondary sales funds to mental health charities.
              <br />
              <br />
              Additionally, Grumpy Mutant as an NFT will offer many perks to holders including, but
              not limited to, airdrops, play-to-earn game, access to exclusive merch, and of course
              an awesome profile picture!
            </p>
            <div className='d-sm-flex justify-content-between text-center'>
              <a href='#mint' className='btn  mr-2 my-1'>
                Buy a Mutant
              </a>
              <a href='https://twitter.com' target='_blank' className='btn  mr-2 my-1'>
                Twitter
              </a>
              <a href='https://discord.gg' target='_blank' className='btn  mr-2 my-1'>
                Discord
              </a>
            </div>
          </div>
          <div className='col-lg-6 my-3 d-flex justify-content-center'>
            <div className='images d-flex justify-content-center align-items-center'>
              <img src='./main.gif' width='300px' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
