import './App.css';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div>
        <h1>Centra Central Park Delivery System</h1>

        {/* Navigation Menu */}
        <nav>
          <Link to="/product">Products</Link> |{" "}
          {/* <Link to="/orders">Orders</Link> */}
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/product" element={<Product />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
