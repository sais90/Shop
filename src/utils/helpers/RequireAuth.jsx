import { Navigate } from 'react-router-dom';
import Error404 from '../../errors/Error404';
import useAuth from '../../hooks/useAuth';

const RequireAuth = props => {
  const user = useAuth();

  // if (props.route.path = '*') {
  //   return <Error404 />;
  // }

  if (!user) {
    if (!props.route.isPrivate) {
      return props.children;
    } else {
      return <Navigate to="/login" replace={true} />;
      // <Error404 />
    }
  }

  if (user) {
    if (!props.route.onlyNonAuth) {
      return props.children;
    } else {
      return <Navigate to="/dashboard" replace={true} />;
    }
  }

  // return null;
};

export default RequireAuth;
