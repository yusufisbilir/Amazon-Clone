import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="order" element={<Order />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
