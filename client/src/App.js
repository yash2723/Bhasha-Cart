import './App.css';
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
        <ProductDetails />
      </div>

      <Footer />
    </div>
  );
}

export default App;
