import './App.css';
import Header from './components/Header/Header';
import ProductDetails from './pages/ProductDetails/ProductDetails'

import ProductsList from './components/ProductsList/ProductsList';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ProductContextProvider } from './context/Context';
function App() {
  return (
    <ProductContextProvider>

    <div className="App">
      <Header/>
      <Outlet/>
    </div>
    </ProductContextProvider>
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
