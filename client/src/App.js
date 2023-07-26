import './App.css';
import Navbar from './customer/components/navbar/Navbar';
import Home from './customer/pages/home/Home';

function App() {
  return (
    <div className="">
      <Navbar />

      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
