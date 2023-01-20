import React, { Fragment} from "react";
import "./Home.css";
import MetaData from "../layout/MetaDeta";

import ProductCard from "./ProductCard.js";



const products = {
    name: "Blue Tshirt",
    images : [{ url : "https://i.ibb.co/DRST11n/1.webp"}],
    price : "Rs. 3000",
    _id : "Jammy",
};

const Home = () =>  {
  
    return (
        <Fragment>
        
              <MetaData title="ECOMMERCE APP" />
              <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
    
                <a href="#container">
                  <button>
                    Scroll 
                  </button>
                </a>
              </div>
    
              <h2 className="homeHeading">Featured Products</h2>
    
              <div className="container" id="container">
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
                <ProductCard  product={products}/>
              </div>
        </Fragment>
       

      ); 
}

export default Home;
