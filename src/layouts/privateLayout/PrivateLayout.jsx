import './PrivateLayout.css';
import ButtonAppBarPrivate from '../../pageComponents/ButtonAppBarPrivate';
import DrawerApp from '../../pageComponents/DrawerApp';
import PublicLayout from '../publicLayout/PublicLayout';

const PrivateLayout = props => {
  return (
    <PublicLayout
      buttonAppBar={<ButtonAppBarPrivate />}
      leftNaviation={<DrawerApp />}
    >{props.children}</PublicLayout>
  );
};

export default PrivateLayout;
