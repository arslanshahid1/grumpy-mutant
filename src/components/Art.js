import React from 'react';

function Art() {
  return (
    <div className='container art my-5' id='art'>
      <h1 className='text-center'>Team</h1>
      <p className='text-center col-sm-10 m-auto'>
        Crypto Enthusiasts, art passionates and game nerds, we gathered funds from family and
        friends to launch a project that showcases our art in a way that allows individuals to
        express themselves. We want to create a space where anyone battling depression, suicidal
        thoughts or any kind of mental health issues can feel safe to express themselves.
        Ultimately, community, passion, and creativity are the main reasons we created The Grumpy
        Mutants. Aside from the play-to-earn game that will be released, future IRL utility and the
        metaverse will be unlocked by the community through roadmap activation and voting.
      </p>

      <div className='row d-flex align-items-center'>
        <div className='col-md-7 mt-5'>
          <h1>Experience Purity of Art</h1>
          <p>
            When designing NFTs, our team holds the quality of the artwork as the number one
            priority. Our artist has handcrafted every single asset, putting in love, sweat, tears
            and countless hours over several weeks to make sure that the quality is worthy of being
            immortalized on the blockchain
          </p>
        </div>
        <div className='col-md-5'>
          <img src='/art.png' width='70%' className='storyRadius teamImage' alt='' />
        </div>
      </div>
      <div className='row  features'>
        <div className='col-md-4'>
          <p>Handcrafted & Randomly Generated</p>
        </div>
        <div className='col-md-4'>
          <p>10,000 Mutants</p>
        </div>
        <div className='col-md-4'>
          <p>Over 400+ traits</p>
        </div>
      </div>
      <a href='#mint' className='btn btn-danger mt-3 mx-auto'>
        Buy a Mutant
      </a>

      <div className='row plat mt-5 d-flex align-items-center'>
        <div className='col-md-6'>
          <div className='col-12'>
            <img src='/story.gif' width='100%' alt='' />
          </div>
        </div>
        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='col-12'>
            <h2>Plat to earn</h2>
            <p>
              Get ready for the assault: It’s time for you to rise up and fight for your survival in
              a zombie apocalypse in this heart-stopping First Person Shooter (FPS) adventure! (Only
              Grumpy Mutant NFT holders will gain access).
            </p>
            <button className='btn px-4 py-4'>Buy Mutant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
