import Footer from '../../pageComponents/footer/Footer';
import './PublicLayout.css';
import ButtonAppBar from '../../pageComponents/ButtonAppBarPablic';
import ButtonAppBarPablic from '../../pageComponents/ButtonAppBarPablic';

const PublicLayout = props => {
  return (
    <div className="public-layout">
      <ButtonAppBarPablic />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
