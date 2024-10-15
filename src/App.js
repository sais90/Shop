import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthController from './utils/helpers/AuthController';
import customRoutes from './routes/customRoutes';
import navbarRoutes from './routes/navbarRoutes';
import routesComponentsMapper from './utils/helpers/routesComponentsMapper';
import Error404 from './errors/Error404';

const App = () => {
  let routesComponents = [];

  let creatErrorComponent = () => {
    return (
      <Route
        path='*'
        element={<Error404 />}
      />
    )
  }

  const customRoutesComponents = routesComponentsMapper(customRoutes);

  const navbarRoutesComponents = routesComponentsMapper(navbarRoutes);

  routesComponents = routesComponents.concat(customRoutesComponents, navbarRoutesComponents, creatErrorComponent());

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
