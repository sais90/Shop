import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faCopyright} size="xs" className="fa_copyright" />
      <span>2024 All rights reserved</span>
    </div>
  );
};

export default Footer;
