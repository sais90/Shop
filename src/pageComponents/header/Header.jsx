import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <Link className={s.link} to={'/'}>
        {' '}
        Logo{' '}
      </Link>
      <Link className={s.link} to={'/login'}>
        {' '}
        SignIn{' '}
      </Link>
      <Link className={s.link} to={'/registration'}>
        {' '}
        SignUp{' '}
      </Link>
    </div>
  );
};

export default Header;
