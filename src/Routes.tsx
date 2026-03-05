import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/Errors';

const myRouterTree = createBrowserRouter([
  // main router tree
  {
    path: '/',
    element: <App />,
    // errorElement:<DefaultErrorElement/>,
    errorElement: <ErrorPage />,
    children: [
      // nested router tree
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id', // {id:1}
        element: <ProductPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
