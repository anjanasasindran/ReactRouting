//import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';
// import { ProductsPage } from './pages/ProductsPage';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />;
      <Outlet />;
    </>
  );
}
