import './App.css';
import Header from './components/Header/Header';
import ProductDetails from './pages/ProductDetails/ProductDetails'

import ProductsList from './components/ProductsList/ProductsList';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element:<ProductsList/>
      },
      {
        path: '/productdetail/:prod_id',
        element: <ProductDetails/>
      }
    ]
  }
])

export default App;
