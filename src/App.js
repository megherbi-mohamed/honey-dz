import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Account from "./components/Account";
import Register from "./components/Register";
import Collections from "./components/Collections";
import Products from "./components/product-detail/Products";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart";
import TermsConditions from "./components/TermsConditions";
import Commande from "./components/Commande";

import HideBody from "./components/HideBody";
import QuikViewProduct from "./components/Product-quickview/QuickView";
import SideCart from "./components/SideCart";
import SideFilter from "./components/SideFilter";
import SideBar from "./components/SideBar";
import SideAccount from "./components/SideAccount";
import CarouselOverview from "./components/product-detail/CarouselOverview";
import AskQuestion from "./components/AskQuestion";
import Share from "./components/Share"

import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <ScrollTop />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/account" element={<Account/>} />
              <Route exact path="/account/register" element={<Register/>} />
              <Route exact path="/products/:name" element={<Products/>} />
              <Route exact path="/collections/:id" element={<Collections/>} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/terms-conditions" element={<TermsConditions />} />
              <Route exact path="/commande" element={<Commande />} />
            </Routes>
          <HideBody />
          <QuikViewProduct />
          <SideCart />
          <SideFilter />
          <SideBar />
          <SideAccount />
          <CarouselOverview />
          <AskQuestion />
          <Share />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;