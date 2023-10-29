import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { getPosts } from "../../api/api";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ProductDetail from "../../pages/ProductDetail";
import Shop from "../../pages/Shop";
import Navbar from "../navbar/Navbar";
import Cart from "../../pages/Cart";

const App = () => {
  const params = useParams()
  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </main>
  );
};

export default App;
