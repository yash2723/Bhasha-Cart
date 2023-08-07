import './App.css';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navbar from './customer/components/Navbar/Navbar';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Home from './customer/pages/home/Home';

function App() {
  return (
    <div className="">
      <Navbar />

      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>

      <Footer />
    </div>
  );
}

export default App;
