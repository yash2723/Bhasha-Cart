import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/home/Home';

function App() {
  return (
    <div className="">
      <Navbar />

      <div>
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
