import React from 'react';
const FA = require('react-fontawesome');

const Header = (props) => {
  return (
    <div>
      <h1>
        freeCodeCamp
        <FA 
          name="free-code-camp"
        />
        </h1>

    </div>
  )
};

export default Header;