import React, {lazy,Suspense} from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// import Navbar from "./components/navbar/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Account from "./components/account/Account";
// import Signin from "./components/account/Signin";
// import Register from "./components/account/Register";
// import Addresses from "./components/address/Addresses";
// import NewAddress from "./components/address/NewAddress";
// import AddressForm from "./components/address/AddressForm";
// import Collections from "./components/Collections";
// import Products from "./components/product-detail/Products";
// import Footer from "./components/footer/Footer";
// import Cart from "./components/Cart";
// import TermsConditions from "./components/TermsConditions";
// import Commande from "./components/Commande";

// import HideBody from "./components/HideBody";
// import QuikViewProduct from "./components/Product-quickview/QuickView";
// import SideCart from "./components/SideCart";
// import SideFilter from "./components/SideFilter";
// import SideBar from "./components/SideBar";
// import SideAccount from "./components/SideAccount";
// import CarouselOverview from "./components/product-detail/CarouselOverview";
// import AskQuestion from "./components/AskQuestion";
// import Share from "./components/Share"
// import Confirmation from "./components/address/Confirmation";

// import ScrollTop from "./components/ScrollTop";

const Navbar = lazy(()=> import('./components/navbar/Navbar'));
const Home = lazy(()=> import('./components/Home'));
const About = lazy(()=> import('./components/About'));
const Account = lazy(()=> import('./components/account/Account'));
const Signin = lazy(()=> import('./components/account/Signin'));
const Register = lazy(()=> import('./components/account/Register'));
const Addresses = lazy(()=> import('./components/address/Addresses'));
const NewAddress = lazy(()=> import('./components/address/NewAddress'));
const AddressForm = lazy(()=> import('./components/address/AddressForm'));
const Products = lazy(()=> import('./components/product-detail/Products'));
const Collections = lazy(()=> import('./components/Collections'));
const TermsConditions = lazy(()=> import('./components/TermsConditions'));
const Commande = lazy(()=> import('./components/Commande'));
const Cart = lazy(()=> import('./components/Cart'));
const Footer = lazy(()=> import('./components/footer/Footer'));

const ScrollTop = lazy(()=> import('./components/ScrollTop'));
const HideBody = lazy(()=> import('./components/HideBody'));
const QuikViewProduct = lazy(()=> import('./components/Product-quickview/QuickView'));
const SideCart = lazy(()=> import('./components/SideCart'));
const SideFilter = lazy(()=> import('./components/SideFilter'));
const SideBar = lazy(()=> import('./components/SideBar'));
const SideAccount = lazy(()=> import('./components/SideAccount'));
const CarouselOverview = lazy(()=> import('./components/product-detail/CarouselOverview'));
const AskQuestion = lazy(()=> import('./components/AskQuestion'));
const Confirmation = lazy(()=> import('./components/address/Confirmation'));
const Share = lazy(()=> import('./components/Share'));


const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
          <CartProvider>
            <Suspense fallback={<>...</>}> <Navbar /> </Suspense>
            <Suspense fallback={<>...</>}> <ScrollTop /> </Suspense>
            <Routes>
              <Route exact path="/" element={ <Suspense fallback={<>...</>}><Home /></Suspense> } />
              <Route exact path="/about" element={ <Suspense fallback={<>...</>}><About /></Suspense> } />
              <Route exact path="/account" element={ <Suspense fallback={<>...</>}><Account /></Suspense> } />
              <Route exact path="account/signin" element={ <Suspense fallback={<>...</>}><Signin /></Suspense> } />
              <Route exact path="/account/register" element={ <Suspense fallback={<>...</>}><Register /></Suspense> } />
              <Route exact path="/account/addresses" element={ <Suspense fallback={<>...</>}><Addresses /></Suspense> } />
              <Route exact path="/account/addresses/add" element={ <Suspense fallback={<>...</>}><NewAddress /></Suspense> } />
              <Route exact path="/account/addresses/update/:id" element={ <Suspense fallback={<>...</>}><AddressForm /></Suspense> } />
              <Route exact path="/products/:id" element={ <Suspense fallback={<>...</>}><Products /></Suspense> } />
              <Route exact path="/collections/:id" element={ <Suspense fallback={<>...</>}><Collections /></Suspense> } />
              <Route exact path="/cart" element={ <Suspense fallback={<>...</>}><Cart /></Suspense> } />
              <Route exact path="/terms-conditions" element={ <Suspense fallback={<>...</>}><TermsConditions /></Suspense> } />
              <Route exact path="/commande/:type" element={ <Suspense fallback={<>...</>}><Commande /></Suspense> } />
              <Route exact path="/commande/:type/:id/:quantity" element={ <Suspense fallback={<>...</>}><Commande /></Suspense> } />

              {/* <Route exact path="/about" element={<About/>} />
              <Route exact path="/account" element={<Account/>} />
              <Route exact path="/account/signin" element={<Signin/>} />
              <Route exact path="/account/register" element={<Register/>} />
              <Route exact path="/account/addresses" element={<Addresses/>} />
              <Route exact path="/account/addresses/add" element={<NewAddress/>} />
              <Route exact path="/account/addresses/update/:id" element={<AddressForm/>} />
              <Route exact path="/products/:id" element={<Products/>} />
              <Route exact path="/collections/:id" element={<Collections/>} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/terms-conditions" element={<TermsConditions />} />
              <Route exact path="/commande/:type" element={<Commande />} />
              <Route exact path="/commande/:type/:id/:quantity" element={<Commande />} /> */}
            
            </Routes>
            <Suspense fallback={<>...</>}> <HideBody /> </Suspense>
            <Suspense fallback={<>...</>}> <QuikViewProduct /> </Suspense>
            <Suspense fallback={<>...</>}> <SideCart /> </Suspense>
            <Suspense fallback={<>...</>}> <SideFilter /> </Suspense>
            <Suspense fallback={<>...</>}> <SideBar /> </Suspense>
            <Suspense fallback={<>...</>}> <SideAccount /> </Suspense>
            <Suspense fallback={<>...</>}> <CarouselOverview /> </Suspense>
            <Suspense fallback={<>...</>}> <AskQuestion /> </Suspense>
            <Suspense fallback={<>...</>}> <Confirmation /> </Suspense>
            <Suspense fallback={<>...</>}> <Share /> </Suspense>
            <Suspense fallback={<>...</>}> <Footer /> </Suspense>
          </CartProvider>
        </AlertProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
