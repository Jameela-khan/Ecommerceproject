// import "./App.css";
// import Header from "./component/layout/Header/Header.js";
// import Footer from "./component/layout/Footer/Footer.js";
// import Home from "./component/Home/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import About from "./component/layout/About/About";
// import Product from "./component/Product/Products";
// import Contact from "./component/layout/Contact/Contact";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct.js";
// import UpdateProduct from "./component/Admin/UpdateProduct.js";
// function App() {
//   React.useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });
//   }, []);
//   return <Router>
//     <Header />
//     <Routes>
//       <Route exact path="/" element={< Home />} component={Home}></Route>

//       <Route exact path="/about" element={< About />} component={About} ></Route>
//       <Route exact path="/product" element={< Product />} component={Product} ></Route>
//       <Route exact path="/productlist" element={< ProductList />} component={ProductList} ></Route>
//       <Route exact path="/newproduct" element={< NewProduct />} component={NewProduct} ></Route>
//       <Route exact path="/contact" element={< Contact />} component={Contact} ></Route>
     

//     </Routes>
//     <ProtectedRoute
//         exact
//         path="/admin/products"
//         isAdmin={true}
//         component={ProductList}
//       />
//       <ProtectedRoute
//         exact
//         path="/admin/product"
//         isAdmin={true}
//         component={NewProduct}
//       />

//       <ProtectedRoute
//         exact
//         path="/admin/product/:id"
//         isAdmin={true}
//         component={UpdateProduct}
//       />
//     <Footer />
//   </Router>
// }

// export default App;
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
<Routes>
    
        <Route exact path="/" element={< Home />} component={Home} />
        <Route exact path="/product/:id" element={< ProductDetails/>} component={ProductDetails} />
        <Route exact path="/products" element={< Products />} component={Products} />
        <Route path="/products/:keyword" element={< Products />} component={Products} />

        <Route exact path="/search" element={< Search />} component={Search} />

        <Route exact path="/contact" element={< Contact/>} component={Contact} />

        <Route exact path="/about" element={< About/>} component={About} />
        <Route exact path="/account" element={<ProtectedRoute Component={Profile}/>} />
        <Route exact path="/me/update" element={<ProtectedRoute Component={UpdateProfile}/>} />

        <Route exact path="/password/update" element={<ProtectedRoute Component={UpdatePassword}/>} />

        <Route exact path="/password/forgot" element={< ForgotPassword />} component={ForgotPassword} />

        <Route exact path="/password/reset/:token" element={<ResetPassword />} component={ResetPassword} />

        <Route exact path="/login" element={< LoginSignUp/>} component={LoginSignUp} />

        <Route exact path="/cart" element={< Cart />} component={Cart} />
        <Route exact path="/shipping" element={<ProtectedRoute Component={Shipping}/>} />
        <Route exact path="/success" element={<ProtectedRoute Component={OrderSuccess}/>} />
        <Route exact path="/orders" element={<ProtectedRoute Component={MyOrders}/>} />
        <Route exact path="/order/confirm" element={<ProtectedRoute Component={ConfirmOrder}/>} />
        <Route exact path="/order/:id" element={<ProtectedRoute Component={OrderDetails}/>} />
       
        <Route exact path="/admin/dashboard" element={<ProtectedRoute isAdmin={true} Component={Dashboard}/>} />
        <Route exact path="/admin/products" element={<ProtectedRoute isAdmin={true} Component={ProductList}/>} />
        <Route exact path="/admin/product" element={<ProtectedRoute isAdmin={true} Component={NewProduct}/>} />
        <Route exact path="/admin/product/:id" element={<ProtectedRoute isAdmin={true} Component={UpdateProduct}/>} />
        <Route exact path="/admin/orders" element={<ProtectedRoute isAdmin={true} Component={OrderList}/>} />
        <Route exact path="admin/order/:id" element={<ProtectedRoute isAdmin={true} Component={ProcessOrder}/>} />
        <Route exact path="/admin/users" element={<ProtectedRoute isAdmin={true} Component={UsersList}/>} />
        <Route exact path="/admin/user/:id" element={<ProtectedRoute isAdmin={true} Component={UpdateUser}/>} />
        <Route exact path="/admin/reviews" element={<ProtectedRoute isAdmin={true} Component={ProductReviews}/>} />
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
