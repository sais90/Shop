import Footer from '../../pageComponents/footer/Footer';
import './PublicLayout.css';
import ButtonAppBar from '../../pageComponents/ButtonAppBarPublic';
import ButtonAppBarPublic from '../../pageComponents/ButtonAppBarPublic';

const PublicLayout = props => {
  return (
    <div className="public-layout">
      {props.buttonAppBar}
      {/* <ButtonAppBarPublic /> */}
      {props.leftNaviation}
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
