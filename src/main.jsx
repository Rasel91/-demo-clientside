import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import {
  createBrowserRouter
} from "react-router-dom";
import Root from './Root';
import AddedProduct from './components/AddedProduct/AddedProduct';
import Home from './components/Home/Home';
import Product from './components/Products/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'/added',
       element:<AddedProduct></AddedProduct>
      },
      {
       path:'/product',
       element:<Product></Product>,
       loader:()=> fetch(`http://localhost:5000/product`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
    <Root></Root>
   </RouterProvider>
  </React.StrictMode>,
)
