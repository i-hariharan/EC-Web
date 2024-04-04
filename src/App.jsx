import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./components/style.css"
import Hero from "./components/Hero";
import Delivery from "./components/Delivery";
import Healthy from "./components/Healthy";
import Product from "./components/Product";
import {CartProvider} from "react-use-cart"
import Cart from "./components/Cart";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Delivery />
      <Healthy />
      <CartProvider>
      <Product />
      <Cart />
      </CartProvider>
    </div>
  );
}
