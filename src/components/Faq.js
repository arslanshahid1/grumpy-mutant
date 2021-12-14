import React from 'react';

function Faq() {
  return (
    <div className='faq py-5 mt-5' id='faq'>
      <div className='container'>
        <h1>FAQ</h1>

        <div className='accordion' id='accordionExample1'>
          <div className='card my-3'>
            <div className='card-header py-4' id='faqOne'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#FAQcollapseOne'
                  aria-expanded='false'
                  aria-controls='FAQcollapseOne'
                >
                  What is the total supply?
                </button>
              </h2>
            </div>

            <div
              id='FAQcollapseOne'
              className='collapse'
              aria-labelledby='faqOne'
              data-parent='#accordionExample1'
            >
              <div className='card-body'>
              A total of 10,000 unique Mutant NFTs will be created.
              </div>
            </div>
          </div>
          <div className='card my-3'>
            <div className='card-header py-4' id='faqTwo'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left collapsed accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#FAQcollapseTwo'
                  aria-expanded='false'
                  aria-controls='FAQcollapseTwo'
                >
                  When is the launch?
                </button>
              </h2>
            </div>
            <div
              id='FAQcollapseTwo'
              className='collapse'
              aria-labelledby='faqTwo'
              data-parent='#accordionExample1'
            >
              <div className='card-body'>
              Announcement will be made in Discord
              </div>
            </div>
          </div>
          <div className='card my-3'>
            <div className='card-header py-4' id='FaqThree'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left collapsed accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#FAQcollapseThree'
                  aria-expanded='false'
                  aria-controls='FAQcollapseThree'
                >
                  How much does it cost to mint a mutant?
                </button>
              </h2>
            </div>
            <div
              id='FAQcollapseThree'
              className='collapse'
              aria-labelledby='FaqThree'
              data-parent='#accordionExample1'
            >
              <div className='card-body'>
              Whitelisted Members will be able to buy in at 0.06 ETH while public mint price is set at 0.08 ETH + gas.
              </div>
            </div>
          </div>

          <div className='card my-3'>
            <div className='card-header py-4' id='FaqFour'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link btn-block text-left collapsed accordion-button d-flex align-items-center'
                  type='button'
                  data-toggle='collapse'
                  data-target='#FAQcollapseFour'
                  aria-expanded='false'
                  aria-controls='FAQcollapseFour'
                >
                  Will there be a pre-sale?
                </button>
              </h2>
            </div>
            <div
              id='FAQcollapseFour'
              className='collapse'
              aria-labelledby='FaqFour'
              data-parent='#accordionExample1'
            >
              <div className='card-body'>
              Yes, will be announced in discord.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
