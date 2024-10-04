import Navbar from './pageComponents/navbar/Navbar';
const PageWrapper = props => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default PageWrapper;
