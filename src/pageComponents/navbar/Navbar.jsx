import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
// import customRoutes from '../../customRoutes';
// import useAuth from '../../hooks/useAuth';
// import Header from '../header/Header';
import Shops from '../../pages/shops/Shops';
import Help from '../../pages/help/Help';
import Delivery from '../../pages/delivery/Delivery';
import Contacts from '../../pages/contacts/Contacts';

const Navbar = () => {
  return (
    <div>
      <Shops />
      <Help />
      <Delivery />
      <Contacts />
    </div>
  );

  // const user = useAuth();
  // const customLinksComponents = customRoutes.map((link, index) => {
  //   if ((user && !link.onlyNonAuth) || (!user && !link.isPrivate)) {
  //     return (
  //       <Link to={link.path} key={index}>
  //         {' '}
  //         {link.name}{' '}
  //       </Link>
  //     );
  //   }
  //   return null;
  // });
  // return <div className="link-wrapper">{customLinksComponents}</div>;
};

export default Navbar;
