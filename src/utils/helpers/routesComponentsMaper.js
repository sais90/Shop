import { Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';

const routesComponentsMaper = props => {
  return props.map((route, index) => {
    return (
      <Route
        path={route.path}
        element={<RequireAuth route={route}>{route.element}</RequireAuth>}
        key={index}
      />
    );
  });
};

export default routesComponentsMaper;
