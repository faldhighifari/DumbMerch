// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import our "pages" component
import Home from "./pages/Home";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Complain from "./pages/Complain";

function App() {
  return (
    <Router>
      {/* define Route and component that will 
      render if the URL match by using Switch */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/complain" element={<Complain />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
