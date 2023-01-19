import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import About from "./component/layout/About/About";


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);
  return  <Router>
     <Header />
        <Routes>
        <Route exact path="/"  element={< Home />} component={Home}></Route>
       
        <Route exact  path="/about" element={< About />} component={About} ></Route>
      </Routes>
        
     <Footer />
  </Router>
}

export default App;
