import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navbar from './customer/components/Navbar/Navbar';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Home from './customer/pages/home/Home';
import CustomerRoutes from './routes/CustomerRoutes';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
      
    </div>
  );
}

export default App;
