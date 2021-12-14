import React from 'react';

function Roadmap() {
  return (
    <div className='roadmap py-5' id='roadmap'>
      <div className='container'>
        <h1>Roadmap</h1>

        <div className='accordion' id='accordionExample'>
          <div className='card my-3'>
            <div className='card-header py-4' id='headingOne'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapseOne'
                  aria-expanded='false'
                  aria-controls='collapseOne'
                >
                  Phase I - Genesis
                </button>
              </h2>
            </div>

            <div
              id='collapseOne'
              className='collapse'
              aria-labelledby='headingOne'
              data-parent='#accordionExample'
            >
              <div className='card-body'>
              ⭐️ Rather than a copy pasted cookie cutter 0%-100% sold out roadmap 
              like most other projects, we decided to fill you 
              in on exactly what we have in the works for the 
              immediate future, as well as what we are thinking 
              for years beyond to foster one of the best communities
               the space has seen. Part of that will be listening to 
               every member of the Mutant community for suggestions 
               and feedback on how we can improve the experience for you! <br/>
               <br/>
              Stage One<br/>
              • Conceptualization of Project<br/>

              • Define Game Mechanics<br/>

              • Hiring of Key Developer<br/>

              • Mutant Designs<br/>

              • NFT Contract<br/>

              • Website Launch<br/>

              • Testnet Exploration<br/>
              </div>
            </div>
          </div>
          <div className='card my-3'>
            <div className='card-header py-4' id='headingTwo'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left collapsed accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  Phase II - Leviathan
                </button>
              </h2>
            </div>
            <div
              id='collapseTwo'
              className='collapse'
              aria-labelledby='headingTwo'
              data-parent='#accordionExample'
            >
              <div className='card-body'>
              ⭐️ Primary Sale: If we were to put a percentage 
              count on it, we’ll kick things off with a monster 
              $50k giveaway to early adopters once we’ve sold 
              50% of the Mutant collection. We will also be 
              donating $10k to mental health charity + an additional 
              $10k to any charity voted by the community. 
              We’ll also be airdropping several Mutants to 
              our most active and supportive members 
              (read more about this in Phase III) <br/>
              <br/>
              Stage Two<br/>
              • Game Trailer Release<br/>

              • Community Growth<br/>

              • Monster Give-aways<br/>

              • Charitable Donations<br/>

              • More Marketing Outreach<br/>

              • PR Collaborations<br/>

              • Revamp Website<br/>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-header py-4' id='headingThree'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left collapsed accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                >
                  Phase III - Beyond the Horizon
                </button>
              </h2>
            </div>
            <div
              id='collapseThree'
              className='collapse'
              aria-labelledby='headingThree'
              data-parent='#accordionExample'
            >
              <div className='card-body'>
              ⭐️ Owning a Mutant gives you early access to hot NFT drops! To maximize value to our holders, most of these projects will deliver more than just a pretty profile picture, mechanism such as staking rewards & play-to-earn games will be added. Here’s a break down for those who prefer a cookie cutter 0-100% roadmap.<br/>
              <br/>
10% SOLD<br/>
We immediately use the funds to build the Grumpy Mutant Community. We will be hiring community managers and moderators for Discord & Twitter. We’ll also be doing Mutant give-aways to early adopters!<br/>
<br/>
20% SOLD<br/>
Release more teasers of our game, engage in large marketing campaigns to bring more eyes and investors to our project.<br/>
<br/>
40% SOLD<br/>
Establish partnerships in the NFT space and continue to grow the community. Partner with Utility-Driven NFT projects to grant our holders early access.<br/>
<br/>
50% SOLD<br/>
Monster $50k giveaway + $20k charity donations; $10k to suicide prevention programs and $10k to a charity chosen by the community.<br/>
<br/>
60% SOLD<br/>
We heard you like merch? We’ll be releasing our exclusive merch. If anyone has any cool merch designs please drop them in discord.<br/>
<br/>
80% SOLD<br/>
Release our Play-To-Earn game on PC, IOS & Android platforms. Our game will only be available to Mutant NFT holders.<br/>
<br/>
100% SOLD<br/>
Launch a press campaign to bring more awareness to our Play-To-Earn Game. Continue growing the Twitter and Discord community.<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
