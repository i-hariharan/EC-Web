import React from "react";
import logo from "../assets/images/logo.png";



export default function Navbar() {
  return (
    
    <div className="container-fluid px-5 header">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2  border-bottom border-dark">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="" className="w-25 h-25" />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 menu-color">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="nav-link px-2 menu-color">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              About
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <i className="bi bi-search fs-3 me-4 text-success"></i>
          <i className="bi bi-cart fs-3 text-success"></i>
        </div>
      </header>
    </div>
  );
}
