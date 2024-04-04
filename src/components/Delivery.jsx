import React from "react";
import logo from "../assets/images/logo.png"
import product from "../assets/images/product1.png"
import item from "../assets/images/product2.png"
import feedback from "../assets/images/product3.png"



export default function Delivery() {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className="text-center display-4 mt-4  fw-bold">How we process the Delivery</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={product} alt="" className="w-50 h-50"/>
          </div>
          <h2>Pick your vegetables</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={item} alt="" className="w-50 h-50"/>
          </div>
          <h2>We Deliver a Bag</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={feedback} alt="" className="w-50 h-50"/>  
          </div>
          <h2>Rate Our Service</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
      </div>
    </div>
  );
}
