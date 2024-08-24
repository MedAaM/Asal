import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
    

function Menu({products}) {
  return (
    <div className="products-cell">
      {products.length} <MdKeyboardArrowDown />
      <div className={`product-menu`}>
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div>Product ID: {product.productId}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Refund Request: {product.refundRequest ? "Yes" : "No"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
