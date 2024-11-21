import React from 'react';
import './Home.css';
import PublicLayout from '../../layouts/publicLayout/PublicLayout';
import useAuth from '../../hooks/useAuth';
import PrivateLayout from '../../layouts/privateLayout/PrivateLayout';
import ButtonAppBarPublic from '../../pageComponents/ButtonAppBarPublic';

const Home = () => {
  const user = useAuth();
  const homeContent = <p>Home</p>;

  if (!user) {
    return <PublicLayout
      buttonAppBar={<ButtonAppBarPublic />}
    >{homeContent}</PublicLayout>;
  }

  if (user) {
    return <PrivateLayout
    // buttonAppBar={<ButtonAppBarPublic />}
    >{homeContent}</PrivateLayout>;
  }
};

export default Home;
