import React from 'react';
import './Home.css';
import PublicLayout from '../../layouts/publicLayout/PublicLayout';
import useAuth from '../../hooks/useAuth';
import PrivateLayout from '../../layouts/privateLayout/PrivateLayout';

const Home = () => {
  const user = useAuth();
  const homeContent = <p>Home</p>;

  if (!user) {
    return <PublicLayout>{homeContent}</PublicLayout>;
  }

  if (user) {
    return <PrivateLayout>{homeContent}</PrivateLayout>;
  }

  // <div className="page-wrapper">
  //     <Navbar />
  //     <div className="content">
  //         <p>Home</p>
  //     </div>
  // </div>
};

export default Home;
