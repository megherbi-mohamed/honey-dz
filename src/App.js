import React, {lazy,Suspense} from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { IKContext } from 'imagekitio-react';

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
const OnlineCommande = lazy(()=> import('./components/OnlineCommande'));
const OfflineCommande = lazy(()=> import('./components/OfflineCommande'));
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

const urlEndpoint = 'https://ik.imagekit.io/vsmksnvdh/';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <IKContext urlEndpoint={urlEndpoint}>
          <AlertProvider template={AlertTemplate} {...options}>
            <CartProvider>
            <Suspense fallback={<>waiting</>}>
              <Navbar /> 
              <ScrollTop /> 
                <Routes>
                  <Route exact path="/" element={ <Home /> } />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/account" element={<Account />} />
                  <Route exact path="account/signin" element={<Signin />} />
                  <Route exact path="/account/register" element={<Register /> } />
                  <Route exact path="/account/addresses" element={<Addresses /> } />
                  <Route exact path="/account/addresses/add" element={<NewAddress /> } />
                  <Route exact path="/account/addresses/update/:id" element={<AddressForm /> } />
                  <Route exact path="/products/:id" element={<Products />} />
                  <Route exact path="/collections/:id" element={<Collections />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/terms-conditions" element={<TermsConditions />} />
                  <Route exact path="/commande/offline" element={<OfflineCommande />} />
                  <Route exact path="/commande/offline/:id/:quantity" element={<OfflineCommande /> } />
                  <Route exact path="/commande/online" element={<OnlineCommande />} />
                  <Route exact path="/commande/online/:id/:quantity" element={<OnlineCommande />} />
                </Routes>
                <HideBody /> 
                <QuikViewProduct /> 
                <SideCart /> 
                <SideFilter /> 
                <SideBar /> 
                <SideAccount /> 
                <CarouselOverview /> 
                <AskQuestion /> 
                <Confirmation /> 
                <Share /> 
                <Footer /> 
              </Suspense>
            </CartProvider>
          </AlertProvider>
        </IKContext>
      </BrowserRouter>
    </>
  )
}

export default App;
