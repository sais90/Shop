import React from 'react';
import PrivateLayout from '../../layouts/privateLayout/PrivateLayout';
import ShopTable from '../../tables/ShopTable';

const Shops = () => {
  return (
    <PrivateLayout>
      {/* <p>Shops</p> */}

      <ShopTable />

    </PrivateLayout>
  );
};

export default Shops;
