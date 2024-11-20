import Footer from '../../pageComponents/footer/Footer';
import './PrivateLayout.css';
import ButtonAppBarPrivate from '../../pageComponents/ButtonAppBarPrivate';
import Navbar from '../../pageComponents/navbar/Navbar';
import DrawerApp from '../../pageComponents/DrawerApp';
import PublicLayout from '../publicLayout/PublicLayout';

const PrivateLayout = props => {
  return (
    // <div className="private-layout">
    //   <ButtonAppBarPrivate />
    //   <div className="content_wrapper">
    //     <DrawerApp />
    //     {/* <Navbar /> */}
    //     <div className="content">{props.children}</div>
    //   </div>
    //   <Footer />
    // </div>

    <PublicLayout
      // buttonAppBar={<ButtonAppBarPrivate />}
      leftNaviation={<DrawerApp />}
    >{props.children}</PublicLayout>
  );
};

export default PrivateLayout;
