import { useEffect } from 'react';
import { setIsAuth } from './isAuthSlice';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const AuthController = props => {
  const { children } = props;
  const user = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof user !== 'boolean') {
      if (localStorage.getItem('access_token')) {
        dispatch(setIsAuth(true));
      } else {
        dispatch(setIsAuth(false));
      }
    }
  }, [user, dispatch]);

  if (typeof user === 'boolean') {
    return children;
  }

  return null;
};

export default AuthController;
