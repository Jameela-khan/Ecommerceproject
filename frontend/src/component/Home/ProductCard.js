// import React from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";



// const options = {
//   edit : false,
//   size: window.innerWidth < 600 ? 20 : 25,
//   value: 2.5,
//   readOnly: true,
//   precision: 0.5,
//   isHalf : true,
// };
// const ProductCard = ({ product }) => {
  
//   return (
//     <Link className="productCard" to={`/product`}>
//       <img src={product.images[0].url} alt={product.name} />
//       <p>{product.name}</p>
//       <div>
//         <ReactStars {...options} />
//         <span className="productCardSpan">
//            (256 Reviews)
//         </span>
//       </div>
//       <span>{`₹${product.price}`}</span>
//     </Link>
//   );
// };

// export default ProductCard;
import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
