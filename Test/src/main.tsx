import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './redux/character/actions'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Products from './pages/products/Products.tsx';
import ProductDetail from './pages/productDetail/ProductDetail.tsx';
import CreateProduct from './pages/createProduct/CreateProduct.tsx';

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
})



const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
  },
  {
    path: "/products",
    element:   <Products />,
  },
  {
    path: "/products/:id",
    element:   <ProductDetail />,
  },
  {
    path: "/create-product",
    element:   <CreateProduct />,
  }
    //children:[
    //  {
    //    path: "/products",
    //    element:   <Products />,
    //  },
    //    ]
      
    
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
        <RouterProvider router={router} />
  </Provider>
)
