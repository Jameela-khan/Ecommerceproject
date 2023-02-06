// import React, { Fragment} from "react";
// import "./Home.css";
// import MetaData from "../layout/MetaData";
// import ProductCard from "./ProductCard.js";



// const products = {
//     name: "Blue Tshirt",
//     images : [{ url : "https://i.ibb.co/DRST11n/1.webp"}],
//     price : "Rs. 3000",
//     _id : "Jammy",
// };

// const Home = () =>  {
  
//     return (
//         <Fragment>
        
//               <MetaData title="ECOMMERCE APP" />
//               <div className="banner">
//                 <p>Welcome to Ecommerce</p>
//                 <h1>FIND AMAZING PRODUCTS BELOW</h1>
    
//                 <a href="#container">
//                   <button>
//                     Scroll 
//                   </button>
//                 </a>
//               </div>
    
//               <h2 className="homeHeading">Featured Products</h2>
    
//               <div className="container" id="container">
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//                 <ProductCard  product={products}/>
//               </div>
//         </Fragment>
       

//       ); 
// }

// export default Home;
import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const alert = toast();
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
   
        <Fragment>
          <MetaData title="ECOMMERCE" />

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
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
     
   
  );
};

export default Home;
