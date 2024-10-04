import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthController from './utils/helpers/AuthController';
import customRoutes from './routes/customRoutes';
import navbarRoutes from './routes/navbarRoutes';
import routesComponentsMaper from './utils/helpers/routesComponentsMaper';

const App = () => {
  let routesComponents = [];

  const customRoutesComponents = routesComponentsMaper(customRoutes);

  const navbarRoutesComponents = routesComponentsMaper(navbarRoutes);

  routesComponents = routesComponents.concat(customRoutesComponents, navbarRoutesComponents);

  // const customRoutesComponents = customRoutes.map((route, index) => {
  //   return (
  //     <Route
  //       path={route.path}
  //       element={<RequireAuth route={route}>{route.element}</RequireAuth>}
  //       key={index}
  //     />
  //   );
  // });

  // const navbarRoutesComponents = navbarRoutes.map((route, index) => {
  //   return (
  //     <Route
  //       path={route.path}
  //       element={<RequireAuth route={route}>{route.element}</RequireAuth>}
  //       key={index}
  //     />
  //   );
  // });

  return (
    <AuthController>
      <BrowserRouter>
        <Routes>{routesComponents}</Routes>
        {/* <Routes>{navbarRoutesComponents}</Routes>
        <Routes>{customRoutesComponents}</Routes> */}
      </BrowserRouter>
    </AuthController>
  );
};

export default App;
