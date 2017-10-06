import React from 'react';
const FA = require('react-fontawesome');

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='header__title'>
        freeCodeCamp
        <FA 
          name="free-code-camp"
        />
        </h1>

    </div>
  )
};

export default Header;