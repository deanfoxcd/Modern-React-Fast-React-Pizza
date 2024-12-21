import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Menu, { loader as menuLoader } from './features/menu/Menu';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/:orderId', element: <Order /> },
      { path: '/order/new', element: <CreateOrder /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
