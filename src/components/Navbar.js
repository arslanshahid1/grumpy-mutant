import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark' id='home'>
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          <img src='/logo.png' width='130px' alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto d-flex align-items-center'>
            <li className='nav-item mx-md-3'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item mx-md-3'>
              <a className='nav-link' href='#story'>
                Story
              </a>
            </li>
            <li className='nav-item mx-md-3'>
              <a className='nav-link' href='#roadmap'>
                Roadmap
              </a>
            </li>
            <li className='nav-item mx-md-3'>
              <a className='nav-link' href='#art'>
                Info
              </a>
            </li>
            <li className='nav-item mx-md-3'>
              <a className='nav-link' href='#faq'>
                FAQ
              </a>
            </li>
            <li className='nav-item mx-md-3'>
              <a href='#mint' className='btn btn-danger'>
                Buy a Devil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
