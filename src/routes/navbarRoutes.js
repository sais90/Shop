import Shops from '../pages/shops/Shops';
import Help from '../pages/help/Help';
import Delivery from '../pages/delivery/Delivery';
import Contacts from '../pages/contacts/Contacts';

const navbarRoutes = [
  {
    path: '/shops',
    name: 'Shops',
    element: <Shops />,
    isPrivate: true,
  },
  {
    path: '/help',
    name: 'Help',
    element: <Help />,
    isPrivate: true,
  },
  {
    path: '/delivery',
    name: 'Delivery',
    element: <Delivery />,
    isPrivate: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    element: <Contacts />,
    isPrivate: true,
  },
];

export default navbarRoutes;



// const routesCreator = (name, isPrivate){
    // return (
    //   {
    //     path: '/' + name.toLowerCase(),
    //     name: name,
    //     element: 
    //   }
    // )
// }