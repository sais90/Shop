import React from 'react';
import PrivateLayout from '../../layouts/privateLayout/PrivateLayout';
import ShopTable from '../../tables/ShopTable';
import ButtonAppBarPublic from '../../pageComponents/ButtonAppBarPublic';

const Shops = () => {
  return (
    <PrivateLayout
    // buttonAppBar={<ButtonAppBarPublic />}
    >
      {/* <p>Shops</p> */}

      <ShopTable />

    </PrivateLayout>
  );
};

export default Shops;
