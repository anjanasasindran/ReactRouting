import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/Errors';
import { HomePage } from './pages/HomePage';
import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('./pages/AdminPage')); // lazy loading the admin page component
const myRouterTree = createBrowserRouter([
  // main router tree
  {
    path: '/',
    element: <App />,
    // errorElement:<DefaultErrorElement/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default child route or index route
        element: <HomePage />,
      },
      // nested router tree
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id', // {id:1}
        element: <ProductPage />,
      },
      {
        path: 'admin', // {id:1}
        element: (
          <Suspense fallback={<div>Loading the admin page...</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
