import * as React from 'react';
import AuthFormMenu from './AuthFormMenu';
import ButtonAppBar from './ButtonAppBar';

const ButtonAppBarPublic = () => {
  return (
    <ButtonAppBar appBarMenu={<AuthFormMenu />} />
  );
};

export default ButtonAppBarPublic;
