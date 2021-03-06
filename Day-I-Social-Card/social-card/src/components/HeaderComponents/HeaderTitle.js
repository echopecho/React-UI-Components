import React from 'react';
import './Header.css';

// const moment = require('moment');

const HeaderTitle = props => {
  return (
    <div className="header-title-container">
      <h2 className="header-title">Lambda School</h2>
      <p className="header-link">@LambdaSchool</p>
      <p className="header-time"></p>
    </div>
  )
}

export default HeaderTitle;