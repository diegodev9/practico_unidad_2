import { getProduct } from "../../services/products.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../../routes/NotFound.jsx";

function ProductDescription() {
  console.log("product description");
  //const { productId } = undefined;
  //  const selectedProduct = getProduct(Number(productId));
  // console.log(selectedProduct);
  // console.log(productId);

  //if (productId === undefined) return <NotFound />;

  return (
    <div>
      <p>Product ID: {product.id} </p>
      <p>Product Title: </p>
      <p>Product Price: </p>
      <p>Product Description: </p>
      <img src="" alt="product-image" />
    </div>
  );
}

export default ProductDescription;
