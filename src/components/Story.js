import React from 'react';

function Story() {
  return (
    <div className='story container mt-5' id='story'>
      <h1>Grumpy Mutant</h1>
      <div className='row d-flex align-items-center mt-5'>
        <div className='col-md-6 storyImg text-center'>
          <img className='storyRadius ' src='/story.jpeg' width='100%' alt='' />
        </div>
        <div className='col-md-6 mt-5 mt-md-0'>
          <h2>The Story</h2>
          <p>
            Up upon a hill in the middle of nowhere, there lived a mad scientist in a run down and
            abandoned lab. He had a horrible childhood filled with torture and painful experiments.
            He was always cast aside and left alone to wallow in his own misery with no mother to
            comfort him. He wanted revenge on the one who did this to him. He blamed the world for
            his pain but his father was the source of his ire. Finally, the day was upon him. It was
            time to exact his revenge ....
            <br />
            <br />
            Stay tuned for the release of the full story upon the launch of our play-to-earn game!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
