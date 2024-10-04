import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuthValue = useSelector(state => state.isAuth.value);
  return isAuthValue;
};

export default useAuth;
